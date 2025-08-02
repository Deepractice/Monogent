import { Computation, defineComputation } from '../substrate/Computation.js'
import { Elaboration } from '../substrate/Elaboration.js'

/**
 * Sensory Gating Step Interface
 * 
 * Filters sensory input based on relevance and attention.
 * Prevents sensory overload by selective filtering.
 * 
 * Theoretical Foundation:
 * - Sensory Gating: Thalamic filtering of irrelevant stimuli
 *   (Cromwell et al., 2008; Sherman & Guillery, 2006)
 * - Pre-attentive Processing: Automatic filtering before conscious attention
 *   (Broadbent, 1958; Treisman, 1969)
 * - Thalamic Reticular Nucleus: "Attentional searchlight"
 *   (Crick, 1984; McAlonan et al., 2008)
 * 
 * Implementation Note:
 * - Computation substrate: automatic, pre-conscious filtering
 * - In LLM context, currently pass-through
 * - Future: could filter based on relevance/salience
 */
export interface SensoryGating extends Computation {
  // Inherits evolve from Computation
}

/**
 * Default sensory gating implementation
 * Filters relevant information based on attention
 */
export const sensoryGating: SensoryGating = defineComputation({
  name: 'sensory-gating',
  
  elaborate(previous?: Elaboration): Elaboration {
    return {
      prompt: `基于感知分析，进行注意力过滤：
    1. 根据显葷性信号确定关注重点
    2. 过滤冗余或无关信息
    3. 标记需要深入处理的部分
    请筛选出值得进一步分析的内容。`,
      source: 'sensory-gating',
      previous
    }
  }
})