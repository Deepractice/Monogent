/**
 * Experience Type - The fundamental unit of cognitive processing
 * 
 * Experience represents a complete moment of cognition.
 * This is a pure type representing the data structure.
 * 
 * Theoretical Foundation:
 * - Stream of Consciousness (James, 1890)
 * - Actual Occasions (Whitehead, 1929)
 * - Memory Systems: What, How, Where/When (Tulving, 1985)
 * 
 * Design Philosophy:
 * - Each cognitive process produces a new Experience
 * - Experiences form a linked list, preserving cognitive history
 * - The chain allows tracing back through the entire cognitive journey
 */
export interface Experience<T> {
  /**
   * The content of this experience (What)
   */
  readonly value: T
  
  /**
   * Optional metadata about how this experience was created (How)
   */
  readonly source?: string
  
  /**
   * Optional context of this experience (Where/When)
   */
  readonly context?: unknown
  
  /**
   * Link to the previous experience in the cognitive chain
   * This creates a linked list of the entire cognitive journey
   */
  readonly previous?: Experience<any>
}

