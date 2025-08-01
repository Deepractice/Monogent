import { Computation } from '../substrate/Computation.js'
import { Experience } from '../Experience.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('transduction')

/**
 * Transduction Step Interface
 * 
 * Converts physical stimuli into neural/computational signals.
 * In LLM context, this is mostly pass-through for text input.
 * 
 * Theoretical Foundation:
 * - Sensory Transduction: Converting physical stimuli to neural signals
 *   (Kandel et al., 2012, Principles of Neural Science)
 * - Sensory Coding: How sensory receptors encode information
 *   (Adrian, 1928; Barlow, 1961)
 * 
 * Implementation Note:
 * - Computation substrate because it's automatic and deterministic
 * - In multimodal systems, would handle vision/audio/etc.
 * - Currently passes through text input unchanged
 */
export interface Transduction extends Computation {
  // Inherits evolve from Computation (sync transformation)
}

/**
 * Default transduction implementation
 */
export const transduction: Transduction = {
  name: 'transduction',
  type: 'process',
  
  evolve<TInput = unknown, TOutput = unknown>(
    input: Experience<TInput>
  ): Experience<TOutput> {
    log.debug('Receiving sensory input', { 
      value: input.value,
      source: input.source 
    })
    
    // In LLM context, sensation is pass-through
    const output: Experience<TOutput> = {
      value: input.value as unknown as TOutput,
      source: 'transduction',
      context: {
        ...(typeof input.context === 'object' && input.context !== null ? input.context : {}),
        modality: 'text',
        timestamp: Date.now()
      }
    }
    
    return output
  }
}