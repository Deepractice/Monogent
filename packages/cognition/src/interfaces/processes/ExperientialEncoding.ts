import { Computation, defineComputation } from '../substrate/Computation.js'
import { Experience } from '../substrate/Experience.js'
import { Elaboration } from '../substrate/Elaboration.js'
import { Stimulus } from '../substrate/Stimulus.js'

/**
 * Experiential Encoding Process Interface
 * 
 * Encodes any input into Experience format, enabling it to enter
 * the cognitive system. This is the boundary transformation.
 * 
 * Theoretical Foundation:
 * - Encoding: Converting information into a form the cognitive system can process
 *   (Tulving & Thomson, 1973, "Encoding specificity principle")
 * - Initial Representation: First cognitive contact with information
 *   (Craik & Lockhart, 1972, "Levels of processing")
 * 
 * Key Characteristics:
 * - Accepts any type of input
 * - Always outputs Experience format
 * - Deterministic and fast
 * - Marks the entry point into cognition
 */
export interface ExperientialEncoding extends Computation {
  // Special computation that can accept raw Stimulus
  encode(stimulus: Stimulus): Experience
}

/**
 * Default experiential encoding implementation
 * Converts raw stimuli into Experience format
 */
export const experientialEncoding: ExperientialEncoding = {
  ...defineComputation({
    name: 'experiential-encoding',
    
    prompt: (previous) => {
      if (previous) {
        return `基于之前的处理（${previous.source}），重新编码体验：
    1. 评估之前编码的有效性
    2. 识别需要调整的部分
    3. 优化体验表示
    请重新构建体验格式。`
      }
      
      return `体验编码：
    1. 识别原始输入类型
    2. 转换为认知系统可处理格式
    3. 标记初始元数据
    请将外部刺激转化为体验格式。`
    }
  }),
  
  encode(stimulus: Stimulus): Experience {
    // Create initial Experience from stimulus
    const elaboration: Elaboration = {
      prompt: `初始体验编码：将外部刺激"${JSON.stringify(stimulus).slice(0, 100)}..."转化为认知体验。`,
      source: 'experiential-encoding'
    }
    
    return {
      elaboration,
      source: 'experiential-encoding',
      metadata: {
        timestamp: Date.now(),
        stimulusType: typeof stimulus
      }
    }
  }
}