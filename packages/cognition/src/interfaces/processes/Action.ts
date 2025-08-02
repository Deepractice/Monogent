import { Computation, defineComputation } from '../substrate/Computation.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Action Process Interface
 * 
 * The output gateway of cognition - executing decisions in the world.
 * Mirrors Sensation as the input gateway, completing the perception-action loop.
 * 
 * Theoretical Foundation:
 * - Motor Control Theory: From intention to execution
 *   (Wolpert & Ghahramani, 2000, "Computational Motor Control")
 * - Action-Perception Coupling: Actions shape what we perceive
 *   (Gibson, 1979, "The Ecological Approach")
 * - Embodied Cognition: Thinking through acting
 *   (Clark, 1997; Wilson, 2002)
 * 
 * Design Philosophy:
 * - Action is the culmination of cognitive processing
 * - Deterministic execution of cognitive decisions
 * - In AI: tool usage, API calls, response generation
 * - Completes the cognitive loop: Sensation → Processing → Action
 * 
 * Implementation Note:
 * - Pure Computation substrate: deterministic execution
 * - Maps cognitive decisions to external effects
 * - Currently placeholder for future tool/API integration
 */
export interface Action extends Computation {
  // Inherits evolve from Computation
  // Action is deterministic execution
}

/**
 * Default action implementation
 * Executes decisions in the external world
 */
export const action: Action = defineComputation({
  name: 'action',
  
  elaborate(previous?: Elaboration): Elaboration {
    return {
      prompt: `执行动作决策：
    1. 分析需要执行的动作类型
    2. 确定执行参数和目标
    3. 选择适当的工具或API
    4. 评估执行风险和影响
    请描述如何将认知决策转化为实际行动。`,
      source: 'action',
      previous
    }
  }
})