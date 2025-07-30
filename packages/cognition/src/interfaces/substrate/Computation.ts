import { Evolution } from './Evolution.js'
import { Experience } from '../Experience.js'
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
  // Transforms Experience<TInput> → Experience<TOutput> deterministically
}

/**
 * Default computation implementation
 * Provides basic deterministic transformation as a starting point
 */
export const computation: Computation = {
  name: 'computation',
  
  evolve<TInput = unknown, TOutput = unknown>(
    input: Experience<TInput>
  ): Experience<TOutput> {
    log.debug('Computing transformation', { 
      value: input.value,
      source: input.source 
    })
    
    // TODO: Implement deterministic computation logic
    // For now, transform the experience
    const output: Experience<TOutput> = {
      value: input.value as unknown as TOutput,
      source: 'computation',
      context: {
        ...(typeof input.context === 'object' && input.context !== null ? input.context : {}),
        previousSource: input.source,
        timestamp: Date.now()
      }
    }
    
    log.debug('Computed output', { 
      value: output.value,
      source: output.source 
    })
    return output
  }
}