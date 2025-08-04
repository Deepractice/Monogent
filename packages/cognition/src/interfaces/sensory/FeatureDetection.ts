import { Computation, defineComputation } from '../substrate/Computation.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Feature Detection Step Interface
 * 
 * Detects basic features from sensory input.
 * In LLM context, features are already implicit in embeddings.
 * 
 * Theoretical Foundation:
 * - Feature Detectors: Neurons tuned to specific features
 *   (Hubel & Wiesel, 1962, 1968 - Nobel Prize 1981)
 * - Hierarchical Feature Processing: Simple to complex features
 *   (Riesenhuber & Poggio, 1999; Serre et al., 2007)
 * - Distributed Representations: Features as activation patterns
 *   (Hinton, 1986; McClelland & Rumelhart, 1986)
 * 
 * Implementation Note:
 * - Computation substrate: deterministic feature extraction
 * - In visual systems: edges, colors, orientations
 * - In LLM: prepares prompts for feature analysis
 */
export interface FeatureDetection extends Computation {
  // Inherits evolve from Computation
}

/**
 * Default feature detection implementation
 */
export const featureDetection: FeatureDetection = defineComputation({
  name: 'feature-detection',
  
  prompt: (previous) => {
    if (!previous) {
      throw new Error('FeatureDetection requires previous elaboration from SensoryGating')
    }
    
    return `Extract perceptually relevant features based on Feature Integration Theory (Treisman & Gelade, 1980):

"Features are registered early, automatically, and in parallel across the visual field" - Treisman

Building on the attention-weighted input from sensory gating:

1. STRUCTURAL FEATURES (Form perception - Marr, 1982):
   - Identify boundaries and segments
   - Detect hierarchical structure
   - Mark beginning, middle, and end patterns
   - Note repetitions and variations
   
2. SEMANTIC FEATURES (Meaning extraction - Tulving, 1972):
   - Extract key concepts and entities
   - Identify relationships and dependencies
   - Detect semantic categories
   - Mark emotional or evaluative content
   
3. FUNCTIONAL FEATURES (Affordances - Gibson, 1979):
   - What actions does this information afford?
   - What problems or questions does it present?
   - What responses might be required?
   - What decisions are implied?

Output: Structured feature map that preserves information needed for pattern recognition.
Focus on features that will help form a coherent perceptual whole, not exhaustive analysis.`
  },
  
  schema: () => ({
    type: 'object',
    properties: {
      features: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: { type: 'string' },
            value: { type: 'string' },
            confidence: { type: 'number' }
          }
        }
      },
      relationships: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            from: { type: 'string' },
            to: { type: 'string' },
            relation: { type: 'string' }
          }
        }
      }
    }
  })
})