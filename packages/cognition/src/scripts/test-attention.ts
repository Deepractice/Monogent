import { compose, sensation, attention, perception, representation } from '../index.js'
import { Experience } from '../substrate/Experience.js'
import { getLogger } from '@monogent/logger'

const log = getLogger('test-attention')

async function testAttention() {
  log.info('Testing attention in cognitive processes...')
  
  // Create a test stimulus with multiple features (simulating competing stimuli)
  const stimulusExperience: Experience<unknown> = {
    value: {
      type: 'visual',
      data: [
        { object: 'red circle', position: 'center', size: 'large', motion: 'static' },
        { object: 'blue square', position: 'left', size: 'small', motion: 'moving' },
        { object: 'green triangle', position: 'right', size: 'medium', motion: 'static' }
      ],
      intensity: 0.8
    },
    source: 'environment',
    context: {
      modality: 'visual',
      task: 'find-red-objects',  // Top-down attention goal
      timestamp: Date.now()
    }
  }
  
  log.info({ stimulus: stimulusExperience }, 'Multiple stimuli competing for attention')
  
  // Test 1: Early attention (after sensation)
  log.info('Test 1: Early attention selection')
  const earlyAttentionProcess = compose(
    sensation,
    attention,    // Early selection based on physical features
    perception
  )
  const earlyResult = await earlyAttentionProcess(stimulusExperience)
  log.info({ 
    source: earlyResult.source,
    attended: earlyResult.context.attended,
    attentionType: earlyResult.context.attentionType 
  }, 'Early attention result')
  
  // Test 2: Late attention (after perception)
  log.info('Test 2: Late attention selection')
  const lateAttentionProcess = compose(
    sensation,
    perception,
    attention,    // Late selection based on perceptual features
    representation
  )
  const lateResult = await lateAttentionProcess(stimulusExperience)
  log.info({ 
    source: lateResult.source,
    context: lateResult.context 
  }, 'Late attention result')
  
  // Test 3: Multiple attention stages
  log.info('Test 3: Multiple attention stages')
  const multiAttentionProcess = compose(
    sensation,
    attention,         // Early: filter by task-relevant features (e.g., color)
    perception,
    attention,         // Late: select specific object
    representation
  )
  const multiResult = await multiAttentionProcess(stimulusExperience)
  log.info({ 
    source: multiResult.source,
    pipeline: multiResult.context 
  }, 'Multiple attention stages result')
  
  // Test 4: No attention baseline
  log.info('Test 4: Process without attention (baseline)')
  const noAttentionProcess = compose(
    sensation,
    perception,
    representation
  )
  const baselineResult = await noAttentionProcess(stimulusExperience)
  log.info({ 
    source: baselineResult.source,
    hasAttention: 'attended' in (baselineResult.context || {})
  }, 'Baseline (no attention) result')
}

// Run the test
testAttention().catch((error) => {
  log.error({ error }, 'Test failed')
})