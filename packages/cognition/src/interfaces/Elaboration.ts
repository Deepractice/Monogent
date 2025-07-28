/**
 * Elaboration Interface
 * 
 * Core abstraction for cognitive processing that carries context across stages
 * and orchestrates the flow of information through the cognitive pipeline.
 * 
 * Theoretical Foundation:
 * - Elaborative Processing: "The process of adding meaning and associations
 *   to information" (Craik & Lockhart, 1972, "Levels of Processing")
 * - Elaboration Likelihood Model: Context influences processing depth
 *   (Petty & Cacioppo, 1986)
 * - Working Memory as Processing Space: "Not just storage but active processing"
 *   (Baddeley & Hitch, 1974; Baddeley, 2000)
 * 
 * Design Philosophy:
 * - Elaboration serves dual roles:
 *   1. Context carrier: Maintains cognitive state across stages
 *   2. Process orchestrator: Coordinates the cognitive pipeline
 * - Each cognitive stage receives the same Elaboration instance
 * - Stages read from and write to the shared elaboration context
 * 
 * Biological Analogy:
 * - Like cerebrospinal fluid that bathes all brain regions
 * - Or like the global workspace in Global Workspace Theory
 *   (Baars, 1988; Dehaene & Naccache, 2001)
 */
export interface Elaboration {
  /**
   * Process information through the cognitive pipeline
   * Orchestrates the flow through all cognitive stages
   */
  process(): Promise<void>
  
  /**
   * Current focus of processing
   * What aspect of information is being elaborated
   */
  focus?: string
  
  /**
   * Depth of processing
   * From shallow (perceptual) to deep (semantic)
   */
  depth?: 'shallow' | 'intermediate' | 'deep'
  
  /**
   * Processing strategy
   * How information should be elaborated
   */
  strategy?: 'automatic' | 'controlled' | 'mixed'
  
  /**
   * Additional context that accumulates during processing
   * Stages can read and write to this shared context
   */
  context?: Record<string, unknown>
}