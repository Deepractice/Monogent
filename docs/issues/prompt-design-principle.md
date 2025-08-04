# Prompt Design Principle: Phenomenon-Based vs Mechanism-Based

## Issue Summary
Establish a clear design principle for cognitive prompts: focus on observable phenomena patterns rather than underlying neural mechanisms.

## Background
During the implementation of the sensory layer (Sensation, SensoryGating, FeatureDetection, PatternRecognition), we discovered an important design consideration about how to structure prompts for LLM-based cognitive processing.

## Core Insight
Just as humans don't need to understand the neural mechanisms of vision to see, LLMs don't need to understand the underlying cognitive science to perform cognitive tasks. Trying to make LLMs simulate low-level neural mechanisms is counterproductive - it's like "脱裤子放屁" (taking off pants to fart - an unnecessary extra step).

## Design Principle

### ✅ DO: Phenomenon-Based Prompts
Describe observable patterns and behaviors:
```typescript
// Good: Describe what happens
"In large amounts of information, certain content naturally 'pops out' and attracts attention..."
"Find the most salient, relevant, and unusual information..."
"Group similar, nearby, and continuous elements into wholes..."
```

### ❌ DON'T: Mechanism-Based Prompts
Avoid explaining neural/cognitive mechanisms:
```typescript
// Bad: Explain how it works
"According to the thalamic reticular nucleus's inhibitory GABAergic neurons..."
"Apply Broadbent's filter model of selective attention..."
"Use Hubel-Wiesel feature detectors in V1 cortex..."
```

## Benefits of This Approach

1. **More Natural**: LLMs can use their own methods to accomplish tasks
2. **More Stable**: Doesn't rely on LLM's understanding of complex theories
3. **More Practical**: Focuses on results rather than process
4. **More Honest**: We don't actually know exactly how the brain does these things

## Implementation Guidelines

When writing cognitive prompts:

1. **Include theory references** as background context (for human readers)
2. **Focus on observable patterns** in the main instructions
3. **Use action-oriented language** ("find", "group", "identify")
4. **Provide examples** of input-output patterns when helpful
5. **Avoid technical jargon** about neural mechanisms

## Example Transformation

Before (Mechanism-based):
```typescript
"Apply attentional filtering based on Attention Theory (Broadbent, 1958)
using bottom-up salience detection and top-down relevance gating..."
```

After (Phenomenon-based):
```typescript
"Look at the input and identify what stands out:
- Repeated elements (appears multiple times)
- Unique elements (appears only once)
- Contrasting elements (different from surroundings)
Mark each with its importance level..."
```

## Related Code
- `/packages/cognition/src/interfaces/sensory/Sensation.ts`
- `/packages/cognition/src/interfaces/sensory/SensoryGating.ts`
- `/packages/cognition/src/interfaces/sensory/FeatureDetection.ts`
- `/packages/cognition/src/interfaces/sensory/PatternRecognition.ts`

## Conclusion
This principle should guide all future prompt design in the Monogent cognitive architecture. We want to give LLMs a "cognitive task checklist" rather than a "neuroscience textbook".