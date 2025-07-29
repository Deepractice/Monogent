/**
 * Experience Interface - The Monad of Cognition
 * 
 * Experience represents the fundamental unit of cognitive processing.
 * Each experience is a complete moment of cognition.
 * 
 * Theoretical Foundation:
 * - Stream of Consciousness (James, 1890)
 * - Actual Occasions (Whitehead, 1929)
 * - Memory Systems: What, How, Where/When (Tulving, 1985)
 */
export interface Experience<T> {
  /**
   * The content of this experience (What)
   */
  readonly value: T
  
  /**
   * Transform the content (Functor)
   */
  map<U>(f: (value: T) => U): Experience<U>
  
  /**
   * Chain experiences (Monad)
   */
  flatMap<U>(f: (value: T) => Experience<U>): Experience<U>
}