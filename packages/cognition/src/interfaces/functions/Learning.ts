import { Computation } from '../substrate/Computation.js'
import { integration } from '../processes/Integration.js'

/**
 * Learning Function Interface
 * 
 * Consolidates experiences into long-term memory through network growth.
 * Pure Computation substrate - deterministic graph operations.
 * 
 * Theoretical Foundation:
 * - Memory Consolidation: From temporary to permanent storage
 *   (McGaugh, 2000; Dudai, 2004; Dudai et al., 2015)
 * - Hebbian Learning: "Cells that fire together wire together"
 *   (Hebb, 1949; Bliss & Lømo, 1973)
 * - Preferential Attachment: Network growth patterns
 *   (Barabási & Albert, 1999)
 * 
 * Contains only:
 * 1. Integration: Memory consolidation and graph growth
 * 
 * Note: Learning here refers to the consolidation process that
 * strengthens and integrates memories, not the acquisition of
 * new skills or knowledge.
 */
export interface Learning extends Computation {
  // Inherits evolve from Computation (sync transformation)
  // Learning is the consolidation of experience
}

/**
 * Default learning implementation
 * Single process - no composition needed
 */
export const learning: Learning = {
  name: 'learning',
  
  evolve: integration.evolve
}