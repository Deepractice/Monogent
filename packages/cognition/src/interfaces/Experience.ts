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
 * Compose multiple Evolution stages into a cognitive pipeline
 * 
 * @param stages The Evolution stages to compose (executed left to right)
 * @returns A function that processes Experience through all stages
 */
export function compose<TInput = unknown, TOutput = unknown>(
  ...stages: Array<{ 
    name: string
    evolve: (input: Experience<any>) => Experience<any> | Promise<Experience<any>> 
  }>
): (input: Experience<TInput>) => Promise<Experience<TOutput>> {
  return async (input: Experience<TInput>) => {
    let current: Experience<any> = input
    
    // Execute all stages in sequence, passing Experience through
    for (const stage of stages) {
      current = await stage.evolve(current)
    }
    
    // Return the final Experience with type assertion
    return current as Experience<TOutput>
  }
}

