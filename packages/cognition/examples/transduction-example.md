# Transduction Process 数据流示例

## 场景：用户输入 "一只棕色的狗在叫"

### 输入数据（进入Transduction之前）

```typescript
const input: Experience<Stimulus> = {
  value: "一只棕色的狗在叫",  // 原始文本刺激
  source: "user-input",         // 来自用户输入
  context: {
    sessionId: "abc123",
    userId: "user456",
    inputMethod: "keyboard"
  }
}
```

### Transduction处理

```typescript
// transduction.evolve(input) 执行后
```

### 输出数据（Transduction之后）

```typescript
const output: Experience<string> = {
  value: "一只棕色的狗在叫",     // 文本内容保持不变（pass-through）
  source: "transduction",         // 更新为transduction
  context: {
    // 保留原有context
    sessionId: "abc123",
    userId: "user456", 
    inputMethod: "keyboard",
    
    // Transduction添加的新元数据
    modality: "text",             // 标记为文本模态
    timestamp: 1698765432100,     // 处理时间戳
    previousSource: "user-input"  // 可选：记录上一个来源
  }
}
```

## 多模态示例（未来扩展）

### 图像输入

```typescript
// 输入
const imageInput: Experience<Stimulus> = {
  value: {
    type: "image",
    data: "base64_encoded_image_data...",
    metadata: { width: 640, height: 480 }
  },
  source: "camera",
  context: {}
}

// Transduction输出（假设的图像特征提取）
const imageOutput: Experience<ImageFeatures> = {
  value: {
    objects: ["dog", "brown", "barking"],
    colors: ["brown", "green", "blue"],
    scene: "outdoor",
    confidence: 0.95
  },
  source: "transduction",
  context: {
    modality: "visual",
    timestamp: 1698765432200,
    processingTime: 150  // 处理耗时ms
  }
}
```

### 音频输入

```typescript
// 输入
const audioInput: Experience<Stimulus> = {
  value: {
    type: "audio",
    data: audioBuffer,
    sampleRate: 44100
  },
  source: "microphone",
  context: {}
}

// Transduction输出（音频特征）
const audioOutput: Experience<AudioFeatures> = {
  value: {
    transcription: "woof woof",  // 如果是语音
    soundType: "animal_sound",
    frequency: { min: 200, max: 800 },
    duration: 2.5
  },
  source: "transduction",
  context: {
    modality: "auditory",
    timestamp: 1698765432300
  }
}
```

## 关键洞察

1. **文本场景下的简单性**：对于LLM系统，Transduction主要是添加元数据
2. **模态标记的重要性**：`modality`字段帮助后续处理知道数据类型
3. **时间戳的作用**：用于追踪处理流程和性能分析
4. **扩展性设计**：结构支持未来的多模态处理

## 下一步：SensoryGating

Transduction的输出将成为SensoryGating的输入，进行进一步的过滤和筛选。