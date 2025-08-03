import { Evolution } from './Evolution.js'
import { Experience } from './Experience.js'
import { Elaboration } from './Elaboration.js'
import { Interpretation } from './Interpretation.js'
import { Computation } from './Computation.js'
import { Synthesis } from './Synthesis.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('generation')

/**
 * Generation Substrate Interface
 * 
 * Creative evolution - semantic unfolding of cognitive processes.
 * Represents transformations that are interpretive and generative.
 * 
 * Theoretical Foundation:
 * - Generative Linguistics: "Infinite use of finite means"
 *   (Chomsky, 1965, "Aspects of the Theory of Syntax")
 * - Type 2 Processing: "Slow, sequential, conscious, controlled"
 *   (Evans & Stanovich, 2013, "Dual-Process Theories")
 * - Creative Cognition: "Generation of novel and useful ideas"
 *   (Finke et al., 1992, "Creative Cognition")
 * 
 * Neuroscience Basis:
 * - Default Mode Network: Creative idea generation
 *   (Beaty et al., 2016, "Creative Cognition and Brain Network Dynamics")
 * - Language Areas: Broca's and Wernicke's for semantic processing
 *   (Hagoort, 2013, "MUC (Memory, Unification, Control)")
 * 
 * Design Principles:
 * - Extends Evolution with asynchronous, creative behavior
 * - Leverages LLM capabilities for semantic understanding
 * - Generation is the "creative unfolding" of evolution
 * 
 * Examples:
 * - Pattern interpretation, meaning construction, narrative generation
 * - Concept formation, metaphor creation, insight generation
 * - Language production, creative problem solving, hypothesis formation
 */
export interface Generation extends Evolution {
  /**
   * Create a new experience based on previous experience
   * This is the core method that functions implement
   * 
   * @param previous The previous experience in the chain
   * @returns A new Experience with elaboration (no interpretation yet)
   */
  experience(previous: Experience): Experience
}

/**
 * Factory function to define a Generation function
 * Similar to defineComputation, provides a clean API for creating functions
 * 
 * @param options The generation definition
 * @returns A complete Generation implementation
 */
export function defineGeneration(options: {
  name: string
  processes: Computation[]
}): Generation {
  return {
    name: options.name,
    type: 'function',
    
    experience(previous: Experience): Experience {
      log.debug(`Creating experience for ${options.name}`, {
        source: previous.source,
        hasElaboration: !!previous.elaboration
      })
      
      let accumulated = previous
      
      // Run all processes to accumulate elaborations
      for (const process of options.processes) {
        accumulated = process.evolve(accumulated)
      }
      
      // Create new Experience node
      return {
        elaboration: accumulated.elaboration,
        source: options.name,
        previous: previous,
        metadata: {
          timestamp: Date.now(),
          processes: options.processes.map(p => p.name)
        }
      }
    },
    
    async evolve(previous: Experience): Promise<Experience> {
      // Create new experience with elaboration
      const newExperience = this.experience(previous)
      
      // Get synthesis configuration
      const synthesis = newExperience.synthesis || previous.synthesis
      if (!synthesis) {
        throw new Error(`No synthesis configuration found for ${this.name}`)
      }
      
      log.debug(`Calling synthesis for ${this.name}`, {
        hasElaboration: !!newExperience.elaboration
      })
      
      // Call LLM through synthesis
      const interpretation = await synthesis.interpret(newExperience)
      
      // Return complete Experience
      return {
        ...newExperience,
        interpretation
      }
    }
  }
}