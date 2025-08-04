/**
 * @monogent/cognition - Cognitive Processing Orchestrator
 * 
 * Based on cognitive psychology principles, orchestrates the complete
 * cognitive flow from sensation to comprehension.
 */

// Core interfaces
export type { Cognition } from './interfaces/Cognition.js'
export { cognition } from './interfaces/Cognition.js'

// Substrate abstractions (the cognitive framework)
export type { Evolution } from './interfaces/substrate/Evolution.js'
export type { Stimulus } from './interfaces/substrate/Stimulus.js'
export type { Antecedent } from './interfaces/substrate/Antecedent.js'
export { composeProcesses, composeFunctions } from './interfaces/substrate/Evolution.js'
export type { Experience } from './interfaces/substrate/Experience.js'
export type { Inference } from './interfaces/substrate/Inference.js'
export { echoInference } from './interfaces/substrate/Inference.js'
export type { Apperception } from './interfaces/substrate/Apperception.js'
export { defineApperception } from './interfaces/substrate/Apperception.js'
export type { Computation } from './interfaces/substrate/Computation.js'
export { defineComputation } from './interfaces/substrate/Computation.js'
export type { Generation } from './interfaces/substrate/Generation.js'
export { defineGeneration } from './interfaces/substrate/Generation.js'
export type { Elaboration } from './interfaces/substrate/Elaboration.js'
export type { Interpretation } from './interfaces/substrate/Interpretation.js'
export type { Thought } from './interfaces/substrate/Thought.js'
export type { Transduction } from './interfaces/substrate/Transduction.js'

// Composition utilities
export { compose as composeFunc, composeAsync, pipe, pipeAsync } from './interfaces/Composer.js'

// Perceptual functions
export type { Perception } from './interfaces/perceptual/Perception.js'
export type { Comprehension } from './interfaces/perceptual/Comprehension.js'
export type { Recollection } from './interfaces/perceptual/Recollection.js'

export { perception } from './interfaces/perceptual/Perception.js'
export { comprehension } from './interfaces/perceptual/Comprehension.js'
export { recollection } from './interfaces/perceptual/Recollection.js'

// Sensory processes
export type { Sensation } from './interfaces/sensory/Sensation.js'
export type { SensoryGating } from './interfaces/sensory/SensoryGating.js'
export type { FeatureDetection } from './interfaces/sensory/FeatureDetection.js'
export type { PatternRecognition } from './interfaces/sensory/PatternRecognition.js'
export type { ExperientialEncoding } from './interfaces/sensory/ExperientialEncoding.js'
export type { SemanticEncoding } from './interfaces/sensory/SemanticEncoding.js'
export type { Categorization } from './interfaces/sensory/Categorization.js'
export type { Abstraction } from './interfaces/sensory/Abstraction.js'
export type { SpreadingActivation } from './interfaces/sensory/SpreadingActivation.js'
export type { AssociativeBinding } from './interfaces/sensory/AssociativeBinding.js'
export type { EpisodicRetrieval } from './interfaces/sensory/EpisodicRetrieval.js'
export type { Consolidation } from './interfaces/sensory/Consolidation.js'
export type { Action } from './interfaces/sensory/Action.js'

export { sensation } from './interfaces/sensory/Sensation.js'
export { sensoryGating } from './interfaces/sensory/SensoryGating.js'
export { featureDetection } from './interfaces/sensory/FeatureDetection.js'
export { patternRecognition } from './interfaces/sensory/PatternRecognition.js'
export { experientialEncoding } from './interfaces/sensory/ExperientialEncoding.js'
export { semanticEncoding } from './interfaces/sensory/SemanticEncoding.js'
export { categorization } from './interfaces/sensory/Categorization.js'
export { abstraction } from './interfaces/sensory/Abstraction.js'
export { spreadingActivation } from './interfaces/sensory/SpreadingActivation.js'
export { associativeBinding } from './interfaces/sensory/AssociativeBinding.js'
export { episodicRetrieval } from './interfaces/sensory/EpisodicRetrieval.js'
export { consolidation } from './interfaces/sensory/Consolidation.js'
export { action } from './interfaces/sensory/Action.js'

// Cognitive paths
export { understand } from './interfaces/apperceptive/understand.js'