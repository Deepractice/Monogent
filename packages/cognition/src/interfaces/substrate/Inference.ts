import { Experience } from './Experience.js'
import { Interpretation } from './Interpretation.js'

/**
 * Inference Interface - Cortical Processing Simulation
 * 
 * Encapsulates the LLM interaction strategy for transforming
 * elaborations into interpretations. This simulates the inference
 * capabilities of the cerebral cortex.
 * 
 * Theoretical Foundation:
 * - Predictive Processing: "The brain as an inference machine"
 *   (Friston, 2010; Clark, 2013; Hohwy, 2013)
 * - Cortical Computation: "Hierarchical Bayesian inference in cortical circuits"
 *   (Lee & Mumford, 2003; Friston, 2005)
 * - Semantic Inference: "From perception to meaning"
 *   (Rogers & McClelland, 2004)
 * 
 * Design Philosophy:
 * - Inference is the external hook for LLM integration
 * - LLM simulates cortical inference processes
 * - Transforms elaborative questions into semantic understanding
 * 
 * The inference receives the full Experience (with elaboration)
 * and returns an Interpretation, completing the cognitive cycle.
 */
export interface Inference {
  /**
   * The inference function
   * Performs cortical-like inference on the elaborated experience
   * 
   * This is typically where LLM calls happen:
   * 1. Extract prompts from the elaboration chain
   * 2. Call the language model (simulating cortical processing)
   * 3. Structure the response as an Interpretation
   * 
   * @param experience The experience containing elaboration to process
   * @returns A promise resolving to the interpretation
   */
  infer: (experience: Experience) => Promise<Interpretation>
  
  /**
   * Optional metadata about this inference configuration
   * Can include model settings, prompting strategies, etc.
   */
  metadata?: {
    model?: string
    temperature?: number
    maxTokens?: number
    systemPrompt?: string
    [key: string]: any
  }
}

/**
 * Echo Inference - A mock implementation for testing
 * 
 * Simply returns the elaboration as the interpretation.
 * Useful for testing cognitive flows without LLM integration.
 */
export const echoInference: Inference = {
  async infer(experience: Experience): Promise<Interpretation> {
    return {
      content: experience.elaboration || { message: 'No elaboration to echo' },
      source: `echo-${experience.source || 'unknown'}`,
      confidence: 1.0
    }
  },
  
  metadata: {
    model: 'echo',
    description: 'Mock inference that echoes elaboration as interpretation'
  }
}