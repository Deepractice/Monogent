import { Experience } from './Experience.js'

/**
 * Evolution Interface - The Fundamental Abstraction
 * 
 * Evolution represents the most basic process of unfolding and transformation.
 * It captures both the sense of "unfolding" (Latin: evolvere) and "evolving".
 * 
 * Philosophical Foundation:
 * - Process Philosophy: "Reality consists of events and processes rather than 
 *   substances" (Whitehead, 1929, "Process and Reality")
 * - Becoming over Being: "Everything flows, nothing stands still" 
 *   (Heraclitus, ~500 BCE)
 * - Creative Evolution: "Life is a movement, materiality is the inverse movement"
 *   (Bergson, 1907, "Creative Evolution")
 * 
 * Design Principles:
 * - All cognitive processes are forms of evolution
 * - Each step unfolds new possibilities from current state
 * - Evolution can be deterministic (Computation) or creative (Generation)
 * - All evolution is transformation of Experience
 * 
 * Functional Programming Alignment:
 * - Evolution as pure function transformation
 * - Composable through function composition
 * - Lazy evaluation through pipeline construction
 * 
 * Core Insight:
 * - Cognition is Experience evolving through stages
 * - Each Evolution transforms Experience to Experience
 * - Data types are implementation details, not architectural concerns
 */
export interface Evolution {
  /**
   * The name of this evolution stage
   * Used for tracking and debugging the cognitive pipeline
   */
  readonly name: string
  
  /**
   * The type of evolution - determines composition strategy
   * - 'sensory': Micro-evolution within sensory stage (no new Experience)
   * - 'perceptual': Macro-evolution producing new cognitive experience
   * - 'path': Composite of perceptual evolutions
   * - 'apperceptive': Highest evolution unifying origin and perception
   */
  readonly type?: 'sensory' | 'perceptual' | 'path' | 'apperceptive'
  
  /**
   * The fundamental operation: evolve Experience from one form to another
   * 
   * This signature enforces that all cognitive transformations operate on Experience.
   * Process evolutions contribute Elaborations, Function evolutions create new Experiences.
   * 
   * @param input The current Experience 
   * @returns The evolved Experience
   */
  evolve(input: Experience): Experience | Promise<Experience>
}

/**
 * Compose sensory processes (micro-evolution)
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
    name: `sensory(${processes.map(p => p.name).join('→')})`,
    type: 'sensory',
    
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
 * Compose perceptual functions (macro-evolution)
 * 
 * Key behaviors:
 * - Each perception creates a new Experience node
 * - Chains Experiences via previous pointer
 * - Each represents a cognitive milestone
 * 
 * This models Kant's understanding - forming concepts from materials
 */
export function composeFunctions(...functions: Evolution[]): Evolution {
  return {
    name: `perceptual(${functions.map(f => f.name).join('→')})`,
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