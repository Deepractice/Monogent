import { sensation } from '../src/interfaces/sensory/Sensation.js'
import { Antecedent } from '../src/interfaces/substrate/Antecedent.js'

/**
 * Test Sensation's transduction capability
 */
async function testSensation() {
  console.log('=== Testing Sensation Transduction ===\n')
  
  // Test 1: Transduce text antecedent
  const textAntecedent: Antecedent = {
    type: 'text',
    content: 'The quick brown fox jumps over the lazy dog'
  }
  
  console.log('Text Antecedent:', textAntecedent)
  const textExperience = sensation.transduce(textAntecedent)
  console.log('Transduced Experience:', textExperience)
  
  // Test 2: Apply evolve to add elaboration
  console.log('\n=== Testing Sensation Evolution ===\n')
  const evolved = sensation.evolve(textExperience)
  console.log('Evolved Experience:', evolved)
  console.log('Elaboration:', evolved.elaboration)
  
  // Test 3: Transduce different antecedent type
  console.log('\n=== Testing Different Antecedent Types ===\n')
  const structuredAntecedent: Antecedent = {
    type: 'structured',
    data: {
      temperature: 25,
      humidity: 60,
      pressure: 1013
    }
  }
  
  const structuredExperience = sensation.transduce(structuredAntecedent)
  console.log('Structured Antecedent:', structuredAntecedent)
  console.log('Transduced Experience:', structuredExperience)
  
  // Test 4: Transduce a thought (internal antecedent)
  console.log('\n=== Testing Thought as Antecedent ===\n')
  const thoughtAntecedent: Antecedent = {
    type: 'thought',
    content: 'What if consciousness is emergent?',
    metadata: {
      source: 'reflection',
      confidence: 0.7
    }
  }
  
  const thoughtExperience = sensation.transduce(thoughtAntecedent)
  console.log('Thought Antecedent:', thoughtAntecedent)
  console.log('Transduced Experience:', thoughtExperience)
}

// Run the test
testSensation().catch(console.error)