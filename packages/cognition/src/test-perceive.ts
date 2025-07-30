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
  
  log.info({ stimulus }, 'Input stimulus')
  
  // Get the perceive process
  const perceiveProcess = cognition.perceive()
  
  // Execute the process
  const result = await perceiveProcess(stimulus)
  
  log.info({ experience: result }, 'Final Experience')
  log.info({ value: result.value }, 'Experience value')
  log.info({ source: result.source }, 'Experience source')
  log.info({ context: result.context }, 'Experience context')
}

// Run the test
testPerceive().catch((error) => {
  log.error({ error }, 'Test failed')
})