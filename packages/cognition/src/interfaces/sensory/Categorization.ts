import { Computation, defineComputation } from '../substrate/Computation.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Categorization Step Interface
 * 
 * Assigns semantic categories to concepts in the AMR.
 * Enriches AMR nodes with ontological classifications.
 * 
 * Theoretical Foundation:
 * - Prototype Theory: Categories organized around prototypes
 *   (Rosch, 1975, 1978; Rosch & Mervis, 1975)
 * - Basic Level Categories: Privileged level of abstraction
 *   (Rosch et al., 1976)
 * - Semantic Networks: Hierarchical category structure
 *   (Collins & Quillian, 1969)
 * 
 * Implementation Note:
 * - Computation substrate: prepares categorization prompts
 * - Plans AMR enhancement with type annotations [ENTITY:animal:mammal]
 * - Sets up foundation for reasoning and inference
 */
export interface Categorization extends Computation {
  // Inherits evolve from Computation
}

/**
 * Default categorization implementation
 */
export const categorization: Categorization = defineComputation({
  name: 'categorization',
  
  prompt: (previous) => {
    const context = previous ? 
      `基于语义结构（${previous.source}），` : ''
    
    return `${context}进行概念分类：
    1. 为每个概念分配语义类别
    2. 构建层级分类体系
    3. 识别基本级类别和原型
    4. 标注本体论关系
    请为AMR中的概念添加类别标注。`
  },
  
  schema: () => ({
    type: 'object',
    properties: {
      categories: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            concept: { type: 'string' },
            basicLevel: { type: 'string' },
            superordinate: { type: 'string' },
            subordinate: { type: 'array', items: { type: 'string' } },
            prototype: { type: 'string' }
          }
        }
      },
      hierarchy: {
        type: 'object',
        properties: {
          roots: { type: 'array', items: { type: 'string' } },
          relations: { type: 'array', items: { type: 'object' } }
        }
      }
    }
  })
})