import { Computation, defineComputation } from '../substrate/Computation.js'
import { Experience } from '../substrate/Experience.js'
import { Transduction } from '../substrate/Transduction.js'
import { Antecedent } from '../substrate/Antecedent.js'

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
export interface Sensation extends Computation, Transduction {
  // Inherits evolve from Computation (sync transformation)
  // Inherits transduce from Transduction (Antecedent → Experience)
  // This dual inheritance reflects sensation's dual role:
  // 1. As the entry point of cognition (transduce)
  // 2. As part of cognitive chains (evolve)
}

/**
 * Default sensation implementation
 * Always the first process in cognitive chain - no previous elaboration
 * Receives raw antecedents and begins the cognitive journey
 */
export const sensation: Sensation = {
  ...defineComputation({
    name: 'sensation',
    
    prompt: () => `Perform initial sensory processing based on Bottom-up Processing theory (Gibson, 1966):

"The detection of information is the foundation of perception" - Gibson's Direct Perception Theory

Following Broadbent's Filter Model (1958) and Treisman's Attenuation Theory (1964):

1. Detect basic features of the input:
   - Data type and format (physical properties)
   - Information density and complexity
   - Temporal/spatial distribution patterns
   
2. Identify salient signals (Feature Detection Theory - Hubel & Wiesel, 1959):
   - Repetitive patterns or regularities
   - Anomalies or sudden changes
   - Key markers or boundaries
   
3. Assess information structure (Gestalt Principles - Wertheimer, 1923):
   - Hierarchical relationships (figure-ground)
   - Density distribution (proximity)
   - Potential organizational patterns (similarity, continuity)

Output: Initial sensory analysis that preserves raw features for subsequent perceptual processing.`
  }),
  
  // Implement transduce method
  transduce(antecedent: Antecedent): Experience {
    // Create the initial Experience from Antecedent
    return {
      source: 'sensation',
      antecedent: antecedent,
      // No elaboration yet - that will be added by evolve
      // No previous - this is the first Experience
    }
  }
}