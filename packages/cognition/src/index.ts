/**
 * @monogent/cognition - Cognitive Processing Orchestrator
 * 
 * Based on cognitive psychology principles, orchestrates the complete
 * cognitive flow from sensation to comprehension.
 */

// Core substrate abstractions
export type { Evolution } from './interfaces/substrate/Evolution.js'
export type { Computation } from './interfaces/substrate/Computation.js'
export type { Generation } from './interfaces/substrate/Generation.js'

// Cognitive stages
export type { Sensation } from './interfaces/stages/Sensation.js'
export type { Attention } from './interfaces/stages/Attention.js'
export type { Perception } from './interfaces/stages/Perception.js'
export type { Representation } from './interfaces/stages/Representation.js'
export type { Activation } from './interfaces/stages/Activation.js'
export type { Association } from './interfaces/stages/Association.js'
export type { Recollection } from './interfaces/stages/Recollection.js'
export type { Integration } from './interfaces/stages/Integration.js'

// Core types
export type { Stimulus } from './interfaces/Stimulus.js'
export type { Experience } from './interfaces/Experience.js'
export type { Cognition } from './interfaces/Cognition.js'
export { cognition } from './interfaces/Cognition.js'
export type { Elaboration } from './interfaces/Elaboration.js'

// Stage implementations
export { sensation } from './interfaces/stages/Sensation.js'
export { attention } from './interfaces/stages/Attention.js'
export { perception } from './interfaces/stages/Perception.js'
export { representation } from './interfaces/stages/Representation.js'
export { activation } from './interfaces/stages/Activation.js'
export { association } from './interfaces/stages/Association.js'
export { recollection } from './interfaces/stages/Recollection.js'
export { integration } from './interfaces/stages/Integration.js'

// Composition utility
export { compose } from './interfaces/Experience.js'
