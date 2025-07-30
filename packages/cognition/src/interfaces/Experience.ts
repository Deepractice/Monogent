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
 * @returns A function that processes input through all stages and returns an Experience
 */
export function compose<TInput = unknown, TOutput = unknown>(
  ...stages: Array<{ name: string; evolve: (input: any) => any | Promise<any> }>
): (input: TInput) => Promise<Experience<TOutput>> {
  return async (input: TInput) => {
    let value: unknown = input
    
    // Execute all stages in sequence
    for (const stage of stages) {
      value = await stage.evolve(value)
    }
    
    // Get stage names from the Evolution objects
    const stageNames = stages.map(s => s.name)
    
    // Wrap the final result in Experience
    return {
      value: value as TOutput,
      source: stageNames[stageNames.length - 1],
      context: {
        pipeline: stageNames,
        timestamp: Date.now()
      }
    }
  }
}

