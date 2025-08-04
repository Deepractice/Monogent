import { perception } from '../src/interfaces/perceptual/Perception.js'
import { echoInference } from '../src/interfaces/substrate/Inference.js'

/**
 * Test complete perception flow with error log example
 */
async function testPerceptionFlow() {
  console.log('=== Testing Complete Perception Flow ===\n')
  
  // Simulate a 1k token error log
  const errorLog = `
[2024-01-15 10:23:45.123] ERROR UserService - Failed to retrieve user data
java.lang.NullPointerException: Cannot invoke "User.getName()" because "user" is null
    at com.example.service.UserService.getUserDetails(UserService.java:45)
    at com.example.controller.UserController.getUser(UserController.java:23)
    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
    at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1067)
    
[2024-01-15 10:23:45.456] ERROR UserService - Failed to retrieve user data
java.lang.NullPointerException: Cannot invoke "User.getName()" because "user" is null
    at com.example.service.UserService.getUserDetails(UserService.java:45)
    
[2024-01-15 10:23:45.789] ERROR UserService - Failed to retrieve user data
java.lang.NullPointerException: Cannot invoke "User.getName()" because "user" is null
    at com.example.service.UserService.getUserDetails(UserService.java:45)
    
[2024-01-15 10:23:46.012] WARN  DatabaseConnection - Query returned empty result set
    SELECT * FROM users WHERE id = 12345
    
[2024-01-15 10:23:46.234] ERROR UserController - API request failed
    Endpoint: /api/users/12345
    Status: 500 Internal Server Error
    Cause: NullPointerException in UserService
  `
  
  const antecedent = {
    type: 'error-log',
    content: errorLog,
    metadata: {
      source: 'application-logs',
      severity: 'critical',
      context: 'production-debugging'
    }
  }
  
  // Create initial experience
  const initialExperience = {
    source: 'test',
    antecedent: antecedent,
    inference: echoInference
  }
  
  console.log('Input: Error log with ~1k tokens')
  console.log('Antecedent type:', antecedent.type)
  console.log('Metadata:', antecedent.metadata)
  console.log('\n--- Running through Perception ---\n')
  
  try {
    const result = await perception.evolve(initialExperience)
    
    console.log('✅ Perception completed successfully\n')
    
    // Show the elaboration chain
    console.log('=== Elaboration Chain (Bottom to Top) ===\n')
    
    let current = result.elaboration
    const chain = []
    
    while (current) {
      chain.unshift({
        source: current.source,
        promptPreview: current.prompt.substring(0, 100) + '...'
      })
      current = current.previous
    }
    
    chain.forEach((step, index) => {
      console.log(`${index + 1}. ${step.source}`)
      console.log(`   Prompt: ${step.promptPreview}`)
      console.log()
    })
    
    // The interpretation would contain the final perceptual understanding
    console.log('=== Final Perceptual Understanding ===')
    console.log('(With real LLM, this would contain:)')
    console.log('- Primary pattern: Repeated NullPointerException')
    console.log('- Root cause: Database returning null for user ID 12345')
    console.log('- Impact: API failures at /api/users endpoint')
    console.log('- Inner narrative: "The app is crashing because user 12345 doesn\'t exist in the database"')
    
  } catch (error) {
    console.error('❌ Error during perception:', error)
  }
}

// Run the test
testPerceptionFlow().catch(console.error)