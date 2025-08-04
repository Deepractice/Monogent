import { Antecedent } from './Antecedent.js'
import { Experience } from './Experience.js'

/**
 * Transduction Interface - Converting Antecedents to Experiences
 * 
 * Represents the fundamental process of converting external stimuli or internal
 * antecedents into the cognitive system's internal representation (Experience).
 * 
 * Theoretical Foundation:
 * - Sensory Transduction: "Converting physical energy into neural signals"
 *   (Kandel et al., 2012, "Principles of Neural Science")
 * - Signal Detection Theory: "Distinguishing signal from noise"
 *   (Green & Swets, 1966)
 * - Information Theory in Perception: "Reducing uncertainty through sensory channels"
 *   (Shannon, 1948; Attneave, 1954)
 * 
 * Design Philosophy:
 * - Transduction is the gateway between world and mind
 * - Different antecedents may require different transduction strategies
 * - Creates the first Experience in any cognitive chain
 */
export interface Transduction {
  /**
   * Convert an antecedent (external stimulus or internal thought) into Experience
   * 
   * This is the fundamental operation that starts any cognitive process.
   * It takes raw input from the world or mind and converts it into the
   * standard format that the cognitive system can process.
   * 
   * @param antecedent The precondition to be transduced
   * @returns An Experience representing the transduced antecedent
   */
  transduce(antecedent: Antecedent): Experience
}