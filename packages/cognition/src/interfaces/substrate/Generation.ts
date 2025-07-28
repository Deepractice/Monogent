import { Elaboration } from '../Elaboration.js'

/**
 * Generation Substrate Interface
 * 
 * The fundamental substrate for semantic processing in cognition.
 * Generates outputs through language model capabilities within an elaboration context.
 * 
 * Design Principle:
 * - All cognitive generation occurs within an Elaboration
 * - The Elaboration provides semantic context and goals
 * - Generation is asynchronous and creative
 */
export interface Generation {
  /**
   * Generate a response within an elaboration context
   * 
   * @param elaboration - The cognitive elaboration context
   * @returns Promise of the generated result
   */
  generate<TOutput>(elaboration: Elaboration): Promise<TOutput>
}