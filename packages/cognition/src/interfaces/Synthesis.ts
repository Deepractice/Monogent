import { Experience } from './Experience.js'
import { Interpretation } from './substrate/Interpretation.js'

/**
 * Synthesis Configuration Interface
 * 
 * Encapsulates the LLM interaction strategy for transforming
 * elaborations into interpretations. This is the bridge between
 * the cognitive system and external language models.
 * 
 * Theoretical Foundation:
 * - Synthesis in Kant: The act of combining intuitions with concepts
 *   (Kant, 1781, "Critique of Pure Reason", A77/B103)
 * - Hermeneutic Circle: Understanding through interpretation
 *   (Gadamer, 1960, "Truth and Method")
 * - Semantic Synthesis: Creating meaning from linguistic materials
 *   (Jackendoff, 2002, "Foundations of Language")
 * 
 * Design Philosophy:
 * - Synthesis is the external hook for LLM integration
 * - Decouples the cognitive architecture from specific LLM implementations
 * - Allows flexible interpretation strategies
 * 
 * The synthesis callback receives the full Experience (with elaboration)
 * and returns an Interpretation, completing the cognitive cycle.
 */
export interface Synthesis {
  /**
   * The interpretation callback function
   * Transforms an Experience (with elaboration) into an Interpretation
   * 
   * This is typically where LLM calls happen:
   * 1. Extract prompts from the elaboration chain
   * 2. Call the language model
   * 3. Structure the response as an Interpretation
   * 
   * @param experience The experience containing elaboration to interpret
   * @returns A promise resolving to the interpretation
   */
  interpret: (experience: Experience) => Promise<Interpretation>
  
  /**
   * Optional metadata about this synthesis configuration
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