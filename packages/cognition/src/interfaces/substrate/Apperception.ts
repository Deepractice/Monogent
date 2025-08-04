import { Evolution } from './Evolution.js'
import { Experience } from './Experience.js'
import { Antecedent } from './Antecedent.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('apperception')

/**
 * Apperception Interface - The Unity of Consciousness
 * 
 * Represents the highest cognitive act of unifying sensible intuition (Antecedent)
 * with intellectual understanding (Function) under the unity of consciousness.
 * 
 * Theoretical Foundation:
 * - Kant's Transcendental Apperception: "The I think must be able to accompany all my representations"
 *   (Kant, 1781, "Critique of Pure Reason", B131-132)
 * - Unity of Apperception: "The transcendental unity of self-consciousness"
 *   (Kant, CPR, B132)
 * - Leibniz's Apperception: "The consciousness or reflective knowledge of perception"
 *   (Leibniz, 1714, "Monadology", §14)
 * 
 * Cognitive Psychology:
 * - Apperception: "The process by which new experience is assimilated to and transformed by the residuum of past experience"
 *   (Herbart, 1834; Wundt, 1896)
 * - Modern Definition: Integration of new information into existing cognitive structures
 *   (Bruner, 1957; Neisser, 1967)
 * 
 * Design Philosophy:
 * - Apperception is the highest form of Evolution
 * - Unifies sensibility (Process) and understanding (Function)
 * - Like Computation has elaborate(), Apperception has apperceive()
 * - Represents the "I think" that accompanies all cognition
 * 
 * Three-Layer Mapping:
 * - Process = Sensibility (Sinnlichkeit) - organizing raw materials
 * - Function = Understanding (Verstand) - applying concepts
 * - Apperception = Reason (Vernunft) - unifying under self-consciousness
 */
export interface Apperception extends Evolution {
  /**
   * Apperceive an antecedent into experience
   * The act of conscious integration under the unity of self-consciousness
   * 
   * @param antecedent The intuitive material to be apperceived
   * @returns An experience unified under transcendental apperception
   */
  apperceive(antecedent: Antecedent): Experience
}

/**
 * Factory function to define an Apperception
 * Creates a complete apperception that unifies antecedent and function
 * 
 * @param options The apperception definition
 * @returns A complete Apperception implementation
 */
export function defineApperception(options: {
  name: string
  function: Evolution
  encoding?: (antecedent: Antecedent) => Experience
}): Apperception {
  return {
    name: options.name,
    type: 'apperceptive',
    
    apperceive(antecedent: Antecedent): Experience {
      log.debug(`Apperceiving antecedent in ${options.name}`, {
        antecedentType: typeof antecedent
      })
      
      // Use custom encoding or default
      const encode = options.encoding || defaultEncoding
      return encode(antecedent)
    },
    
    async evolve(input: Experience): Promise<Experience> {
      // After apperception, continue with the function
      return await options.function.evolve(input)
    }
  }
}

/**
 * Default encoding strategy
 * Creates a minimal experience from any antecedent
 */
function defaultEncoding(antecedent: Antecedent): Experience {
  return {
    antecedent,
    source: 'apperception',
    metadata: {
      timestamp: Date.now(),
      apperceived: true
    }
  }
}