import { sensation } from '../src/interfaces/sensory/Sensation.js'
import { sensoryGating } from '../src/interfaces/sensory/SensoryGating.js'
import { Experience } from '../src/interfaces/substrate/Experience.js'

/**
 * Test SensoryGating with Sensation
 */
async function testSensoryGating() {
  console.log('=== Testing Sensory Gating Flow ===\n')
  
  // Step 1: Create an antecedent
  const antecedent = {
    type: 'complex-scene',
    content: 'A busy street with cars, pedestrians, shops, birds flying, and a red traffic light'
  }
  
  // Step 2: Transduce through Sensation
  const initial = sensation.transduce(antecedent)
  const afterSensation = sensation.evolve(initial)
  
  console.log('After Sensation:')
  console.log('- Source:', afterSensation.source)
  console.log('- Has elaboration:', !!afterSensation.elaboration)
  console.log('- Elaboration preview:', afterSensation.elaboration?.prompt.substring(0, 100) + '...')
  
  // Step 3: Apply SensoryGating
  console.log('\n=== Applying Sensory Gating ===\n')
  
  try {
    const afterGating = sensoryGating.evolve(afterSensation)
    
    console.log('After SensoryGating:')
    console.log('- Source:', afterGating.source)
    console.log('- Has previous elaboration:', !!afterGating.elaboration?.previous)
    console.log('- Gating prompt preview:', afterGating.elaboration?.prompt.substring(0, 150) + '...')
    
    // Check elaboration chain
    if (afterGating.elaboration?.previous) {
      console.log('\nElaboration Chain:')
      console.log('1. SensoryGating (current)')
      console.log('2. Sensation (previous):', afterGating.elaboration.previous.source)
    }
    
  } catch (error) {
    console.error('Error during gating:', error)
  }
  
  // Test error case: SensoryGating without previous
  console.log('\n=== Testing Error Case ===\n')
  try {
    const emptyExperience: Experience = { source: 'test' }
    sensoryGating.evolve(emptyExperience)
  } catch (error) {
    console.log('✅ Correctly caught error:', error.message)
  }
}

// Run the test
testSensoryGating().catch(console.error)