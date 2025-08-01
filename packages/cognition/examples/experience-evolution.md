# Experience 在认知路径中的演变

## Understand路径的完整流程

让我们追踪 "一只棕色的狗在叫" 经过所有认知阶段的演变。

### 0. 初始编码（Experiential Encoding）
```typescript
{
  value: "一只棕色的狗在叫",
  source: "encoded",
  context: {
    timestamp: 1698765432000
  }
}
```

### 1. 感觉（Sensation = Transduction + SensoryGating）

#### 1.1 Transduction后
```typescript
{
  value: "一只棕色的狗在叫",  // 文本保持不变
  source: "transduction",
  context: {
    timestamp: 1698765432000,
    modality: "text",           // 新增：模态标记
    processingTime: 2           // 新增：处理时间
  }
}
```

#### 1.2 SensoryGating后
```typescript
{
  value: "一只棕色的狗在叫",  // 通过过滤
  source: "sensory-gating",
  context: {
    timestamp: 1698765432000,
    modality: "text",
    processingTime: 5,
    salience: 0.8,              // 新增：显著性评分
    filtered: false             // 新增：未被过滤
  }
}
```

### 2. 知觉（Perception = FeatureDetection + PatternRecognition）

#### 2.1 FeatureDetection后
```typescript
{
  value: {
    text: "一只棕色的狗在叫",
    features: {
      entities: ["狗"],         // 提取的实体
      attributes: ["棕色"],     // 属性
      actions: ["叫"],          // 动作
      quantity: ["一只"]        // 数量
    }
  },
  source: "feature-detection",
  context: {
    // 累积的context
    timestamp: 1698765432000,
    modality: "text",
    processingTime: 20,
    detectionMethod: "llm"      // 新增：检测方法
  }
}
```

#### 2.2 PatternRecognition后
```typescript
{
  value: {
    text: "一只棕色的狗在叫",
    features: { ... },
    patterns: {
      scene: "animal-vocalization",  // 识别的场景模式
      structure: "entity-action",     // 句子结构
      emotional_tone: "neutral"       // 情感基调
    }
  },
  source: "pattern-recognition",
  context: {
    timestamp: 1698765432000,
    modality: "text",
    processingTime: 35,
    recognizedPatterns: ["animal-behavior", "sensory-description"]
  }
}
```

### 3. 理解（Comprehension = SemanticEncoding + Categorization + Abstraction）

#### 3.1 SemanticEncoding后
```typescript
{
  value: {
    percept: { /* 之前的知觉数据 */ },
    amr: {
      root: "bark-01",
      agent: { type: "dog", color: "brown", quantity: 1 },
      tense: "present"
    }
  },
  source: "semantic-encoding",
  context: {
    timestamp: 1698765432000,
    modality: "text",
    processingTime: 50,
    semanticFormat: "amr"
  }
}
```

### 4. 熟悉感（Familiarity = SpreadingActivation + AssociativeBinding）

```typescript
{
  value: {
    percept: { /* ... */ },
    amr: { /* ... */ },
    familiarity: {
      score: 0.75,              // 熟悉度分数
      activated_concepts: [
        { concept: "dog", strength: 0.9 },
        { concept: "barking", strength: 0.8 },
        { concept: "pet", strength: 0.6 }
      ]
    }
  },
  source: "familiarity",
  context: {
    timestamp: 1698765432000,
    modality: "text",
    processingTime: 65,
    memoryActivation: true
  }
}
```

### 5. 回忆（Recollection = EpisodicRetrieval）

```typescript
{
  value: {
    percept: { /* ... */ },
    amr: { /* ... */ },
    familiarity: { /* ... */ },
    memories: [
      {
        content: "邻居的棕色拉布拉多经常叫",
        relevance: 0.8,
        timestamp: 1698700000000
      },
      {
        content: "狗叫通常表示警戒或兴奋",
        relevance: 0.7,
        type: "semantic"
      }
    ]
  },
  source: "recollection",
  context: {
    timestamp: 1698765432000,
    modality: "text",
    processingTime: 80,
    retrievedMemories: 2
  }
}
```

### 6. 巩固（Consolidation = Integration）

```typescript
{
  value: {
    understanding: {
      meaning: "一只棕色的狗正在发出叫声",
      context: "可能是警戒或交流行为",
      associations: ["动物行为", "宠物", "声音"]
    },
    integrated_knowledge: {
      new_connections: [
        { from: "brown-dog", to: "barking-behavior" }
      ],
      strengthened_memories: ["dog-vocalization-patterns"],
      created_at: 1698765432100
    }
  },
  source: "consolidation",
  context: {
    timestamp: 1698765432000,
    modality: "text",
    processingTime: 100,
    cognitiveLoad: "moderate",
    integrationSuccess: true,
    pathCompleted: "understand"
  }
}
```

## 关键设计原则

1. **累积性**：每个阶段都保留并增强之前的信息
2. **结构化**：value逐渐从简单类型变为复杂嵌套结构
3. **可追踪**：通过source和context追踪处理历程
4. **渐进深化**：从表面特征到深层理解

## 数据结构演变模式

```
string → 
  { text, features } → 
    { percept, patterns } → 
      { percept, amr } → 
        { ...prev, familiarity } → 
          { ...prev, memories } → 
            { understanding, integrated_knowledge }
```

每个阶段都在前一阶段的基础上添加新的认知层次，最终形成完整的理解。