import { Computation, defineComputation } from '../substrate/Computation.js'
import { Experience } from '../Experience.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Sensation Process Interface
 * 
 * The initial contact between external world and cognitive system.
 * Converts any stimulus into the first Experience in the cognitive chain.
 * 
 * Theoretical Foundation:
 * - Sensation vs Perception: "Sensation is detection, perception is interpretation"
 *   (Goldstein, 2014, "Sensation and Perception")
 * - Bottom-up Processing: Data-driven, from sensory input to perception
 *   (Gibson, 1966; Marr, 1982)
 * - Sensory Transduction: Converting physical stimuli to neural signals
 *   (Kandel et al., 2012, Principles of Neural Science)
 * 
 * Design Philosophy:
 * - First step in any cognitive path
 * - Creates the initial Experience from external Stimulus
 * - Pure Computation: deterministic, no interpretation
 * - In multimodal systems, would handle vision/audio/etc.
 */
export interface Sensation extends Computation {
  // Inherits evolve from Computation (sync transformation)
  // But with special signature: Stimulus → Experience
}

/**
 * Default sensation implementation
 * First process in cognitive chain - receives external stimuli
 */
export const sensation: Sensation = defineComputation({
  name: 'sensation',
  
  prompt: (previous) => {
    // Sensation is usually the first process, but can have previous in some paths
    if (previous) {
      return `基于之前的处理结果，进行新的感知分析：
    1. 对比之前的感知模式
    2. 识别变化和新特征
    3. 评估连续性和差异
    请分析新的输入特征。`
    }
    
    return `初始感知处理：
    1. 识别输入的基本特征：
       - 数据类型和格式
       - 信息量和复杂度
       - 时序/空间分布特征
    2. 检测显著性信号：
       - 重复模式
       - 异常或突变
       - 关键标记或边界
    3. 评估信息结构：
       - 层次关系
       - 密度分布
       - 潜在的组织模式
    请进行初步感知分析，为后续处理提供方向。`
  }
})