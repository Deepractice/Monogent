import { Generation } from '../substrate/Generation.js'
import { episodicRetrieval } from '../processes/EpisodicRetrieval.js'

/**
 * Recollection Function Interface
 * 
 * Controlled memory retrieval that reconstructs episodic experiences.
 * Pure Generation substrate - constructive, detailed, may include errors.
 * 
 * Theoretical Foundation:
 * - Dual-Process Theory of Recognition: Recollection component
 *   (Yonelinas, 2002; Yonelinas et al., 2010)
 * - Constructive Memory: Memory as reconstruction
 *   (Bartlett, 1932; Schacter, 1996, 2012)
 * - Episodic Memory: Conscious recollection of events
 *   (Tulving, 1972, 1983, 2002)
 * 
 * Contains only:
 * 1. EpisodicRetrieval: Reconstruct complete memories from fragments
 * 
 * Note: This is the conscious, effortful component of memory that
 * retrieves specific details and context, distinct from automatic
 * recognition/familiarity.
 */
export interface Recollection extends Generation {
  // Inherits async evolve from Generation
  // Recollection is constructive and effortful
}

/**
 * Default recollection implementation
 * Single process - no composition needed
 */
export const recollection: Recollection = {
  name: 'recollection',
  type: 'function',
  
  evolve: episodicRetrieval.evolve
}