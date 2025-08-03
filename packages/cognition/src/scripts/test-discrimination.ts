import { compose, sensation, discrimination, perception, attention } from '../index.js'
import { Experience } from '../substrate/Experience.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('test-discrimination')

async function testDiscrimination() {
  log.info('Testing discrimination in cognitive processes...')
  
  // Test 1: Visual discrimination (similar letters)
  log.info('Test 1: Visual letter discrimination (b vs d)')
  const letterStimulus: Experience<unknown> = {
    value: {
      type: 'visual',
      data: [
        { shape: 'vertical-line-with-left-circle', position: 'left' },   // 'b'
        { shape: 'vertical-line-with-right-circle', position: 'right' }  // 'd'
      ],
      intensity: 0.9
    },
    source: 'environment',
    context: {
      modality: 'visual',
      task: 'letter-recognition',
      timestamp: Date.now()
    }
  }
  
  // Process with discrimination
  const letterDiscrimination = compose(
    sensation,
    discrimination,  // Detect orientation differences
    perception
  )
  const letterResult = await letterDiscrimination(letterStimulus)
  log.info({ 
    discriminated: letterResult.context.discriminated,
    boundaries: letterResult.context.boundaries,
    categories: letterResult.context.categories
  }, 'Letter discrimination result')
  
  // Test 2: Auditory discrimination (similar sounds)
  log.info('Test 2: Auditory discrimination (/ba/ vs /pa/)')
  const soundStimulus: Experience<unknown> = {
    value: {
      type: 'auditory',
      data: [
        { phoneme: 'ba', vot: 10 },  // Voice Onset Time < 25ms
        { phoneme: 'pa', vot: 40 }   // Voice Onset Time > 25ms
      ],
      intensity: 0.7
    },
    source: 'environment',
    context: {
      modality: 'auditory',
      task: 'phoneme-detection',
      timestamp: Date.now()
    }
  }
  
  // Process with discrimination
  const soundDiscrimination = compose(
    sensation,
    discrimination,  // Detect VOT differences
    perception
  )
  const soundResult = await soundDiscrimination(soundStimulus)
  log.info({ 
    discriminated: soundResult.context.discriminated,
    threshold: soundResult.context.threshold
  }, 'Sound discrimination result')
  
  // Test 3: Without discrimination (confusion scenario)
  log.info('Test 3: Process without discrimination (baseline)')
  const confusionStimulus: Experience<unknown> = {
    value: {
      type: 'visual',
      data: {
        mixed: ['6', '9', 'b', 'd', 'p', 'q'],  // Easily confused shapes
        presentation: 'rapid'
      },
      intensity: 0.6
    },
    source: 'environment',
    context: {
      modality: 'visual',
      speed: 'fast',
      timestamp: Date.now()
    }
  }
  
  // Without discrimination
  const noDiscrimination = compose(
    sensation,
    perception  // Direct to perception, likely confusion
  )
  const confusedResult = await noDiscrimination(confusionStimulus)
  log.info({ 
    source: confusedResult.source,
    hasDiscrimination: 'discriminated' in (confusedResult.context || {})
  }, 'No discrimination result (baseline)')
  
  // With discrimination
  const withDiscrimination = compose(
    sensation,
    discrimination,  // Pre-classify to prevent confusion
    perception
  )
  const clearResult = await withDiscrimination(confusionStimulus)
  log.info({ 
    source: clearResult.source,
    discriminated: clearResult.context.discriminated
  }, 'With discrimination result')
  
  // Test 4: Discrimination with attention
  log.info('Test 4: Discrimination with attention (enhanced)')
  const enhancedProcess = compose(
    sensation,
    attention,        // Focus on specific features
    discrimination,   // Enhanced discrimination of attended features
    perception
  )
  const enhancedResult = await enhancedProcess(letterStimulus)
  log.info({ 
    pipeline: [
      enhancedResult.context.previousSource,
      enhancedResult.source
    ],
    attended: enhancedResult.context.attended,
    discriminated: enhancedResult.context.discriminated
  }, 'Enhanced discrimination with attention')
}

// Run the test
testDiscrimination().catch((error) => {
  log.error({ error }, 'Test failed')
})