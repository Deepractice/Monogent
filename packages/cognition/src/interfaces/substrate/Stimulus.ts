/**
 * Stimulus Type - The Origin of Experience
 * 
 * Represents any external input that can trigger cognitive processing.
 * The boundary between the external world and the cognitive system.
 * 
 * Theoretical Foundation:
 * - Psychophysics: "The study of relationships between physical stimuli and sensory experience"
 *   (Fechner, 1860; Stevens, 1957)
 * - Ecological Psychology: "Information is directly available in the stimulus array"
 *   (Gibson, 1979, "The Ecological Approach to Visual Perception")
 * 
 * Design Philosophy:
 * - Stimulus is whatever the external world presents
 * - No constraints on structure - could be anything
 * - Converted to Experience by ExperientialEncoding
 * - Type alias allows any value to be a stimulus
 */
export type Stimulus = unknown