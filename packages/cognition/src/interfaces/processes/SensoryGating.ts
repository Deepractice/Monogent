import { Computation } from '../substrate/Computation.js'
import { Experience } from '../Experience.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('sensory-gating')

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
 */
export const sensoryGating: SensoryGating = {
  name: 'sensory-gating',
  type: 'process',
  
  evolve<TInput = unknown, TOutput = unknown>(
    input: Experience<TInput>
  ): Experience<TOutput> {
    log.debug('Filtering sensory input', { 
      value: input.value,
      source: input.source 
    })
    
    // TODO: Implement relevance-based filtering
    // Currently pass-through in LLM context
    const output: Experience<TOutput> = {
      value: input.value as unknown as TOutput,
      source: 'sensory-gating',
      context: {
        ...(typeof input.context === 'object' && input.context !== null ? input.context : {}),
        previousSource: input.source,
        gatingStatus: 'passed',
        timestamp: Date.now()
      }
    }
    
    return output
  }
}