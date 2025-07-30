import { cognition } from '../interfaces/Cognition.js'
import { Experience } from '../interfaces/Experience.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('test-perceive')

async function testPerceive() {
  log.info('Testing perceive process...')
  
  // Create a test stimulus wrapped in Experience
  const stimulusExperience: Experience<unknown> = {
    value: {
      type: 'visual',
      data: 'red circle',
      intensity: 0.8
    },
    source: 'environment',
    context: {
      modality: 'visual',
      timestamp: Date.now()
    }
  }
  
  log.info({ stimulus: stimulusExperience }, 'Input stimulus experience')
  
  // Get the perceive process
  const perceiveProcess = cognition.perceive()
  
  // Execute the process
  const result = await perceiveProcess(stimulusExperience)
  
  log.info({ experience: result }, 'Final Experience')
  log.info({ value: result.value }, 'Experience value')
  log.info({ source: result.source }, 'Experience source')
  log.info({ context: result.context }, 'Experience context')
}

// Run the test
testPerceive().catch((error) => {
  log.error({ error }, 'Test failed')
})