import { Computation } from '../substrate/Computation.js'
import { Experience } from '../Experience.js'

/**
 * Experiential Encoding Process Interface
 * 
 * Encodes any input into Experience format, enabling it to enter
 * the cognitive system. This is the boundary transformation.
 * 
 * Theoretical Foundation:
 * - Encoding: Converting information into a form the cognitive system can process
 *   (Tulving & Thomson, 1973, "Encoding specificity principle")
 * - Initial Representation: First cognitive contact with information
 *   (Craik & Lockhart, 1972, "Levels of processing")
 * 
 * Key Characteristics:
 * - Accepts any type of input
 * - Always outputs Experience format
 * - Deterministic and fast
 * - Marks the entry point into cognition
 */
export interface ExperientialEncoding extends Computation {
  // Overrides the standard evolve signature
  evolve<T>(input: any): Experience<T>
}

/**
 * Default experiential encoding implementation
 */
export const experientialEncoding: ExperientialEncoding = {
  name: 'experiential-encoding',
  
  evolve<T>(input: any): Experience<T> {
    // If already an Experience, return as is
    if (input && typeof input === 'object' && 'value' in input) {
      return input as Experience<T>
    }
    
    // Create new Experience from raw input
    return {
      value: input as T,
      source: 'encoded',
      context: {
        timestamp: Date.now()
      }
    }
  }
}