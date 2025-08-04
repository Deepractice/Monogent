import { comprehension } from '../src/interfaces/perceptual/Comprehension.js'
import { echoInference } from '../src/interfaces/substrate/Inference.js'
import { Experience } from '../src/interfaces/substrate/Experience.js'
import { Antecedent } from '../src/interfaces/substrate/Antecedent.js'

/**
 * Test comprehension end-to-end flow
 */
async function testComprehension() {
  console.log('=== Testing Comprehension Flow ===\n')
  
  // Step 1: Create an antecedent (external stimulus)
  const antecedent: Antecedent = {
    type: 'text',
    content: 'The mitochondria is the powerhouse of the cell'
  }
  
  // Step 2: Create initial Experience from antecedent
  // Comprehension expects the input to already have some interpretation from perception
  const initialExperience: Experience = {
    source: 'test',
    antecedent: antecedent,
    interpretation: {
      content: 'Basic cellular biology concept about mitochondria',
      source: 'mock-perception',
      confidence: 0.9
    },
    inference: echoInference
  }
  
  // Step 3: Run comprehension
  console.log('Input Experience:', JSON.stringify(initialExperience, null, 2))
  console.log('\nRunning comprehension...\n')
  
  try {
    const result = await comprehension.evolve(initialExperience)
    console.log('Comprehension Result:', JSON.stringify(result, null, 2))
    
    // Check if we got a new Experience
    if (result.previous === initialExperience) {
      console.log('\n✅ Success: Comprehension created a new Experience node')
    } else {
      console.log('\n❌ Error: Comprehension did not chain Experience properly')
    }
    
    // Check if elaboration was accumulated
    if (result.elaboration) {
      console.log('✅ Success: Comprehension added elaboration')
      
      // Count elaboration chain depth
      let depth = 0
      let current = result.elaboration
      while (current) {
        depth++
        current = current.previous
      }
      console.log(`   Elaboration chain depth: ${depth}`)
    }
    
    // Check if interpretation was updated
    if (result.interpretation && result.interpretation !== initialExperience.interpretation) {
      console.log('✅ Success: Comprehension produced new interpretation')
    }
    
  } catch (error) {
    console.error('❌ Error during comprehension:', error)
  }
}

// Run the test
testComprehension().catch(console.error)