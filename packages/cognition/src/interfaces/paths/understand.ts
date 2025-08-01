import { Evolution } from '../substrate/Evolution.js'
import { compose } from '../Experience.js'
import { sensation } from '../functions/Sensation.js'
import { perception } from '../functions/Perception.js'
import { comprehension } from '../functions/Comprehension.js'
import { familiarity } from '../functions/Familiarity.js'
import { recollection } from '../functions/Recollection.js'
import { consolidation } from '../functions/Consolidation.js'

/**
 * Understand Path - Deep understanding through memory integration
 * 
 * The most complete cognitive path that integrates new information
 * with existing knowledge to form deep understanding.
 * 
 * Path Structure:
 * Sensation → Perception → Comprehension → Familiarity → Recollection → Consolidation
 * 
 * Theoretical Foundation:
 * - Meaningful Learning Theory: Understanding through connection to prior knowledge
 *   (Ausubel, 1968, "Educational Psychology: A Cognitive View")
 * - Constructive Memory Framework: Knowledge as active construction
 *   (Bartlett, 1932; Schacter, 1999)
 * - Schema Theory: New information integrated into existing schemas
 *   (Piaget, 1952; Rumelhart, 1980)
 * 
 * Use Cases:
 * - Learning new concepts that build on existing knowledge
 * - Deep comprehension of complex material
 * - Integrating experiences into long-term memory
 * - Forming connections between ideas
 * 
 * Example:
 * Input: "Quantum entanglement is like..."
 * - Sensation: Receive text
 * - Perception: Parse sentence structure
 * - Comprehension: Understand quantum entanglement concept
 * - Familiarity: Recognize related physics concepts
 * - Recollection: Retrieve knowledge about quantum mechanics
 * - Consolidation: Integrate new understanding with existing knowledge
 * Output: Deep understanding with connections to prior knowledge
 */
export const understand: Evolution = {
  name: 'understand',
  
  evolve: compose(
    sensation,
    perception,
    comprehension,
    familiarity,
    recollection,
    consolidation
  )
}