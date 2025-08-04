import { Computation, defineComputation } from '../substrate/Computation.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Pattern Recognition Step Interface
 * 
 * Integrates features into coherent patterns and forms perceptual experience.
 * This is where "inner language" emerges from sensory patterns.
 * 
 * Theoretical Foundation:
 * - Pattern Recognition: From features to objects
 *   (Marr, 1982; Biederman, 1987)
 * - Gestalt Principles: Emergent patterns from parts
 *   (Wertheimer, 1923; Koffka, 1935)
 * - Inner Speech: Perceptual experience as internal narrative
 *   (Vygotsky, 1934; Baddeley, 1992)
 * 
 * Implementation Note:
 * - Computation substrate: prepares pattern recognition prompts
 * - In real cognition: visual → "a brown dog barking"
 * - In LLM: formulates questions about pattern coherence
 */
export interface PatternRecognition extends Computation {
  // Inherits evolve from Computation
}

/**
 * Default pattern recognition implementation
 */
export const patternRecognition: PatternRecognition = defineComputation({
  name: 'pattern-recognition',
  
  prompt: (previous) => {
    if (!previous) {
      throw new Error('PatternRecognition requires previous elaboration from FeatureDetection')
    }
    
    return `Integrate features into coherent patterns based on Gestalt Principles (Wertheimer, 1923; Koffka, 1935):

"The whole is greater than the sum of its parts" - Gestalt Psychology

Using the detected features, form perceptual wholes:

1. PATTERN INTEGRATION (Gestalt Laws):
   - Proximity: Group features that are close together
   - Similarity: Connect features that share properties
   - Continuity: Follow smooth, continuous patterns
   - Closure: Complete incomplete patterns
   - Figure-Ground: Distinguish main content from background
   
2. MEANING EMERGENCE (Recognition-by-Components - Biederman, 1987):
   - What coherent whole(s) emerge from these features?
   - What is the primary message or content?
   - What secondary patterns support or modify the primary?
   - How do the patterns relate to each other?
   
3. PERCEPTUAL SUMMARY (Inner Speech - Vygotsky, 1934):
   - Formulate a concise "inner language" description
   - What would you "say to yourself" about this input?
   - Capture the essence in natural, internal narrative
   - This becomes the foundation for higher cognition

Output: Integrated perceptual experience ready for conceptual processing.
The goal is coherent understanding, not detailed analysis.`
  },
  
  schema: () => ({
    type: 'object',
    properties: {
      patterns: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            type: { type: 'string' },
            description: { type: 'string' },
            components: {
              type: 'array',
              items: { type: 'string' }
            },
            confidence: { type: 'number' }
          }
        }
      },
      overallMeaning: { type: 'string' },
      innerLanguageForm: { type: 'string' }
    }
  })
})