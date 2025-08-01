import { Computation } from '../substrate/Computation.js'
import { compose } from '../substrate/EvolutionComposer.js'
import { spreadingActivation } from '../processes/SpreadingActivation.js'
import { associativeBinding } from '../processes/AssociativeBinding.js'

/**
 * Familiarity Function Interface
 * 
 * Fast, automatic memory signal indicating "I've experienced this before".
 * Pure Computation substrate - unconscious, rapid pattern matching.
 * 
 * Theoretical Foundation:
 * - Dual-Process Theory: Familiarity vs Recollection
 *   (Yonelinas, 2002, "The nature of recollection and familiarity")
 * - Recognition Memory: Fast familiarity judgments
 *   (Mandler, 1980, "Recognizing: The judgment of previous occurrence")
 * - Signal Detection Theory: Familiarity as signal strength
 *   (Wixted, 2007, "Dual-process theory and signal-detection theory")
 * 
 * Neuroscience Basis:
 * - Perirhinal cortex: Item familiarity
 *   (Brown & Aggleton, 2001, "Recognition memory")
 * - Hippocampus: Rapid pattern completion
 *   (Norman & O'Reilly, 2003, "Modeling hippocampal function")
 * 
 * Key Characteristics:
 * - Fast (<300ms in humans)
 * - Automatic (no conscious effort)
 * - Graded signal (0-1 strength)
 * - No contextual details
 * 
 * Composes:
 * 1. SpreadingActivation: Automatic memory activation
 * 2. AssociativeBinding: Pattern matching without retrieval
 */
export interface Familiarity extends Computation {
  // Inherits evolve from Computation (sync transformation)
  // Returns familiarity strength, not memory content
}

/**
 * Default familiarity implementation using process composition
 */
export const familiarity: Familiarity = {
  name: 'familiarity',
  type: 'function',
  
  evolve: compose(
    spreadingActivation,
    associativeBinding
  ).evolve
}