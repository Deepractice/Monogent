import { Computation, defineComputation } from '../substrate/Computation.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Spreading Activation Step Interface
 * 
 * Activates related memories based on AMR content.
 * Energy spreads through memory graph following connectivity patterns.
 * 
 * Theoretical Foundation:
 * - Spreading Activation Theory: Activation propagates through networks
 *   (Collins & Loftus, 1975)
 * - Fan Effect: Activation divided among connections
 *   (Anderson, 1974; Anderson & Reder, 1999)
 * - Power Law Decay: Not exponential decay
 *   (Anderson & Schooler, 1991)
 * 
 * Implementation Note:
 * - Computation substrate: Deterministic graph algorithm
 * - Activates experiences, not semantic concepts
 * - Uses preferential attachment patterns
 */
export interface SpreadingActivation extends Computation {
  // Inherits evolve from Computation
}

/**
 * Default spreading activation implementation
 */
export const spreadingActivation: SpreadingActivation = defineComputation({
  name: 'spreading-activation',
  
  prompt: (previous) => {
    const context = previous ? 
      `基于抽象模式（${previous.source}），` : ''
    
    return `${context}进行激活扩散：
    1. 从AMR内容识别激活源
    2. 计算与记忆网络的连接强度
    3. 按照能量扩散规则传播激活
    4. 确定被激活的相关体验
    请模拟记忆激活的扩散过程。`
  },
  
  schema: () => ({
    type: 'object',
    properties: {
      sources: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            node: { type: 'string' },
            initialActivation: { type: 'number' }
          }
        }
      },
      activatedMemories: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            experienceId: { type: 'string' },
            activationLevel: { type: 'number' },
            distance: { type: 'number' },
            pathway: { type: 'array', items: { type: 'string' } }
          }
        }
      },
      parameters: {
        type: 'object',
        properties: {
          decayRate: { type: 'number' },
          fanEffect: { type: 'boolean' },
          threshold: { type: 'number' }
        }
      }
    }
  })
})