import { Evolution } from './Evolution.js'
import { Experience } from '../Experience.js'

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
 * Transforms value without creating new Experience nodes
 */
function composeProcesses(processes: Evolution[]): Evolution {
  return {
    name: `composed-processes(${processes.map(p => p.name).join(',')})`,
    type: 'process',
    
    async evolve<TInput, TOutput>(input: Experience<TInput>): Promise<Experience<TOutput>> {
      // Start with the input value
      let currentValue: unknown = input.value
      const processMetadata: Record<string, unknown> = {}
      
      // Run each process in sequence
      for (const process of processes) {
        // Create temporary experience with current value
        const tempExperience: Experience<unknown> = {
          value: currentValue,
          source: input.source,
          context: input.context,
          previous: input.previous
        }
        
        // Run the process
        const result = await process.evolve(tempExperience)
        
        // Extract the transformed value
        currentValue = result.value
        
        // Collect process metadata
        if (result.context && typeof result.context === 'object') {
          processMetadata[process.name] = result.context
        }
      }
      
      // Return the original Experience with transformed value
      // This preserves the Experience chain - no new node created
      return {
        value: currentValue as TOutput,
        source: input.source,
        context: {
          ...(typeof input.context === 'object' ? input.context : {}),
          processMetadata
        },
        previous: input.previous
      }
    }
  }
}

/**
 * Compose functions (macro-evolution)
 * Each function creates a new Experience node
 */
function composeFunctions(functions: Evolution[]): Evolution {
  return {
    name: `composed-functions(${functions.map(f => f.name).join('->')})`,
    type: 'path',
    
    async evolve<TInput, TOutput>(input: Experience<TInput>): Promise<Experience<TOutput>> {
      let current: Experience<unknown> = input
      
      // Each function creates a new Experience node
      for (const func of functions) {
        const next = await func.evolve(current)
        
        // Ensure proper chaining
        if (!next.previous) {
          current = {
            ...next,
            previous: current
          }
        } else {
          current = next
        }
      }
      
      return current as Experience<TOutput>
    }
  }
}

/**
 * Default EvolutionComposer implementation
 * 
 * Automatically selects composition strategy based on Evolution type:
 * - 'process': Micro-evolution (transforms value without creating new Experience)
 * - 'function': Macro-evolution (creates new Experience with chaining)
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
        return composeProcesses(evolutions)
      
      case 'function':
      case 'path':
        return composeFunctions(evolutions)
      
      default:
        // Treat unknown types as functions for backward compatibility
        return composeFunctions(evolutions)
    }
  }
}

/**
 * Convenience function using the default composer
 */
export function compose(...evolutions: Evolution[]): Evolution {
  return defaultComposer.compose(...evolutions)
}