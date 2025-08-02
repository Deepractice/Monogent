import { Evolution } from './Evolution.js'
import { Experience } from '../Experience.js'
import { Elaboration } from './Elaboration.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('computation')

/**
 * Computation Substrate Interface
 * 
 * Deterministic evolution - algorithmic unfolding of cognitive processes.
 * Represents transformations that are predictable and reproducible.
 * 
 * Theoretical Foundation:
 * - Computational Theory of Mind: "Cognition as computation over representations"
 *   (Fodor, 1975; Pylyshyn, 1984)
 * - Type 1 Processing: "Fast, automatic, unconscious, parallel"
 *   (Kahneman, 2011, "Thinking, Fast and Slow")
 * - Deterministic Processes: "Given input uniquely determines output"
 *   (Turing, 1936, "On Computable Numbers")
 * 
 * Design Principles:
 * - Extends Evolution with synchronous, deterministic behavior
 * - No side effects, pure functional transformation
 * - Computation is the "necessary unfolding" of evolution
 * 
 * Examples:
 * - Pattern matching, feature extraction, signal transduction
 * - Memory indexing, association lookup, network traversal
 * - Logical inference, mathematical calculation, optimization
 */
export interface Computation extends Evolution {
  // Inherits evolve from Evolution
  // Computation guarantees synchronous execution (no Promise)
  
  /**
   * Create an elaboration based on previous elaborations
   * This is the core method that processes implement
   * 
   * @param previous The previous elaboration in the chain (if any)
   * @returns A new elaboration with this process's contribution
   */
  elaborate(previous?: Elaboration): Elaboration
}

/**
 * Factory function to define a Computation process
 * Similar to Vue's defineComponent, provides a clean API for creating processes
 * 
 * @param options The computation definition
 * @returns A complete Computation implementation
 */
export function defineComputation(options: {
  name: string
  elaborate: (previous?: Elaboration) => Elaboration
}): Computation {
  return {
    name: options.name,
    type: 'process',
    
    elaborate: options.elaborate,
    
    evolve(input: Experience): Experience {
      log.debug(`Processing ${options.name}`, { 
        source: input.source,
        hasElaboration: !!input.elaboration 
      })
      
      // Create new elaboration based on previous
      const elaboration = options.elaborate(input.elaboration)
      
      // Return updated Experience (no new node created)
      return {
        ...input,
        elaboration
      }
    }
  }
}