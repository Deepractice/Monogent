/**
 * @monogent/cognition - Cognitive Processing Orchestrator
 * 
 * Based on cognitive psychology principles, orchestrates the complete
 * cognitive flow from sensation to comprehension.
 */

// Core interfaces
export type { Stimulus } from './interfaces/Stimulus.js'
export type { Cognition } from './interfaces/Cognition.js'
export { cognition } from './interfaces/Cognition.js'

// Substrate abstractions (the cognitive framework)
export type { Evolution } from './interfaces/substrate/Evolution.js'
export type { Experience } from './interfaces/substrate/Experience.js'
export type { Synthesis } from './interfaces/substrate/Synthesis.js'
export type { Computation } from './interfaces/substrate/Computation.js'
export { defineComputation } from './interfaces/substrate/Computation.js'
export type { Generation } from './interfaces/substrate/Generation.js'
export { defineGeneration } from './interfaces/substrate/Generation.js'
export type { Elaboration } from './interfaces/substrate/Elaboration.js'
export type { Interpretation } from './interfaces/substrate/Interpretation.js'
export type { EvolutionComposer } from './interfaces/substrate/EvolutionComposer.js'
export { compose, composeProcesses, composeFunctions, defaultComposer } from './interfaces/substrate/EvolutionComposer.js'

// Composition utilities
export { compose as composeFunc, composeAsync, pipe, pipeAsync } from './interfaces/Composer.js'

// Cognitive functions
export type { Perception } from './interfaces/functions/Perception.js'
export type { Comprehension } from './interfaces/functions/Comprehension.js'
export type { Recollection } from './interfaces/functions/Recollection.js'

export { perception } from './interfaces/functions/Perception.js'
export { comprehension } from './interfaces/functions/Comprehension.js'
export { recollection } from './interfaces/functions/Recollection.js'

// Cognitive processes
export type { Sensation } from './interfaces/processes/Sensation.js'
export type { SensoryGating } from './interfaces/processes/SensoryGating.js'
export type { FeatureDetection } from './interfaces/processes/FeatureDetection.js'
export type { PatternRecognition } from './interfaces/processes/PatternRecognition.js'
export type { ExperientialEncoding } from './interfaces/processes/ExperientialEncoding.js'
export type { SemanticEncoding } from './interfaces/processes/SemanticEncoding.js'
export type { Categorization } from './interfaces/processes/Categorization.js'
export type { Abstraction } from './interfaces/processes/Abstraction.js'
export type { SpreadingActivation } from './interfaces/processes/SpreadingActivation.js'
export type { AssociativeBinding } from './interfaces/processes/AssociativeBinding.js'
export type { EpisodicRetrieval } from './interfaces/processes/EpisodicRetrieval.js'
export type { Consolidation } from './interfaces/processes/Consolidation.js'
export type { Action } from './interfaces/processes/Action.js'

export { sensation } from './interfaces/processes/Sensation.js'
export { sensoryGating } from './interfaces/processes/SensoryGating.js'
export { featureDetection } from './interfaces/processes/FeatureDetection.js'
export { patternRecognition } from './interfaces/processes/PatternRecognition.js'
export { experientialEncoding } from './interfaces/processes/ExperientialEncoding.js'
export { semanticEncoding } from './interfaces/processes/SemanticEncoding.js'
export { categorization } from './interfaces/processes/Categorization.js'
export { abstraction } from './interfaces/processes/Abstraction.js'
export { spreadingActivation } from './interfaces/processes/SpreadingActivation.js'
export { associativeBinding } from './interfaces/processes/AssociativeBinding.js'
export { episodicRetrieval } from './interfaces/processes/EpisodicRetrieval.js'
export { consolidation } from './interfaces/processes/Consolidation.js'
export { action } from './interfaces/processes/Action.js'

// Cognitive paths
export { understand } from './interfaces/paths/understand.js'