/**
 * Stimulus Interface - The Origin of Experience
 * 
 * A marker interface representing anything that can trigger sensation.
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
 * - The cognitive system decides how to interpret it
 * - Empty interface allows any type to be a stimulus
 */
export interface Stimulus {
  // Intentionally empty - any object can be a stimulus
}