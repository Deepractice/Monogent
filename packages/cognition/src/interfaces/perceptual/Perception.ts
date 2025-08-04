import { Generation, defineGeneration } from '../substrate/Generation.js'
import { sensation } from '../sensory/Sensation.js'
import { sensoryGating } from '../sensory/SensoryGating.js'
import { featureDetection } from '../sensory/FeatureDetection.js'
import { patternRecognition } from '../sensory/PatternRecognition.js'

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
 * 1. Sensation: Receive and transduce sensory signals
 * 2. SensoryGating: Filter relevant sensory information  
 * 3. FeatureDetection: Extract basic features (with LLM interpretation)
 * 4. PatternRecognition: Form perceptual wholes
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
    sensation,
    sensoryGating,
    featureDetection,
    patternRecognition
  ]
})