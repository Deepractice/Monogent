import { Generation, defineGeneration } from '../substrate/Generation.js'
import { experientialEncoding } from '../processes/ExperientialEncoding.js'
import { sensation } from '../processes/Sensation.js'
import { sensoryGating } from '../processes/SensoryGating.js'
import { featureDetection } from '../processes/FeatureDetection.js'
import { patternRecognition } from '../processes/PatternRecognition.js'

/**
 * Perception Function Interface
 * 
 * Organizes sensory signals into meaningful perceptual experiences.
 * Pure Generation substrate - creative, interpretive, context-dependent.
 * 
 * Theoretical Foundation:
 * - Gestalt Psychology: "The whole is greater than the sum of parts"
 *   (Wertheimer, 1923; Koffka, 1935; Köhler, 1947)
 * - Feature Integration Theory: Binding features into objects
 *   (Treisman & Gelade, 1980; Treisman, 1996)
 * - Predictive Processing: Perception as inference
 *   (Rao & Ballard, 1999; Clark, 2013; Hohwy, 2013)
 * 
 * Composes:
 * 1. ExperientialEncoding: Convert stimuli into Experience format
 * 2. Sensation: Receive and transduce sensory signals
 * 3. SensoryGating: Filter relevant sensory information  
 * 4. FeatureDetection: Extract basic features (with LLM interpretation)
 * 5. PatternRecognition: Form perceptual wholes
 */
export interface Perception extends Generation {
  // Inherits async evolve from Generation
  // Perception involves interpretation and pattern formation
}

/**
 * Default perception implementation using defineGeneration
 * 
 * Runs five processes to build up perceptual understanding:
 * - ExperientialEncoding: Entry point into cognition
 * - Sensation: Initial contact with stimuli
 * - SensoryGating: Attention filtering
 * - FeatureDetection: Extract meaningful features
 * - PatternRecognition: Form coherent perceptual gestalts
 */
export const perception: Perception = defineGeneration({
  name: 'perception',
  processes: [
    experientialEncoding,
    sensation,
    sensoryGating,
    featureDetection,
    patternRecognition
  ]
})