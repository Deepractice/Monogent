import { cognition } from './interfaces/Cognition.js'
import { Experience } from './interfaces/Experience.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('test-recognize')

async function testRecognize() {
  log.info('Testing recognize process...')
  
  // Create a test stimulus wrapped in Experience
  // Simulating visual input of a familiar object
  const stimulusExperience: Experience<unknown> = {
    value: {
      type: 'visual',
      data: {
        shape: 'round',
        color: 'red', 
        size: 'medium',
        texture: 'smooth'
      },
      intensity: 0.9
    },
    source: 'environment',
    context: {
      modality: 'visual',
      timestamp: Date.now(),
      lighting: 'bright',
      distance: '1m'
    }
  }
  
  log.info({ stimulus: stimulusExperience }, 'Input stimulus experience')
  
  // Get the recognize process
  const recognizeProcess = cognition.recognize()
  
  // Execute the process
  const result = await recognizeProcess(stimulusExperience)
  
  log.info({ experience: result }, 'Recognition result')
  log.info({ value: result.value }, 'Recognized concept')
  log.info({ source: result.source }, 'Final stage')
  log.info({ context: result.context }, 'Processing context')
  
  // Compare with perceive (shallower)
  log.info('Comparing with perceive process...')
  const perceiveProcess = cognition.perceive()
  const perceiveResult = await perceiveProcess(stimulusExperience)
  log.info({ perceiveSource: perceiveResult.source }, 'Perception stops at')
  
  // Compare with understand (deeper)
  log.info('Comparing with understand process...')
  const understandProcess = cognition.understand()
  const understandResult = await understandProcess(stimulusExperience)
  log.info({ understandSource: understandResult.source }, 'Understanding goes to')
}

// Run the test
testRecognize().catch((error) => {
  log.error({ error }, 'Test failed')
})