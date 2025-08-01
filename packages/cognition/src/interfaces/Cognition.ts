import { Evolution } from './substrate/Evolution.js'
import { understand } from './paths/understand.js'

/**
 * Cognition Interface - Gateway to Cognitive Paths
 * 
 * A simple entry point for accessing various cognitive paths.
 * Each path represents a specific combination of cognitive functions
 * designed for different types of cognitive tasks.
 * 
 * Design Philosophy:
 * - Cognition is the orchestrator of paths
 * - Paths are pre-configured function combinations
 * - Each path is optimized for specific cognitive tasks
 * 
 * Theoretical Foundation:
 * - Multiple Routes to Cognition: Different tasks require different processes
 *   (Dual-route models, Coltheart et al., 2001)
 * - Cognitive Flexibility: Adaptive path selection based on task demands
 *   (Diamond, 2013; Miyake et al., 2000)
 * - Process vs Product: Focus on the journey, not just the destination
 *   (Marr, 1982, levels of analysis)
 */
export interface Cognition {
  /**
   * Get the understand path - Deep understanding through memory integration
   * 
   * The most complete cognitive path that integrates new information
   * with existing knowledge. Includes all cognitive functions:
   * Sensation → Perception → Comprehension → Familiarity → Recollection → Consolidation
   * 
   * @returns The understand path evolution
   */
  understand(): Evolution
  
  // Future paths can be added here:
  // reflect(): Evolution     // Simple reflex path
  // perceive(): Evolution    // Basic perception path
  // recall(): Evolution      // Memory retrieval path
  // learn(): Evolution       // New knowledge acquisition path
  // think(): Evolution       // Internal thinking loop path
}

/**
 * Default cognition implementation
 * Provides access to all cognitive paths
 */
export const cognition: Cognition = {
  understand(): Evolution {
    return understand
  }
}