import { cognition } from './interfaces/Cognition.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('test-perceive')

async function testPerceive() {
  log.info('Testing perceive process...')
  
  // Create a test stimulus
  const stimulus = {
    type: 'visual',
    data: 'red circle',
    intensity: 0.8
  }
  
  log.info('Input stimulus:', stimulus)
  
  // Get the perceive process
  const perceiveProcess = cognition.perceive()
  
  // Execute the process
  const result = await perceiveProcess(stimulus)
  
  log.info('Final Experience:', result)
  log.info('Experience value:', result.value)
  log.info('Experience source:', result.source)
  log.info('Experience context:', result.context)
}

// Run the test
testPerceive().catch(console.error)