import { Stimulus } from './Stimulus.js'
import { Experience, ExperienceMonad } from './Experience.js'
import { sensation } from './stages/Sensation.js'
import { perception } from './stages/Perception.js'

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
    // Helper to wrap Evolution into Experience-returning function
    const wrap = (stage: string, evolution: { evolve: (input: any) => any }) => 
      (input: any): Experience<any> => ({
        value: evolution.evolve(input),
        source: stage,
        context: { stage, timestamp: Date.now() }
      })
    
    // Build the pipeline
    const pipeline = async (stimulus: Stimulus) => {
      let exp = ExperienceMonad.of(stimulus)
      
      // Apply sensation
      exp = ExperienceMonad.flatMap(wrap('sensation', sensation))(exp)
      
      // Apply perception (handle async)
      exp = ExperienceMonad.flatMap(wrap('perception', perception))(exp)
      
      // Await if value is Promise
      if (exp.value instanceof Promise) {
        exp = { ...exp, value: await exp.value }
      }
      
      return exp as Experience<T>
    }
    
    return pipeline
  },
  
  understand<T = unknown>(): (stimulus: Stimulus) => Promise<Experience<T>> {
    // Construct the understanding process
    return async (stimulus: Stimulus) => {
      // TODO: Implement full pipeline
      // For now, delegate to perceive process
      const perceiveProcess = this.perceive<T>()
      return perceiveProcess(stimulus)
    }
  }
}