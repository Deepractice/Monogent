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
    
    // Execute all stages in sequence, building the Experience chain
    for (const stage of stages) {
      const next = await stage.evolve(current)
      
      // Automatically link to previous Experience if not already set
      if (!next.previous) {
        // Create new Experience with previous link
        current = {
          ...next,
          previous: current
        }
      } else {
        current = next
      }
    }
    
    // Return the final Experience with complete history chain
    return current as Experience<TOutput>
  }
}

