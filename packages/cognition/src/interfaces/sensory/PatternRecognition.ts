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
    const context = previous ? 
      `基于检测到的特征（${previous.source}），` : ''
    
    return `${context}识别整体模式：
    1. 组合特征形成完整模式
    2. 识别模式类型和含义
    3. 建立模式间的关联
    请给出完整的模式理解。`
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