<execution>
  <constraint>
    ## Monogent Project Constraints
    
    ### Technical Constraints  
    - **Language Requirements**: All code, comments, and technical documentation must be in English
    - **Naming Philosophy**: Use neuroscience and cognitive psychology terms for all identifiers
    - **No Interface Prefix**: Never use 'I' prefix for interfaces (e.g., use `CognitiveState` not `ICognitiveState`)
    - **Implementation Suffix**: Use descriptive suffixes for implementations (e.g., `ComputationSubstrateImpl`)
    - **Monorepo Structure**: All code must be in `packages/cognition/src/` directory
    - **TypeScript Strict Mode**: All code must pass strict TypeScript checks
    - **No Any Types**: Never use `any` type, always provide explicit types
    - **Function Type Safety**: Use specific function signatures instead of generic `Function` type
    
    ### Cognitive Psychology Constraints
    - **Information Processing Model**: Strictly follow Sensation → Perception → Cognition → Comprehension
    - **Dual Process Theory**: Respect the distinction between automatic (Type 1) and controlled (Type 2) processing
    - **Cognitive Load Limits**: Working memory capacity 7±2, attention as limited resource
    - **Substrate Architecture**: Computation and Generation are internal substrates, not external executors
    
    ### Architecture Constraints
    - **Interface-First Design**: Always define interfaces before implementations
    - **Substrate Location**: Substrate modules must be inside `cognition/substrate/` directory
    - **Cognitive Stages**: Each stage must have clear input/output interfaces
    - **Command Pattern**: Use command pattern for cognitive operations, not direct function calls
  </constraint>

  <rule>
    ## Development Rules
    
    ### File Organization Rules (Issue #14)
    - **Interface Files**: `packages/cognition/src/interfaces/[domain].ts`
    - **One Type Per File**: Like Java, each interface/type gets its own file
    - **Implementation Files**: `packages/cognition/src/[module]/[implementation].ts`
    - **Test Files**: `packages/cognition/__tests__/[module].test.ts`
    - **Documentation**: `packages/cognition/docs/[topic].md`
    - **Substrate Interfaces**: `packages/cognition/src/interfaces/substrate/[Type].ts`
    
    ### Naming Convention Rules
    ```typescript
    // ✅ Correct: Cognitive psychology terms
    interface CognitiveFrame { }
    interface Percept { }
    interface ComputationSubstrate { }
    
    // ❌ Wrong: Generic programming terms
    interface IDataProcessor { }
    interface Handler { }
    interface Service { }
    ```
    
    ### Interface Design Rules
    - **No 'I' Prefix**: `CognitiveState` not `ICognitiveState`
    - **Clear Boundaries**: Each interface represents one cognitive concept
    - **Type Safety**: Use generics and discriminated unions
    - **Immutability**: Prefer readonly properties
    
    ### Error Handling Rules
    - **Cognitive Errors**: Model errors as cognitive failures (e.g., `AttentionOverloadError`)
    - **Graceful Degradation**: System should degrade gracefully under cognitive load
    - **Error Recovery**: Implement cognitive recovery mechanisms
  </rule>

  <guideline>
    ## Development Guidelines
    
    ### Interface-Driven Development
    1. **Start with Interfaces**: Define all interfaces before any implementation
    2. **Cognitive Concepts First**: Map cognitive concepts to TypeScript interfaces
    3. **Clear Contracts**: Each interface should have clear pre/post conditions
    4. **Minimal Dependencies**: Interfaces should depend only on other interfaces
    
    ### Substrate Design Guidelines
    ```typescript
    // Computation Substrate: Deterministic, fast, cacheable
    interface ComputationSubstrate {
      compute<T>(task: ComputeTask<T>): T
    }
    
    // Generation Substrate: Probabilistic, creative, context-aware
    interface GenerationSubstrate {
      generate(task: GenerateTask): Promise<GeneratedContent>
    }
    ```
    
    ### Testing Guidelines
    - **Cognitive Phenomena Tests**: Test should verify cognitive phenomena (e.g., serial position effect)
    - **Substrate Isolation**: Test substrates independently
    - **Integration Tests**: Verify cognitive pipeline end-to-end
    - **Performance Benchmarks**: Measure cognitive load and processing time
    
    ### Documentation Guidelines
    - **Cognitive Theory References**: Link to relevant cognitive psychology literature
    - **Implementation Notes**: Explain how theory maps to code
    - **Usage Examples**: Show cognitive tasks, not technical operations
  </guideline>

  <process>
    ## Development Process
    
    ### Phase 0: Requirement Discussion (Pair Programming)
    ```mermaid
    flowchart TD
        A[User Requirement] --> B{Clarify Need}
        B --> C[Cognitive Background]
        C --> D[Key Concept Mapping]
        D --> E{Confirm Understanding?}
        E -->|No| B
        E -->|Yes| F[Design Options]
        F --> G{Get Approval?}
        G -->|No| F
        G -->|Yes| H[Start Implementation]
    ```
    
    **Discussion Points**:
    - What cognitive phenomena are we modeling?
    - Which cognitive theories apply?
    - What are the biological constraints?
    - How to balance biological fidelity vs computational efficiency?
    
    ### Step 1: Cognitive Concept Analysis
    ```mermaid
    flowchart TD
        A[Cognitive Theory] --> B[Identify Concepts]
        B --> C[Map to Interfaces]
        C --> D[Define Relationships]
        D --> E[Validate with Literature]
    ```
    
    ### Step 2: Interface Definition
    ```typescript
    /**
     * Discussion: How to design substrate interfaces?
     * 
     * Option 1: Unified Substrate Interface
     * - Pro: Single entry point, easier to manage
     * - Con: Violates single responsibility principle
     * 
     * Option 2: Separate Computation and Generation
     * - Pro: Clear separation of concerns
     * - Con: More interfaces to manage
     * 
     * Decision: Option 2 - Follow cognitive psychology's dual-process theory
     */
    
    // File: src/interfaces/substrate/Computation.ts
    interface Computation {
      compute<T>(task: {
        operation: ComputeOperation
        input: unknown
        fn: ComputeFunction<T> | ComputeFunction<unknown>[]
      }): T
    }
    
    // File: src/interfaces/substrate/Generation.ts  
    interface Generation {
      generate(task: {
        intent: GenerateIntent
        input: string | object
        context?: GenerateContext
      }): Promise<{
        content: string | object
        metadata: GenerationMetadata
      }>
    }
    
    // File: src/interfaces/types/ComputeFunction.ts
    type ComputeFunction<T> = (input: unknown) => T
    
    // File: src/interfaces/types/ComputeOperation.ts
    type ComputeOperation = 
      | 'transform'   // Data transformation
      | 'match'       // Pattern matching
      | 'filter'      // Data filtering
      | 'aggregate'   // Data aggregation
      | 'calculate'   // Numerical calculation
      | 'extract'     // Feature extraction
      | 'compare'     // Comparison operation
    ```
    
    ### Step 3: Implementation Planning
    ```mermaid
    graph LR
        A[Interfaces] --> B[Substrate Implementation]
        B --> C[Stage Implementation]
        C --> D[Pipeline Assembly]
        D --> E[Integration Testing]
    ```
    
    ### Step 4: Test-Driven Implementation
    
    #### Cognitive Phenomena Tests
    ```typescript
    // File: __tests__/substrate/computation.test.ts
    describe('Computation Substrate', () => {
      // Test 1: Automatic Processing Speed
      it('should process simple computations faster than 10ms', () => {
        // Based on automatic/Type 1 processing characteristics
        const startTime = performance.now()
        
        const result = computation.compute({
          operation: 'match',
          input: { pattern: 'ABC', text: 'XABCY' },
          fn: patternMatch
        })
        
        const duration = performance.now() - startTime
        expect(duration).toBeLessThan(10) // Automatic processing is fast
        expect(result).toBe(true)
      })
      
      // Test 2: Parallel Processing Capability
      it('should handle multiple computations in parallel', () => {
        // Type 1 processing can handle multiple streams
        const tasks = Array(10).fill(null).map((_, i) => ({
          operation: 'transform' as const,
          input: i,
          fn: (n: number) => n * 2
        }))
        
        const results = Promise.all(
          tasks.map(task => Promise.resolve(computation.compute(task)))
        )
        
        expect(results).resolves.toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
      })
    })
    
    // File: __tests__/substrate/generation.test.ts  
    describe('Generation Substrate', () => {
      // Test 1: Context Sensitivity
      it('should generate different outputs based on context', async () => {
        // Type 2 processing is context-dependent
        const task1 = {
          intent: 'understand' as const,
          input: 'bank',
          context: { domain: 'finance' }
        }
        
        const task2 = {
          intent: 'understand' as const,
          input: 'bank',
          context: { domain: 'geography' }
        }
        
        const result1 = await generation.generate(task1)
        const result2 = await generation.generate(task2)
        
        expect(result1.content).toContain('financial')
        expect(result2.content).toContain('river')
      })
    })
    ```
    
    #### Implementation Strategy
    1. Write tests for cognitive phenomena first
    2. Implement minimal code to pass tests
    3. Refactor while maintaining tests
    4. Document cognitive rationale in comments
    
    ### Step 5: Integration and Validation
    - Verify against cognitive psychology principles
    - Test with real cognitive tasks
    - Measure performance metrics
    - Document deviations from theory
    
    ### Step 6: Architecture Decision Records
    ```markdown
    # ADR: Substrate Architecture for Cognition Module
    
    ## Context
    Need to implement the foundational processing mechanisms for cognition.
    
    ## Decision
    Separate Computation and Generation into distinct substrates.
    
    ## Rationale
    1. Aligns with dual-process theory (System 1/2, Type 1/2)
    2. Computation handles automatic, fast, parallel processing
    3. Generation handles controlled, slow, serial processing
    4. Clear separation enables independent optimization
    
    ## Consequences
    - (+) Clean architecture following cognitive psychology
    - (+) Can optimize each substrate independently
    - (+) Easy to test cognitive phenomena
    - (-) Need to coordinate between substrates
    - (-) More complex than unified approach
    
    ## References
    - Kahneman, D. (2011). Thinking, Fast and Slow
    - Evans, J. S. B. (2008). Dual-processing accounts of reasoning
    ```
  </process>

  <criteria>
    ## Quality Criteria
    
    ### Code Quality Standards
    - ✅ All interfaces defined before implementation
    - ✅ TypeScript strict mode compliance
    - ✅ 100% type coverage
    - ✅ No 'any' types except justified cases
    - ✅ All code commented in English
    
    ### Cognitive Fidelity Standards
    - ✅ Replicates known cognitive phenomena
    - ✅ Respects cognitive constraints (memory, attention)
    - ✅ Clear mapping to cognitive theory
    - ✅ Validated against psychology literature
    
    ### Architecture Standards
    - ✅ Clean separation between stages
    - ✅ Substrate pattern properly implemented
    - ✅ Command pattern for all operations
    - ✅ Immutable data flow
    
    ### Performance Standards
    - ✅ Computation substrate < 10ms for most operations
    - ✅ Generation substrate < 1s for typical tasks
    - ✅ Memory usage within cognitive limits
    - ✅ Graceful degradation under load
    
    ### Documentation Standards
    - ✅ Every interface has JSDoc comments
    - ✅ Cognitive rationale documented
    - ✅ Literature references included
    - ✅ Usage examples provided
  </criteria>
</execution>