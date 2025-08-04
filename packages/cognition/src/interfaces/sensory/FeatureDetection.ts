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
    const context = previous ? 
      `基于之前的处理结果（${previous.source}），` : ''
    
    return `${context}对筛选后的内容进行特征检测：
    1. 提取关键特征和模式
    2. 识别语义标记和结构
    3. 分析特征之间的关系
    请详细描述检测到的特征。`
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