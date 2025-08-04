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
 * - In biological systems: physical filtering via thalamic circuits
 * - In LLM context: attention guidance through prompt engineering
 * - Provides theoretical framework for AI to prioritize information
 * - Cannot physically filter, but can guide selective attention
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
  
  prompt: (previous) => {
    // Build on sensation's feature detection
    if (!previous) {
      throw new Error('SensoryGating requires previous elaboration from Sensation')
    }
    
    return `Apply attentional filtering based on Attention Theory (Broadbent, 1958; Kahneman, 1973):

"Attention is the taking possession by the mind of one out of several possible objects" - William James (1890)

Given the sensory features detected, apply selective attention following:

1. SALIENCE FILTERING (Bottom-up attention - Itti & Koch, 2001):
   - Identify features with high contrast or uniqueness
   - Detect sudden changes or unexpected patterns
   - Mark elements that "pop out" from the background
   
2. RELEVANCE GATING (Top-down attention - Desimone & Duncan, 1995):
   - Assess task-relevance of detected features
   - Prioritize goal-related information
   - Suppress task-irrelevant distractors
   
3. CAPACITY ALLOCATION (Limited Resource Theory - Kahneman, 1973):
   - Assign attention weights based on importance
   - Note which features require deep processing
   - Flag resource-intensive elements for later stages

Output: Attention-weighted features with priority markers for subsequent processing.
Note: This is attention guidance, not physical filtering - all information remains available.`
  }
})