import { Elaboration } from './substrate/Elaboration.js'
import { Interpretation } from './substrate/Interpretation.js'

/**
 * Experience Interface - The Unified Moment of Cognition
 * 
 * Experience represents a complete cognitive moment, containing both
 * the process of questioning (Elaboration) and the result of understanding
 * (Interpretation). It forms a linked list preserving cognitive history.
 * 
 * Theoretical Foundation:
 * - Kant's Transcendental Unity: The synthesis of sensibility and understanding
 *   (Kant, 1781, "Critique of Pure Reason")
 * - Stream of Consciousness: Each moment contains past, present, and future
 *   (James, 1890, "Principles of Psychology")
 * - Whitehead's Actual Occasions: Moments of experience as fundamental units
 *   (Whitehead, 1929, "Process and Reality")
 * 
 * Design Philosophy:
 * - No abstract "value" - only concrete cognitive products
 * - Elaboration captures the "how" of cognition (process)
 * - Interpretation captures the "what" of cognition (result)
 * - The chain preserves the "when" of cognition (history)
 * 
 * Kantian Mapping:
 * - Elaboration = Materials from sensibility (Anschauung)
 * - Interpretation = Concepts from understanding (Begriff)
 * - Experience = Unity of intuition and concept (Erkenntnis)
 */
export interface Experience {
  /**
   * The elaborative process that led to this experience
   * Contains the accumulated questions/prompts from all processes
   * This is the "sensible material" in Kantian terms
   */
  readonly elaboration?: Elaboration
  
  /**
   * The interpretive result of this experience
   * Contains the semantic understanding from LLM
   * This is the "conceptual synthesis" in Kantian terms
   */
  readonly interpretation?: Interpretation
  
  /**
   * The source that created this experience
   * Typically the name of the Function that produced it
   */
  readonly source?: string
  
  /**
   * Link to the previous experience in the cognitive chain
   * Forms a linked list of the entire cognitive journey
   * Enables tracing back through cognitive history
   */
  readonly previous?: Experience
  
  /**
   * Optional metadata about this experience
   * Can include timing, confidence, alternatives, etc.
   */
  readonly metadata?: {
    timestamp?: number
    duration?: number
    confidence?: number
    [key: string]: any
  }
}