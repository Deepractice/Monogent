import { Elaboration } from '../Elaboration.js'

/**
 * Computation Substrate Interface
 * 
 * The fundamental substrate for deterministic processing in cognition.
 * Executes algorithmic transformations within an elaboration context.
 * 
 * Design Principle:
 * - All cognitive computations occur within an Elaboration
 * - The Elaboration provides context and accumulates processing traces
 * - Computation is synchronous and deterministic
 */
export interface Computation {
  /**
   * Execute a computation within an elaboration context
   * 
   * @param elaboration - The cognitive elaboration context
   * @returns The computed result
   */
  compute<TOutput>(elaboration: Elaboration): TOutput
}