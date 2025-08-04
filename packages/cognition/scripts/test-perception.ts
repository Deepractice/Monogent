import { perception } from '../src/interfaces/perceptual/Perception.js'
import { echoInference } from '../src/interfaces/substrate/Inference.js'
import { Experience } from '../src/interfaces/substrate/Experience.js'
import { Antecedent } from '../src/interfaces/substrate/Antecedent.js'

/**
 * Test perception end-to-end flow
 */
async function testPerception() {
  console.log('=== Testing Perception Flow ===\n')
  
  // Step 1: Create an antecedent (external stimulus)
  const antecedent: Antecedent = {
    type: 'text',
    content: 'The sky is blue because of Rayleigh scattering'
  }
  
  // Step 2: Create initial Experience from antecedent
  const initialExperience: Experience = {
    source: 'test',
    antecedent: antecedent,
    inference: echoInference
  }
  
  // Step 3: Run perception
  console.log('Input Experience:', initialExperience)
  console.log('\nRunning perception...\n')
  
  try {
    const result = await perception.evolve(initialExperience)
    console.log('Perception Result:', result)
    
    // Check if we got a new Experience
    if (result.previous === initialExperience) {
      console.log('\n✅ Success: Perception created a new Experience node')
    } else {
      console.log('\n❌ Error: Perception did not chain Experience properly')
    }
    
    // Check if inference was applied
    if (result.interpretation) {
      console.log('✅ Success: Perception applied inference')
      console.log('Interpretation:', result.interpretation)
    } else {
      console.log('❌ Error: Perception did not produce interpretation')
    }
    
  } catch (error) {
    console.error('❌ Error during perception:', error)
  }
}

// Run the test
testPerception().catch(console.error)