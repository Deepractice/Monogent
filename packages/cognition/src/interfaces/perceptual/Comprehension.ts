import { Generation, defineGeneration } from '../substrate/Generation.js'
import { semanticEncoding } from '../sensory/SemanticEncoding.js'
import { categorization } from '../sensory/Categorization.js'
import { abstraction } from '../sensory/Abstraction.js'

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
 * Default comprehension implementation using defineGeneration
 * 
 * Transforms perceptual meaning into semantic structure:
 * - SemanticEncoding: Create AMR representation
 * - Categorization: Assign ontological categories
 * - Abstraction: Extract generalizable patterns
 */
export const comprehension: Comprehension = defineGeneration({
  name: 'comprehension',
  processes: [
    semanticEncoding,
    categorization,
    abstraction
  ]
})