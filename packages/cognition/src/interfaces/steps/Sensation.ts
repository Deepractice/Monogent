import { Computation } from '../substrate/Computation.js'
import { Experience } from '../Experience.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('sensation')

/**
 * Sensation Step Interface
 * 
 * The initial receiving of raw sensory signals.
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
export interface Sensation extends Computation {
  // Inherits evolve from Computation (sync transformation)
}

/**
 * Default sensation implementation
 */
export const sensation: Sensation = {
  name: 'sensation',
  
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
      source: 'sensation',
      context: {
        ...(typeof input.context === 'object' && input.context !== null ? input.context : {}),
        modality: 'text',
        timestamp: Date.now()
      }
    }
    
    return output
  }
}