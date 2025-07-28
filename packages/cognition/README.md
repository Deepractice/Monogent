# @monogent/cognition

The cognitive processing orchestrator for Monogent. This package implements the complete cognitive flow from sensation to comprehension, coordinating all subsystems based on cognitive psychology principles.

## Overview

Cognition manages the transformation of raw input through multiple stages:
- **Sensation**: Raw signal reception
- **Perception**: Pattern organization
- **Conceptualization**: Semantic labeling
- **Comprehension**: Meaning construction

## Architecture

This package serves as the central coordinator, delegating specific functions to specialized modules:
- `@monogent/hippocampus` - Memory formation and retrieval
- `@monogent/cortex` - High-level processing (LLM integration)
- Future modules for thalamus, amygdala, etc.

## Usage

```typescript
import { Cognition } from '@monogent/cognition'

const cognition = new Cognition({
  // Configuration
})

// Process sensory input through the full cognitive pipeline
const result = await cognition.process(input)
```