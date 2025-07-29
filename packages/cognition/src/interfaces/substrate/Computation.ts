import { Evolution } from './Evolution.js'

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
  // Inherits evolve<TInput, TOutput>(input: TInput): TOutput
  // Computation guarantees synchronous execution (no Promise)
}