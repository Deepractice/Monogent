import { Computation } from '../substrate/Computation.js'
import { integration } from '../processes/Integration.js'

/**
 * Consolidation Function Interface
 * 
 * Consolidates experiences into long-term memory through network growth.
 * Pure Computation substrate - deterministic graph operations.
 * 
 * Theoretical Foundation:
 * - Memory Consolidation Theory: From temporary to permanent storage
 *   (McGaugh, 2000, "Memory - a century of consolidation")
 * - Systems Consolidation: Hippocampus to neocortex transfer
 *   (Squire & Alvarez, 1995; Frankland & Bontempi, 2005)
 * - Synaptic Consolidation: LTP and structural changes
 *   (Dudai, 2004, "The neurobiology of consolidations")
 * 
 * Key Characteristics:
 * - Strengthens memory traces
 * - Creates new connections in knowledge network
 * - Integrates new experiences with existing knowledge
 * - Occurs after initial encoding (comprehension)
 * 
 * Contains only:
 * 1. Integration: Memory consolidation and graph growth
 * 
 * Note: Consolidation is a specific memory process, distinct from
 * the broader concept of "learning" which includes comprehension,
 * practice, and skill acquisition.
 */
export interface Consolidation extends Computation {
  // Inherits evolve from Computation (sync transformation)
  // Consolidation is deterministic memory integration
}

/**
 * Default consolidation implementation
 * Single process - no composition needed
 */
export const consolidation: Consolidation = {
  name: 'consolidation',
  
  evolve: integration.evolve
}