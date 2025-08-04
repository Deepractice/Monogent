/**
 * Origin Type - The Source of Experience
 * 
 * Represents what triggered a cognitive experience.
 * Can be external stimuli or internal cognitive products.
 * 
 * Theoretical Foundation:
 * - Information Processing: "Multiple sources of information converge in cognition"
 *   (Broadbent, 1958; Atkinson & Shiffrin, 1968)
 * - Dual-Route Models: "External and internal routes to cognition"
 *   (Paivio, 1986, "Dual Coding Theory")
 * 
 * Design Philosophy:
 * - Keep it simple and flexible
 * - Origins can be external (world) or internal (mind)
 * - Type alias allows any value to be an origin
 * - Similar to Stimulus but broader in scope
 */
export type Origin = unknown