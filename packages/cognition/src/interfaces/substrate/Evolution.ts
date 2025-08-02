import { Experience } from '../Experience.js'

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
   * - 'process': Micro-evolution within a cognitive stage (no new Experience)
   * - 'function': Macro-evolution producing new cognitive experience
   * - 'path': Composite of functions
   */
  readonly type?: 'process' | 'function' | 'path'
  
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