import { Generation } from '../substrate/Generation.js'
import { Experience } from '../Experience.js'
import { Elaboration } from '../substrate/Elaboration.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('pattern-recognition')

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
 * - Generation substrate: Creative pattern synthesis
 * - In real cognition: visual → "a brown dog barking"
 * - In LLM: input already linguistic, this step validates coherence
 */
export interface PatternRecognition extends Generation {
  // Inherits async evolve from Generation
}

/**
 * Default pattern recognition implementation
 */
export const patternRecognition: PatternRecognition = {
  name: 'pattern-recognition',
  type: 'process',
  
  async evolve<TInput = unknown, TOutput = unknown>(
    input: Experience<TInput>
  ): Promise<Experience<TOutput>> {
    log.debug('Recognizing patterns', { 
      value: input.value,
      source: input.source 
    })
    
    // Get previous elaborations from context
    const previousElaborations = (input.context as any)?.elaborations || []
    const previousElaboration = previousElaborations[previousElaborations.length - 1]
    
    // Create elaboration for pattern recognition
    const elaboration: Elaboration = {
      prompt: `基于检测到的特征，识别整体模式：
    1. 组合特征形成完整模式
    2. 识别模式类型和含义
    3. 建立模式间的关联
    请给出完整的模式理解。`,
      schema: {
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
      },
      source: 'pattern-recognition',
      previous: previousElaboration
    }
    
    // For now, just add elaboration - actual LLM call happens at Function level
    const output: Experience<TOutput> = {
      value: input.value as unknown as TOutput,
      source: 'pattern-recognition',
      context: {
        ...(typeof input.context === 'object' && input.context !== null ? input.context : {}),
        previousSource: input.source,
        timestamp: Date.now(),
        elaborations: [...previousElaborations, elaboration]
      }
    }
    
    log.debug('Pattern recognized as perceptual meaning', { 
      value: output.value,
      source: output.source 
    })
    
    return output
  }
}