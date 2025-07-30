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
 * 
 * Functional Programming Alignment:
 * - Evolution as pure function transformation
 * - Composable through function composition
 * - Lazy evaluation through pipeline construction
 */
export interface Evolution {
  /**
   * The name of this evolution stage
   * Used for tracking and debugging the cognitive pipeline
   */
  readonly name: string
  
  /**
   * The fundamental operation: evolve from one state to another
   * 
   * @param input The current state or stimulus
   * @returns The evolved state, either synchronously or asynchronously
   */
  evolve<TInput, TOutput>(input: TInput): TOutput | Promise<TOutput>
}