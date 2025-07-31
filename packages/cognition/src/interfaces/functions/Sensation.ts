import { Computation } from '../substrate/Computation.js'
import { compose } from '../Experience.js'
import { transduction } from '../processes/Transduction.js'
import { sensoryGating } from '../processes/SensoryGating.js'

/**
 * Sensation Function Interface
 * 
 * Receives and filters raw sensory signals through automatic processes.
 * Pure Computation substrate - fast, automatic, deterministic.
 * 
 * Theoretical Foundation:
 * - Sensory Processing: Physical stimuli to neural signals
 *   (Kandel et al., 2012, Principles of Neural Science)
 * - Signal Detection Theory: Distinguishing signal from noise
 *   (Green & Swets, 1966; Macmillan & Creelman, 2004)
 * - Sensory Gating: Pre-attentive filtering
 *   (Freedman et al., 1987; Braff & Geyer, 1990)
 * 
 * Composes:
 * 1. Transduction: Convert physical signals
 * 2. SensoryGating: Filter irrelevant stimuli
 */
export interface Sensation extends Computation {
  // Inherits evolve from Computation (sync transformation)
  // Sensation processes are automatic and deterministic
}

/**
 * Default sensation implementation using process composition
 */
export const sensation: Sensation = {
  name: 'sensation',
  
  evolve: compose(
    transduction,
    sensoryGating
  )
}