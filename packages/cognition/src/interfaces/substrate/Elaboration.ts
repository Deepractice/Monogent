import { JSONSchema7 } from 'json-schema'

/**
 * Elaboration Interface - The Unfolding of Thought
 * 
 * Represents the cognitive work of expanding and developing ideas.
 * Each process contributes its own elaboration, which are then
 * synthesized at the function level.
 * 
 * Theoretical Foundation:
 * - Elaborative Processing: Progressive enrichment of information
 *   (Craik & Lockhart, 1972, "Levels of Processing")
 * - Kant's Synthesis: The act of combining representations
 *   (Kant, 1781, "Critique of Pure Reason")
 * 
 * Design Philosophy:
 * - Elaboration is the "question" or "prompt" for understanding
 * - Each cognitive process contributes its perspective
 * - Function level synthesizes all elaborations
 * - Separation of process (elaboration) and result (interpretation)
 */
export interface Elaboration {
  /**
   * The prompt fragment contributed by this cognitive process
   * Describes what this process wants to know or transform
   */
  readonly prompt: string
  
  /**
   * Optional schema describing the expected structure
   * Helps LLM understand the desired output format
   */
  readonly schema?: JSONSchema7
  
  /**
   * The source process that created this elaboration
   * Enables tracing which cognitive process contributed what
   */
  readonly source?: string
  
  /**
   * Link to the previous elaboration in the chain
   * Forms a linked list of all elaborations within a function
   * This creates a traceable history of how understanding unfolds
   */
  readonly previous?: Elaboration
}