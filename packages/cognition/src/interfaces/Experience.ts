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
}

/**
 * ExperienceMonad - Monadic operations for Experience type
 * 
 * All operations are curried by default to support process composition.
 * This aligns with the overall architecture where cognition is process construction.
 */
export const ExperienceMonad = {
  /**
   * Create an Experience from a value (unit/return in monad terms)
   */
  of<T>(value: T): Experience<T> {
    return { value }
  },
  
  /**
   * Transform the content (Functor map) - Curried
   * 
   * @param f The transformation function
   * @returns A function that transforms an Experience
   */
  map<T, U>(f: (value: T) => U): (exp: Experience<T>) => Experience<U> {
    return (exp) => ({
      value: f(exp.value),
      source: exp.source,
      context: exp.context
    })
  },
  
  /**
   * Chain experiences (Monad flatMap/bind) - Curried
   * 
   * @param f Function that returns a new Experience
   * @returns A function that chains Experiences
   */
  flatMap<T, U>(f: (value: T) => Experience<U>): (exp: Experience<T>) => Experience<U> {
    return (exp) => {
      const result = f(exp.value)
      // Preserve context chain
      return {
        ...result,
        context: exp.context ? { previous: exp.context, current: result.context } : result.context
      }
    }
  },
  
  /**
   * Apply a function inside an Experience to a value inside another Experience
   * Useful for multi-parameter functions
   */
  ap<T, U>(expF: Experience<(value: T) => U>): (exp: Experience<T>) => Experience<U> {
    return ExperienceMonad.flatMap((value: T) => 
      ExperienceMonad.map((f: (value: T) => U) => f(value))(expF)
    )
  }
}