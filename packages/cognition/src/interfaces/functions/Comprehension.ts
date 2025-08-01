import { Generation } from '../substrate/Generation.js'
import { compose } from '../substrate/EvolutionComposer.js'
import { semanticEncoding } from '../processes/SemanticEncoding.js'
import { categorization } from '../processes/Categorization.js'
import { abstraction } from '../processes/Abstraction.js'

/**
 * Comprehension Function Interface
 * 
 * Transforms perceptual experience into semantic understanding.
 * Pure Generation substrate - language understanding and AMR creation.
 * 
 * Theoretical Foundation:
 * - Construction-Integration Model: Building meaning from text
 *   (Kintsch, 1988, 1998; Kintsch & van Dijk, 1978)
 * - Schema Theory: Using knowledge frameworks
 *   (Bartlett, 1932; Rumelhart, 1980; Anderson & Pearson, 1984)
 * - Situation Models: Mental representations of described situations
 *   (van Dijk & Kintsch, 1983; Zwaan & Radvansky, 1998)
 * 
 * Composes:
 * 1. SemanticEncoding: Generate AMR representation
 * 2. Categorization: Assign semantic categories
 * 3. Abstraction: Extract reusable patterns
 */
export interface Comprehension extends Generation {
  // Inherits async evolve from Generation
  // Comprehension is fundamentally about language understanding
}

/**
 * Default comprehension implementation using process composition
 */
export const comprehension: Comprehension = {
  name: 'comprehension',
  type: 'function',
  
  evolve: compose(
    semanticEncoding,
    categorization,
    abstraction
  ).evolve
}