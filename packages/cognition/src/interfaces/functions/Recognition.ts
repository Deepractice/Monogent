import { Computation } from '../substrate/Computation.js'
import { compose } from '../Experience.js'
import { spreadingActivation } from '../processes/SpreadingActivation.js'
import { associativeBinding } from '../processes/AssociativeBinding.js'

/**
 * Recognition Function Interface
 * 
 * Automatic memory processes that provide familiarity and pattern matching.
 * Pure Computation substrate - fast, automatic, based on activation.
 * 
 * Theoretical Foundation:
 * - Dual-Process Theory of Recognition: Familiarity vs Recollection
 *   (Yonelinas, 2002; Yonelinas et al., 2010)
 * - Spreading Activation Theory: Automatic memory activation
 *   (Collins & Loftus, 1975; Anderson, 1983)
 * - Recognition Memory: Fast familiarity judgments
 *   (Mandler, 1980; Jacoby, 1991)
 * 
 * Composes:
 * 1. SpreadingActivation: Automatic activation of related memories
 * 2. AssociativeBinding: Fast pattern matching and binding
 * 
 * Note: This is the "familiarity" component of memory, distinct from
 * conscious recollection which requires Generation processes.
 */
export interface Recognition extends Computation {
  // Inherits evolve from Computation (sync transformation)
  // Recognition is automatic and fast
}

/**
 * Default recognition implementation using process composition
 */
export const recognition: Recognition = {
  name: 'recognition',
  
  evolve: compose(
    spreadingActivation,
    associativeBinding
  )
}