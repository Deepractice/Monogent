import { Computation } from '../substrate/Computation.js'
import { Experience } from '../Experience.js'
import { Stimulus } from '../Stimulus.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('sensation')

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
 * Special case: can accept either Stimulus or Experience as input
 */
export const sensation: Sensation = {
  name: 'sensation',
  type: 'process',
  
  evolve<TInput = unknown, TOutput = unknown>(
    input: Experience<TInput> | TInput
  ): Experience<TOutput> {
    // Check if input is already an Experience
    if (input && typeof input === 'object' && 'value' in input) {
      // Already an Experience, just pass through
      log.debug('Passing through existing experience', { 
        value: (input as Experience<TInput>).value,
        source: (input as Experience<TInput>).source 
      })
      return input as unknown as Experience<TOutput>
    }
    
    // Input is a raw Stimulus, create initial Experience
    log.debug('Sensing external stimulus', { stimulus: input })
    
    const experience: Experience<TOutput> = {
      value: input as unknown as TOutput,
      source: 'sensation',
      context: {
        modality: 'text', // In LLM context, primarily text
        timestamp: Date.now(),
        type: 'initial-sensation'
      }
    }
    
    log.debug('Initial experience created', { experience })
    return experience
  }
}