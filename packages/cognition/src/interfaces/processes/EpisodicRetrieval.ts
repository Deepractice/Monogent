import { Computation, defineComputation } from '../substrate/Computation.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Episodic Retrieval Step Interface
 * 
 * Reconstructs complete episodic memories from binding fragments.
 * Constructive process that may include errors and filling gaps.
 * 
 * Theoretical Foundation:
 * - Constructive Memory: Memory as reconstruction not reproduction
 *   (Bartlett, 1932; Schacter, 1996, 2012)
 * - Episodic Memory: Specific events in context
 *   (Tulving, 1972, 1983, 2002)
 * - Memory Reconstruction: Filling gaps with schemas
 *   (Bransford & Johnson, 1972; Alba & Hasher, 1983)
 * 
 * Implementation Note:
 * - Computation substrate: prepares memory reconstruction prompts
 * - Binding strength affects confidence expressions
 * - Normal to have fuzzy/incomplete memories
 */
export interface EpisodicRetrieval extends Computation {
  // Inherits evolve from Computation
}

/**
 * Default episodic retrieval implementation
 */
export const episodicRetrieval: EpisodicRetrieval = defineComputation({
  name: 'episodic-retrieval',
  
  prompt: (previous) => {
    const context = previous ? 
      `基于联想绑定的结果（${previous.source}），` : ''
    
    return `${context}重建情节记忆：
    1. 从片段中重构完整事件
    2. 填补记忆空白和缺失部分
    3. 整合时间、空间和情境信息
    4. 评估记忆的置信度
    请构建连贯的情节叙述。`
  },
  
  schema: () => ({
    type: 'object',
    properties: {
      episode: {
        type: 'object',
        properties: {
          narrative: { type: 'string' },
          timeframe: { type: 'string' },
          location: { type: 'string' },
          participants: { type: 'array', items: { type: 'string' } },
          keyEvents: { type: 'array', items: { type: 'string' } }
        }
      },
      confidence: {
        type: 'object',
        properties: {
          overall: { type: 'number' },
          details: { type: 'array', items: { type: 'object' } }
        }
      },
      gaps: { type: 'array', items: { type: 'string' } }
    }
  })
})