import { Computation, defineComputation } from '../substrate/Computation.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Abstraction Step Interface
 * 
 * Extracts abstract patterns from concrete AMR instances.
 * Identifies generalizable structures for analogical reasoning.
 * 
 * Theoretical Foundation:
 * - Abstraction Hierarchy: From concrete to abstract
 *   (Gentner, 1983; Holyoak & Thagard, 1995)
 * - Structure Mapping: Analogical reasoning via structural alignment
 *   (Gentner & Markman, 1997)
 * - Schema Abstraction: Extracting invariant structures
 *   (Rumelhart & Ortony, 1977)
 * 
 * Implementation Note:
 * - Computation substrate: prepares abstraction analysis prompts
 * - Plans template extraction like AGENT-ACTION from specific instances
 * - Sets up knowledge transfer and generalization
 */
export interface Abstraction extends Computation {
  // Inherits evolve from Computation
}

/**
 * Default abstraction implementation
 */
export const abstraction: Abstraction = defineComputation({
  name: 'abstraction',
  
  prompt: (previous) => {
    const context = previous ? 
      `基于分类结果（${previous.source}），` : ''
    
    return `${context}进行抽象提取：
    1. 识别可泛化的结构模式
    2. 提取不变量和变量部分
    3. 构建抽象模板和框架
    4. 建立类比映射关系
    请从AMR中提取抽象结构。`
  },
  
  schema: () => ({
    type: 'object',
    properties: {
      templates: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            pattern: { type: 'string' },
            slots: { type: 'array', items: { type: 'string' } },
            constraints: { type: 'array', items: { type: 'string' } }
          }
        }
      },
      mappings: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            concrete: { type: 'string' },
            abstract: { type: 'string' },
            bindings: { type: 'object' }
          }
        }
      }
    }
  })
})