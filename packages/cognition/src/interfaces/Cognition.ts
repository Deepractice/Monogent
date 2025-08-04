import { Evolution } from './substrate/Evolution.js'
import { Origin } from './substrate/Origin.js'
import { Experience } from './substrate/Experience.js'
import { understand } from './apperception/understand.js'

/**
 * Cognition Interface - The Central Cognitive Orchestrator
 * 
 * Cognition coordinates the transformation of Origins into Experiences
 * through appropriate cognitive functions. It embodies the principle:
 * Origin + Function = Cognitive Process
 * 
 * Design Philosophy:
 * - Cognition is the gateway between world and mind
 * - Handles both external stimuli and internal origins
 * - Dynamically selects appropriate processing paths
 * 
 * Theoretical Foundation:
 * - Kant's Transcendental Unity: "The synthetic unity of apperception"
 *   (Kant, 1781, CPR, B131-136)
 * - Multiple Routes to Cognition: Different origins require different processes
 *   (Dual-route models, Coltheart et al., 2001)
 * - Cognitive Flexibility: Adaptive function selection based on origin type
 *   (Diamond, 2013; Miyake et al., 2000)
 * 
 * Core Formula:
 * Cognition(Origin) → Synthesis → Experience → Function → Experience'
 */
export interface Cognition {
  /**
   * Process an origin through cognitive synthesis
   * This is the fundamental entry point for all cognition
   * 
   * @param origin The origin to process (external or internal)
   * @param evolution Optional specific evolution to use (defaults to appropriate path)
   * @returns The resulting experience after cognitive processing
   */
  process(origin: Origin, evolution?: Evolution): Promise<Experience>
  
  /**
   * Get the understand path - Deep understanding through memory integration
   * 
   * The most complete cognitive path that integrates new information
   * with existing knowledge. Includes all cognitive functions:
   * Perception → Comprehension → SpreadingActivation → AssociativeBinding → Recollection → Consolidation
   * 
   * @returns The understand path evolution
   */
  understand(): Evolution
  
  // Future synthesis methods:
  // perceive(origin: Origin): Promise<Experience>    // Process through perception
  // remember(origin: Origin): Promise<Experience>    // Process through memory
  // reflect(origin: Origin): Promise<Experience>     // Process through reflection
  // imagine(origin: Origin): Promise<Experience>     // Process through imagination
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