# 认知Paths示例：看到一只狗在叫

本示例展示认知路径（Paths）如何组织认知功能（Functions）来适应不同的认知任务和情境。

## 场景描述

输入：文本描述"一只棕色的狗在叫"

## 认知架构层次回顾

1. **Processes层**（原子操作）- 最底层的认知机制
2. **Functions层**（过程组合）- 中层的认知功能，组合多个Processes
3. **Paths层**（功能编排）- 高层的认知路径，编排Functions完成特定任务
4. **Modes层**（路径选择）- 最高层的认知模式，根据情境选择Paths

## Paths设计理念

Paths代表完整的认知任务流程，通过编排不同的Functions来适应特定情境需求。每个Path都有理论基础和实证支持。

## 核心Paths定义

### 1. 感知-行动循环路径（Perception-Action Cycle）

**理论基础**：
- Gibson (1979) 生态心理学的直接知觉理论
- Norman (2013) 行动的七阶段理论

**适用情境**：
- 紧急情况需要快速反应
- 高度熟练的自动化任务
- 环境中的直接行动可能性（affordances）

**路径组成**：
```typescript
const perceptionActionPath: CognitivePath = {
  name: 'perception-action-cycle',
  functions: [
    sensation,    // 感觉输入
    perception,   // 知觉整合
    // → 直接行动，跳过深度认知加工
  ],
  theoretical_support: 'Gibson (1979) - Direct Perception'
}
```

**处理示例**：
```
输入："一只棕色的狗在叫"
↓ Sensation: 接收文本信号
↓ Perception: 识别"狗叫"模式
输出：触发警觉反应（无需理解为什么叫）
```

### 2. 完整认知循环路径（Complete Cognitive Cycle）

**理论基础**：
- Neisser (1976) 认知循环理论
- Craik & Lockhart (1972) 加工深度理论

**适用情境**：
- 学习新知识
- 需要深度理解的情况
- 首次遇到的复杂情境

**路径组成**：
```typescript
const completeCognitivePath: CognitivePath = {
  name: 'complete-cognitive-cycle',
  functions: [
    sensation,      // 感觉接收
    perception,     // 知觉组织
    familiarity,    // 熟悉感判断
    comprehension,  // 语义理解
    learning        // 记忆整合
  ],
  theoretical_support: 'Neisser (1976) - Perceptual Cycle'
}
```

**处理示例**：
```
输入："一只棕色的狗在叫"
↓ Sensation: 文本信号接收
↓ Perception: 知觉组织成完整描述
↓ Familiarity: 熟悉感判断
↓ Comprehension: 生成AMR语义表示
↓ Learning: 整合到记忆网络
输出：深度理解 + 记忆存储
```

### 3. 自上而下处理路径（Top-Down Processing）

**理论基础**：
- Gregory (1970) 知觉的建构主义理论
- Bar (2003) 视觉预测理论

**适用情境**：
- 有强烈预期的情况
- 在噪音中寻找特定信号
- 基于知识的推理

**路径组成**：
```typescript
const topDownPath: CognitivePath = {
  name: 'top-down-processing',
  functions: [
    comprehension,  // 从概念/预期开始
    familiarity,    // 主动寻找匹配模式
    perception,     // 引导性知觉
    recollection    // 提取相关记忆
  ],
  theoretical_support: 'Gregory (1970) - Constructivist Theory'
}
```

**处理示例**：
```
预期："可能有人来访"
↓ Comprehension: 激活"访客"概念
↓ Recognition: 寻找相关线索
↓ Perception: 注意到"狗叫"
↓ Recollection: "狗通常对陌生人叫"
输出：确认预期 - 可能有访客
```

### 4. 记忆驱动路径（Memory-Driven Path）

**理论基础**：
- Tulving (1985) 记忆系统理论
- Schacter et al. (2007) 建构性记忆

**适用情境**：
- 回忆过往经历
- 基于经验的判断
- 类比推理

**路径组成**：
```typescript
const memoryDrivenPath: CognitivePath = {
  name: 'memory-driven',
  functions: [
    familiarity,    // 识别记忆线索
    recollection,   // 提取相关记忆
    perception,     // 重建知觉体验
    comprehension   // 整合理解
  ],
  theoretical_support: 'Tulving (1985) - Episodic Memory'
}
```

**处理示例**：
```
输入："一只棕色的狗在叫"
↓ Recognition: 识别为熟悉模式
↓ Recollection: "邻居的棕色拉布拉多"
↓ Perception: 重建具体场景
↓ Comprehension: "可能是邮递员来了"
输出：基于记忆的情境理解
```

### 5. 快速模式匹配路径（Rapid Pattern Matching）

**理论基础**：
- Logan (1988) 自动化理论
- Chase & Simon (1973) 专家认知

**适用情境**：
- 专家的直觉判断
- 高度熟悉的模式
- 需要快速分类

**路径组成**：
```typescript
const patternMatchingPath: CognitivePath = {
  name: 'rapid-pattern-matching',
  functions: [
    perception,     // 知觉输入
    familiarity,    // 快速模式匹配
    // → 直接输出判断
  ],
  theoretical_support: 'Logan (1988) - Instance Theory'
}
```

**处理示例**：
```
输入："一只棕色的狗在叫"
↓ Perception: 知觉模式
↓ Recognition: 匹配"警告信号"模式
输出：分类为"需要注意"
```

### 6. 创造性思维路径（Creative Thinking Path）

**理论基础**：
- Wallas (1926) 创造力四阶段
- Finke et al. (1992) 生成探索模型

**适用情境**：
- 问题解决
- 艺术创作
- 新颖想法生成

**路径组成**：
```typescript
const creativeThinkingPath: CognitivePath = {
  name: 'creative-thinking',
  functions: [
    comprehension,  // 理解问题
    recollection,   // 收集相关知识
    // 孵化期（无意识加工）
    perception,     // 新模式涌现
    familiarity,    // 识别价值
    comprehension   // 验证可行性
  ],
  non_linear: true,
  theoretical_support: 'Wallas (1926) - Four Stages of Creativity'
}
```

### 7. 元认知监控路径（Metacognitive Monitoring）

**理论基础**：
- Flavell (1979) 元认知理论
- Nelson & Narens (1990) 元认知监控模型

**适用情境**：
- 学习过程监控
- 策略调整
- 自我反思

**路径组成**：
```typescript
const metacognitivePath: CognitivePath = {
  name: 'metacognitive-monitoring',
  functions: [
    comprehension,  // 评估当前认知状态
    familiarity,    // 识别问题或进展
    comprehension,  // 策略调整
    // 返回主认知任务
  ],
  parallel: true,  // 与主任务并行
  theoretical_support: 'Flavell (1979) - Metacognition'
}
```

## Paths的选择机制

### 情境适应性选择

```typescript
interface PathSelector {
  selectPath(context: CognitiveContext): CognitivePath {
    // 基于任务特征
    if (context.urgency === 'immediate') {
      return perceptionActionPath
    }
    
    // 基于认知负荷
    if (context.cognitiveLoad === 'high') {
      return patternMatchingPath  // 使用快捷路径
    }
    
    // 基于任务类型
    if (context.taskType === 'learning') {
      return completeCognitivePath
    }
    
    // 基于可用资源
    if (context.memoryAvailable && context.relevantExperience) {
      return memoryDrivenPath
    }
    
    // 默认完整处理
    return completeCognitivePath
  }
}
```

### 动态路径切换

路径可以在执行过程中动态调整：

```typescript
interface AdaptivePath {
  execute(input: Experience): Promise<Experience> {
    let currentPath = this.selectInitialPath()
    
    for (const func of currentPath.functions) {
      const result = await func.evolve(input)
      
      // 检查是否需要切换路径
      if (this.shouldSwitchPath(result)) {
        currentPath = this.selectNewPath(result)
      }
      
      input = result
    }
    
    return input
  }
}
```

## 路径组合模式

### 串行组合
```typescript
// 先快速反应，后深度理解
const reactThenUnderstand = compose(
  perceptionActionPath,
  completeCognitivePath
)
```

### 并行组合
```typescript
// 同时进行模式匹配和记忆检索
const parallelProcessing = parallel(
  patternMatchingPath,
  memoryDrivenPath
)
```

### 条件分支
```typescript
// 根据识别结果选择不同路径
const conditionalPath = branch(
  familiarity,
  {
    familiar: patternMatchingPath,
    novel: completeCognitivePath,
    threatening: perceptionActionPath
  }
)
```

## 认知效率优化

### 路径缓存
```typescript
interface PathCache {
  // 缓存常用路径组合
  cachedPaths: Map<string, CompiledPath>
  
  // 预编译优化
  precompile(path: CognitivePath): CompiledPath
  
  // 基于使用频率的优化
  optimizeFrequent(usage: PathUsageStats): void
}
```

### 路径学习
```typescript
interface PathLearning {
  // 从成功经验中学习新路径
  learnFromSuccess(
    task: Task,
    path: CognitivePath,
    outcome: Outcome
  ): void
  
  // 调整路径选择策略
  updateSelectionPolicy(
    feedback: Feedback
  ): void
}
```

## 实现指导

1. **理论驱动**：每个Path都应有认知心理学理论支撑
2. **情境适应**：根据任务和环境选择合适路径
3. **灵活组合**：支持路径的动态组合和切换
4. **性能优化**：为常用路径提供优化实现
5. **个体差异**：允许基于认知风格的路径偏好

## 总结

Paths层提供了认知任务的完整解决方案，通过组合Functions来适应不同的认知需求。这种设计既保持了理论的严谨性，又提供了实践的灵活性。