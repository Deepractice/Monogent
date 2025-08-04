import { Experience } from './Experience.js'

/**
 * Thought Type - The Product of Apperception
 * 
 * Represents self-aware cognitive content that includes "I think".
 * Can become Origin for new cognitive cycles.
 * 
 * Theoretical Foundation:
 * - Kant: "The I think must be able to accompany all my representations"
 *   (Critique of Pure Reason, B131-132)
 * - Metacognition: "Thinking about thinking"
 *   (Flavell, 1979)
 * 
 * Design Philosophy:
 * - Keep it minimal - just what's needed for recursion
 * - Thought contains Experience (the cognitive content)
 * - Can become Origin for reflection/introspection
 */
export interface Thought {
  /**
   * The cognitive content of this thought
   */
  readonly content: Experience
  
  /**
   * Previous thought in the chain (for recursive thinking)
   */
  readonly previous?: Thought
}