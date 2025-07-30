import { Stimulus } from './Stimulus.js'
import { Experience, compose } from './Experience.js'
import { sensation } from './stages/Sensation.js'
import { perception } from './stages/Perception.js'
import { representation } from './stages/Representation.js'
import { activation } from './stages/Activation.js'
import { association } from './stages/Association.js'
import { recollection } from './stages/Recollection.js'
import { integration } from './stages/Integration.js'

/**
 * Cognition Interface - The Central Cognitive System
 * 
 * The fundamental interface for cognitive processing, transforming
 * stimuli into understanding through a pipeline of cognitive evolutions.
 * 
 * Theoretical Foundation:
 * - Information Processing Theory: "Cognition as transformation of information"
 *   (Atkinson & Shiffrin, 1968; Neisser, 1967)
 * - Standard Model of the Mind: Consensus across cognitive architectures
 *   (Laird, Lebiere & Rosenbloom, 2017)
 * - Global Workspace Theory: "Understanding as global integration"
 *   (Baars, 1988; Dehaene & Naccache, 2001)
 * 
 * Design Philosophy:
 * - Cognition constructs processes, not results
 * - Processes are composed before execution
 * - Separation of construction and execution
 * 
 * Process Philosophy:
 * - Cognition is the process of Experience evolving through stages
 * - Each stage transforms Experience into richer forms
 * - Understanding emerges from the complete transformation
 */
export interface Cognition {
  /**
   * Construct a cognitive process for perception
   * 
   * Returns a function that transforms stimulus into percept:
   * - Sensation: Transduction of physical stimuli
   * - Perception: Organization into meaningful patterns
   * 
   * @returns A cognitive process from Stimulus to Experience
   */
  perceive<T = unknown>(): (stimulus: Stimulus) => Promise<Experience<T>>
  
  /**
   * Construct a cognitive process for understanding
   * 
   * Returns a function that transforms stimulus through:
   * - Sensation: Transduction of physical stimuli
   * - Perception: Organization into meaningful patterns
   * - Representation: Symbolic encoding
   * - Activation: Concept activation
   * - Association: Pattern completion
   * - Recollection: Memory reconstruction
   * - Integration: Final understanding
   * 
   * @returns A cognitive process from Stimulus to Experience
   */
  understand<T = unknown>(): (stimulus: Stimulus) => Promise<Experience<T>>
}

/**
 * Default cognition implementation as a singleton object
 * Constructs cognitive processes rather than executing them
 */
export const cognition: Cognition = {
  perceive<T = unknown>(): (stimulus: Stimulus) => Promise<Experience<T>> {
    return compose<Stimulus, T>(sensation, perception)
  },
  
  understand<T = unknown>(): (stimulus: Stimulus) => Promise<Experience<T>> {
    return compose<Stimulus, T>(
      sensation,
      perception,
      representation,
      activation,
      association,
      recollection,
      integration
    )
  }
}