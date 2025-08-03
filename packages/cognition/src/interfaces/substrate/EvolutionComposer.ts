import { Evolution } from './Evolution.js'
import { Experience } from './Experience.js'
import { Elaboration } from './Elaboration.js'

/**
 * EvolutionComposer Interface
 * 
 * Defines how to compose multiple Evolutions into one.
 * Different implementations can provide different composition strategies.
 */
export interface EvolutionComposer {
  /**
   * Compose multiple Evolutions into a single Evolution
   * 
   * @param evolutions The evolutions to compose
   * @returns A new Evolution that represents the composition
   */
  compose(...evolutions: Evolution[]): Evolution
}

/**
 * Compose processes (micro-evolution)
 * 
 * Key behaviors:
 * - Accumulates Elaborations in the chain
 * - Preserves the original Experience (no new node)
 * - Passes accumulated context through the pipeline
 * 
 * This models Kant's sensibility - gathering materials for understanding
 */
export function composeProcesses(...processes: Evolution[]): Evolution {
  return {
    name: `processes(${processes.map(p => p.name).join('→')})`,
    type: 'process',
    
    async evolve(input: Experience): Promise<Experience> {
      let current = input
      
      // Run each process in sequence, accumulating elaborations
      for (const process of processes) {
        current = await process.evolve(current)
      }
      
      // Return the final Experience with accumulated elaboration
      // No new Experience node - preserves the chain
      return current
    }
  }
}

/**
 * Compose functions (macro-evolution)
 * 
 * Key behaviors:
 * - Each function creates a new Experience node
 * - Chains Experiences via previous pointer
 * - Each represents a cognitive milestone
 * 
 * This models Kant's understanding - forming concepts from materials
 */
export function composeFunctions(...functions: Evolution[]): Evolution {
  return {
    name: `functions(${functions.map(f => f.name).join('→')})`,
    type: 'path',
    
    async evolve(input: Experience): Promise<Experience> {
      let current: Experience = input
      
      // Each function creates a new Experience node
      for (const func of functions) {
        const next = await func.evolve(current)
        
        // Ensure proper Experience chaining
        if (!next.previous) {
          current = {
            ...next,
            previous: current
          }
        } else {
          current = next
        }
      }
      
      return current
    }
  }
}

/**
 * Default EvolutionComposer implementation
 * 
 * Automatically selects composition strategy based on Evolution type:
 * - 'process': Uses composeProcesses (accumulates Elaborations)
 * - 'function': Uses composeFunctions (chains Experiences)
 * - 'path': Same as function (chains multiple functions)
 * 
 * Enforces type consistency - all composed evolutions must have the same type.
 */
export const defaultComposer: EvolutionComposer = {
  compose(...evolutions: Evolution[]): Evolution {
    if (evolutions.length === 0) {
      throw new Error('Cannot compose empty evolution list')
    }
    
    // Determine the type from the first evolution
    const baseType = evolutions[0].type || 'function'
    
    // Verify all evolutions have the same type
    const inconsistentType = evolutions.find(e => (e.type || 'function') !== baseType)
    if (inconsistentType) {
      throw new Error(
        `Type mismatch in composition: expected '${baseType}' but found '${inconsistentType.type}' ` +
        `in evolution '${inconsistentType.name}'`
      )
    }
    
    // Delegate to appropriate composition strategy
    switch (baseType) {
      case 'process':
        return composeProcesses(...evolutions)
      
      case 'function':
      case 'path':
        return composeFunctions(...evolutions)
      
      default:
        // Treat unknown types as functions for backward compatibility
        return composeFunctions(...evolutions)
    }
  }
}

/**
 * Convenience function using the default composer
 * @deprecated Use composeProcesses or composeFunctions directly for clarity
 */
export function compose(...evolutions: Evolution[]): Evolution {
  return defaultComposer.compose(...evolutions)
}