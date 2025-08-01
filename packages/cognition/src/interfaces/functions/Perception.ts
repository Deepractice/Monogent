import { Generation } from '../substrate/Generation.js'
import { compose } from '../substrate/EvolutionComposer.js'
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
 * 1. FeatureDetection: Extract basic features (with LLM interpretation)
 * 2. PatternRecognition: Form perceptual wholes
 */
export interface Perception extends Generation {
  // Inherits async evolve from Generation
  // Perception involves interpretation and pattern formation
}

/**
 * Default perception implementation using process composition
 */
export const perception: Perception = {
  name: 'perception',
  type: 'function',
  
  evolve: compose(
    featureDetection,
    patternRecognition
  ).evolve
}