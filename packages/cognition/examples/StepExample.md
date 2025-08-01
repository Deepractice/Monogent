# 认知Steps示例：看到一只狗在叫

本示例将通过一个具体场景，逐步展示认知流程中每个具体Step的处理机制。

## 场景描述

输入：文本描述"一只棕色的狗在叫"（由于我们专注于语言模型）

## 认知架构层次

### 1. Steps层（具体机制）- 最底层
具体的认知处理步骤，描述"怎么做"

### 2. Stages层（功能抽象）- 中间层  
使用-tion命名的功能抽象，描述"做什么"

### 3. Phases层（流程组织）- 最高层
三大认知阶段的组织

## Steps层详细框架（使用认知心理学标准术语）

### Phase 1: 前AMR阶段的Steps
| Step | 对应Stage | 基质 | 功能描述 |
|------|-----------|------|----------|
| **Sensation** | Sensation | Computation | 感觉接收 |
| **Sensory Gating** | Attention | Computation | 感觉门控过滤 |
| **Feature Detection** | Discrimination | Generation | 特征检测 |
| **Pattern Recognition** | Perception | Generation | 模式识别 |

### Phase 2: AMR处理阶段的Steps  
| Step | 对应Stage | 基质 | 功能描述 |
|------|-----------|------|----------|
| **Semantic Encoding** | Representation | Generation | 语义编码为AMR |
| **Categorization** | Categorization | Generation | 概念分类 |
| **Abstraction** | Abstraction | Generation | 抽象提取 |
| **Spreading Activation** | Activation | Computation | 扩散激活 |
| **Associative Binding** | Association | Computation | 联想绑定 |

### Phase 3: 后AMR阶段的Steps
| Step | 对应Stage | 基质 | 功能描述 |
|------|-----------|------|----------|
| **Episodic Retrieval** | Recollection | Generation | 情景记忆检索 |
| **Integration** | Integration | Computation | 信息整合 |

## Steps详细推演

### Phase 1: 前AMR阶段（信号→结构）

#### Step 1: Sensation（感觉）

输入：原始感官信号

处理：由于我们专注于语言模型，不处理多模态信号，这里直接传递文本描述

输出：
```json
{
  "value": "一只棕色的狗在叫",
  "source": "sensation",
  "context": {
    "modality": "text",
    "timestamp": 1234567890
  }
}
```

**注意**：在实际的多模态系统中，这里会处理视觉、听觉等原始信号。但在当前LLM为主的架构中，我们假设输入已经是文本形式。

#### Step 2: Sensory Gating（感觉门控）

输入：Sensation的输出

处理：在语言模型场景中，所有文本输入默认通过门控（跳过）

输出：直接传递（与输入相同）

#### Step 3: Feature Detection（特征检测）

输入：Sensory Gating的输出

处理：在LLM架构中，特征检测已隐含在模型的embedding和attention中（跳过）

输出：直接传递

#### Step 4: Pattern Recognition（模式识别）

输入：各种感觉特征（在真实认知中）

处理：将零散的感觉特征整合成完整的知觉体验。在真实认知中，这是形成内心语言描述的关键步骤。

**重要说明**：
- 真实认知：视觉+听觉信号 → "一只棕色的狗在叫"
- LLM场景：输入已经是语言形式，这步相当于已完成

输出：
```json
{
  "value": "一只棕色的狗在叫",
  "source": "pattern-recognition",
  "context": {
    "perceptualPattern": "complete",
    "description": "内心语言形式的知觉体验"
  }
}
```

### Phase 2: AMR处理阶段（结构→语义）

#### Step 5: Semantic Encoding（语义编码）

输入：Pattern Recognition输出的知觉意义（perceptual meaning）

处理：将知觉层面的意义转换为语义结构（semantic structure）。这是从"体验"到"理解"的关键转换。

转换过程：
- 识别概念：狗、叫
- 识别关系：施事关系（狗是叫的施事者）
- 识别属性：棕色（狗的属性）、一只（数量）

输出：
```
(b / bark-01
  :ARG0 (d / dog
    :quant 1
    :mod (b2 / brown)))
```

这是认知的**分水岭**：从知觉意义转向语义理解。

**认知模式的递归性**：
- 前AMR阶段：信号特征检测 → 信号模式形成
- Semantic Encoding：语义特征检测 → 语义模式形成
- 处理过程相同，只是处理对象从信号变为意义

**实现参考**：
```typescript
// Generation Substrate 调用 - LLM生成AMR文本
const semanticEncodingTask: GenerateTask = {
  intent: 'encode-semantic',
  input: {
    perceptualMeaning: "一只棕色的狗在叫",
    instruction: `将知觉体验转换为AMR语义表示：
      1. 识别核心事件/动作（使用PropBank框架，如bark-01）
      2. 识别参与者及其语义角色（:ARG0施事者等）  
      3. 识别属性和修饰关系（:mod, :quant等）
      
      输出标准AMR格式，例如：
      (e / event-name
        :ARG0 (x / entity-type))`
  },
  context: { 
    format: 'amr',
    cognitiveStage: 'semantic-encoding' 
  }
}

// 输出: "(b / bark-01 :ARG0 (d / dog :quant 1 :mod (b2 / brown)))"
// 此时只是文本形式的AMR，还未解析成图结构
```

#### Step 6: Categorization（分类）

输入：Semantic Encoding生成的AMR图

处理：为AMR中的每个节点添加语义类别，使概念具有层级归属。

分类过程：
- `dog` → 类别：动物、哺乳类、宠物（可能）
- `bark-01` → 类别：事件、声音事件、动物行为
- `brown` → 类别：属性、颜色属性

输出（增强的AMR）：
```
(b / bark-01 [EVENT:sound]
  :ARG0 (d / dog [ENTITY:animal:mammal]
    :quant 1
    :mod (b2 / brown [PROPERTY:color])))
```

**作用**：让每个概念都有明确的类别归属，为后续的推理和联想提供基础。

**实现参考**：
```typescript
// Generation Substrate 调用 - LLM增强AMR
const categorizationTask: GenerateTask = {
  intent: 'categorize-concepts',
  input: {
    amr: "(b / bark-01 :ARG0 (d / dog :quant 1 :mod (b2 / brown)))",
    instruction: `为AMR中的每个概念添加语义类别标注：
      1. 实体(entity)的本体类别：如animal:mammal:canine
      2. 事件(event)的类型：如sound-event, action-event
      3. 属性(property)的类别：如color, size, quantity
      
      在每个概念后用方括号标注，如：dog [ENTITY:animal:mammal]`
  },
  context: {
    cognitiveStage: 'categorization'
  }
}

// 输出: "(b / bark-01 [EVENT:sound] :ARG0 (d / dog [ENTITY:animal:mammal] ...))"
```

#### Step 7: Abstraction（抽象）

输入：分类后的AMR图

处理：从具体的AMR中提取抽象模式，识别可泛化的结构。

抽象过程：
- 具体实例：狗在叫
- 抽象模式：[动物] 发出 [声音]
- 更抽象：[施事者] 执行 [动作]

识别的模式：
```
PATTERN: AGENT-ACTION
  where AGENT = ENTITY:animal
        ACTION = EVENT:sound
```

输出：
```json
{
  "amr": "(原AMR保持不变)",
  "patterns": [
    {
      "type": "AGENT-ACTION",
      "abstraction_level": 1,
      "template": "[animal] produces [sound]"
    },
    {
      "type": "AGENT-ACTION", 
      "abstraction_level": 2,
      "template": "[entity] performs [event]"
    }
  ]
}
```

**作用**：提取可复用的认知模式，支持类比推理和知识迁移。

**实现参考**：
```typescript
// Generation Substrate 调用 - LLM提取抽象模式
const abstractionTask: GenerateTask = {
  intent: 'extract-patterns',
  input: {
    categorizedAMR: "(b / bark-01 [EVENT:sound] :ARG0 (d / dog [ENTITY:animal:mammal] ...))",
    instruction: `从AMR中提取抽象模式：
      1. 识别事件框架模式（如AGENT-ACTION）
      2. 逐层抽象：具体实例→领域模式→通用模式
      3. 生成可复用的模式模板
      
      输出JSON格式的模式列表，包含不同抽象层级`
  },
  context: {
    cognitiveStage: 'abstraction'
  }
}

// 输出: JSON格式的patterns数组
// LLM识别出"狗叫"可以抽象为"动物发声"再到"实体执行动作"
```

#### Step 8: Spreading Activation（扩散激活）

输入：AMR图 + 抽象模式

处理：基于AMR内容激活海马体中的相关体验记忆。这是Computation基质，自动扩散激活。

重点：不是激活语义概念（那些已经在AMR中了），而是激活具体的体验和情景。

激活的体验记忆：
- 具体经历：上周邻居的狗叫是因为快递员来了
- 个人体验：我家的狗叫通常是想出去玩
- 情景记忆：晚上听到狗叫会有点紧张

输出：
```json
{
  "amr": "(保持原AMR)",
  "activated_experiences": [
    {
      "type": "episodic",
      "content": "上周邻居的狗叫，原来是快递到了",
      "context": {"time": "daytime", "outcome": "harmless"},
      "relevance": 0.9
    },
    {
      "type": "personal",
      "content": "Max（我的狗）叫是想出去玩",
      "context": {"emotion": "playful", "action": "需要遛狗"},
      "relevance": 0.7
    },
    {
      "type": "emotional",
      "content": "晚上听到狗叫会紧张",
      "context": {"time": "night", "emotion": "anxiety"},
      "relevance": 0.6
    }
  ]
}
```

**作用**：激活海马体中的具体体验，为理解当前情况提供经验参考。

**实现参考**：
```typescript
// Computation Substrate - 基于Collins & Loftus (1975)扩散激活理论
interface MemoryNode {
  id: string
  type: 'concept' | 'episode' | 'experience'
  content: any
  activation: number  // 当前激活强度
}

// 需要先用penman-js解析AMR
import { decode } from 'penman-js'
const amrGraph = decode(amrText)

// 扩散激活算法
function spreadingActivation(
  amrNodes: string[],      // 从AMR提取的概念节点
  memoryGraph: MemoryGraph,
  patterns: Pattern[]      // 激活的模式
) {
  // 1. 初始激活 - 注入能量
  const seeds = findMatchingNodes(amrNodes, memoryGraph)
  seeds.forEach(node => node.activation = 1.0)
  
  // 2. 迭代扩散 - Anderson ACT-R的幂函数衰减
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    memoryGraph.nodes.forEach(node => {
      if (node.activation > THRESHOLD) {
        const fanOut = node.edges.length
        
        node.edges.forEach(edge => {
          // 扇出效应：激活分散到所有连接
          const baseActivation = node.activation / fanOut
          
          // 语义距离影响传导率
          const semanticWeight = edge.weight
          
          // 模式匹配增强传导
          const patternBoost = matchesPattern(edge, patterns) ? 1.5 : 1.0
          
          // 幂函数衰减（不是指数）
          const decay = Math.pow(0.7, edge.distance)
          
          edge.target.activation += baseActivation * semanticWeight * patternBoost * decay
        })
      }
    })
    
    // 收敛检测
    if (isStable(memoryGraph)) break
  }
  
  // 3. 收集激活的体验（不是概念）
  return memoryGraph.nodes
    .filter(n => n.type === 'experience' && n.activation > 0.6)
    .sort((a, b) => b.activation - a.activation)
}
```

#### Step 9: Associative Binding（联想绑定）

输入：AMR + 激活的体验记忆

处理：在当前情况与激活的体验之间建立绑定关系。这是Computation基质的确定性操作。

绑定过程：
- 识别相似性：当前"狗叫" ↔ 记忆中"邻居狗叫"
- 建立映射：相似度评分、对应关系
- 不创造新内容，只建立连接

输出：
```json
{
  "amr": "(保持原AMR)",
  "bindings": [
    {
      "current_pattern": "dog-bark",
      "memory_id": "邻居狗叫-快递员",
      "similarity": 0.9,
      "mappings": {
        "bark-01": "bark-event-memory",
        "dog": "neighbor-dog"
      }
    }
  ]
}
```

**作用**：建立当前情况与过往经验的关联，支持基于经验的理解。

**实现参考**：
```typescript
// Computation Substrate - 确定性的图匹配算法
interface BindingResult {
  mappings: Array<{
    currentNode: string      // AMR中的节点
    memoryNode: string       // 记忆中的节点
    matchScore: number       // 匹配得分
    matchType: 'exact' | 'semantic' | 'structural'
  }>
  selectedMemory: {
    id: string
    totalScore: number
  }
}

function associativeBinding(
  currentAMR: AMRGraph,         // 已解析的AMR图
  activatedMemories: Memory[]   // Step 8激活的记忆子图
): BindingResult {
  // 1. 结构特征提取
  const currentFeatures = extractStructuralFeatures(currentAMR)
  // - 图的拓扑结构（节点数、边数、深度）
  // - 语义角色分布（ARG0, ARG1等）
  // - 概念类型分布（EVENT, ENTITY, PROPERTY）
  
  // 2. 为每个激活的记忆计算匹配度
  const matchResults = activatedMemories.map(memory => {
    // 2.1 结构相似度（图同构程度）
    const structuralSim = compareGraphStructure(
      currentFeatures,
      memory.features
    )
    
    // 2.2 节点级匹配矩阵
    const nodeMatches = computeNodeMatchMatrix(
      currentAMR.nodes,
      memory.nodes,
      {
        typeWeight: 0.4,      // 节点类型匹配权重
        conceptWeight: 0.3,   // 概念相似度权重  
        roleWeight: 0.3       // 语义角色匹配权重
      }
    )
    
    // 2.3 使用匈牙利算法找最优匹配
    const optimalMapping = hungarianAlgorithm(nodeMatches)
    
    return {
      memoryId: memory.id,
      structuralScore: structuralSim,
      mappings: optimalMapping,
      totalScore: calculateTotalScore(structuralSim, optimalMapping)
    }
  })
  
  // 3. 选择最佳匹配的记忆
  const bestMatch = matchResults
    .sort((a, b) => b.totalScore - a.totalScore)[0]
  
  return {
    mappings: bestMatch.mappings,
    selectedMemory: {
      id: bestMatch.memoryId,
      totalScore: bestMatch.totalScore
    }
  }
}

// 关键：这是纯计算过程，不生成新内容
// 只是找出当前情况与哪个记忆最相似，以及具体的对应关系
```

### Phase 3: 后AMR阶段（语义→理解）

#### Step 10: Episodic Retrieval（情景记忆检索）

输入：AMR + 绑定关系

处理：基于绑定关系，检索完整的情景记忆细节。

输出：
```json
{
  "retrieved_episodes": [
    {
      "episode": "上次邻居狗叫的完整情景",
      "details": {
        "context": "白天，快递员敲门",
        "outcome": "没有危险",
        "actions": "主人去开门"
      }
    }
  ]
}
```

**实现参考**：
```typescript
// Generation Substrate - 基于Schacter建构性记忆理论
const episodicRetrievalTask: GenerateTask = {
  intent: 'reconstruct-episodic-memory',
  input: {
    bindings: {
      mappings: [
        { currentNode: "dog", memoryNode: "邻居的棕狗", matchScore: 0.9 },
        { currentNode: "bark-01", memoryNode: "叫声事件", matchScore: 0.8 }
      ],
      selectedMemory: { id: "邻居狗叫-快递员", totalScore: 0.85 }
    },
    instruction: `基于记忆片段重建完整的情景记忆（Bartlett重建原则）：
      
      当前绑定强度：${bindingStrength}
      
      重建策略：
      1. 使用可用的记忆痕迹作为核心
      2. 用图式（schemas）和一般知识填补细节
      3. 根据绑定强度调整叙述的确定性：
         - 强绑定(>0.8)："我清楚地记得..."
         - 中等绑定(0.5-0.8)："应该是..."、"好像..."
         - 弱绑定(<0.5)："可能是..."、"不太确定..."
      
      注意：这是正常的建构性记忆过程，不需要100%准确。
      记忆的模糊或错误是人类认知的正常特征。`
  },
  context: {
    cognitiveStage: 'episodic-retrieval',
    memoryType: 'reconstructive'
  }
}

// 输出示例（强绑定）：
// "我记得那是上周二下午，邻居家的棕色拉布拉多突然大声吠叫。
//  后来发现是UPS快递员来送包裹，狗听到门铃声就叫了起来。"

// 输出示例（弱绑定）：
// "好像有只狗在叫...可能是因为有人来了？具体什么时候不太记得了，
//  但应该是白天的事。"
```

#### Step 11: Integration（整合）

输入：所有之前步骤的输出

处理：整合所有信息形成最终理解。

输出：
```json
{
  "understanding": {
    "situation": "一只狗在叫",
    "interpretation": "可能有人接近",
    "confidence": 0.8,
    "suggested_action": "查看情况",
    "reasoning": "基于过往经验，狗叫通常因为有人接近"
  }
}
```

**作用**：综合所有认知处理的结果，形成对当前情况的完整理解。

**实现参考**：
```typescript
// Computation Substrate - 基于多个理论的记忆巩固
interface IntegrationResult {
  newExperienceNode: ExperienceNode
  hippocampalIndex: HippocampalIndex
  graphUpdates: GraphUpdate[]
}

function integration(
  currentAMR: AMRGraph,
  episodicMemory: string,        // Step 10的输出
  activatedNodes: MemoryNode[],  // Step 8激活的节点
  memoryGraph: MemoryGraph
): IntegrationResult {
  
  // 1. 创建新体验节点（当前的完整认知体验）
  const experienceNode: ExperienceNode = {
    id: generateUniqueId(),
    type: 'experience',
    content: {
      amr: currentAMR,
      narrative: episodicMemory,
      timestamp: Date.now(),
      context: extractContext()
    },
    degree: 0,  // 初始连接数
    activation: 1.0  // 新体验初始激活最高
  }
  
  // 2. 海马体索引机制（Teyler & DiScenna, 1986）
  const hippocampalIndex: HippocampalIndex = {
    id: experienceNode.id,
    // 索引不存储内容，只存储皮层激活模式
    corticalPatterns: {
      conceptNodes: extractConcepts(currentAMR),
      activationPattern: captureActivationState(activatedNodes),
      contextualCues: extractRetrievelCues(currentAMR)
    },
    createdAt: Date.now()
  }
  
  // 3. 优先连接算法（Barabási-Albert模型）
  const connectionTargets = selectConnectionTargets(
    memoryGraph,
    experienceNode,
    {
      // 基础概率：富者愈富（度数越高越容易连接）
      preferentialAttachment: (node) => {
        const totalDegree = memoryGraph.getTotalDegree()
        return node.degree / totalDegree
      },
      
      // 语义相似性增强（相关记忆更容易连接）
      semanticBoost: (node) => {
        const similarity = computeSemanticSimilarity(
          experienceNode.content.amr,
          node.content.amr
        )
        return similarity * 2.0  // 相似性加权
      },
      
      // 时间衰减（近期记忆连接概率更高）
      temporalFactor: (node) => {
        const timeDiff = Date.now() - node.content.timestamp
        return Math.exp(-timeDiff / TEMPORAL_DECAY_CONSTANT)
      },
      
      maxConnections: 7  // 认知容量限制
    }
  )
  
  // 4. Hebbian学习规则建立连接（LTP机制）
  const newEdges = connectionTargets.map(target => {
    // "一起激活的神经元连接在一起"
    const coActivation = experienceNode.activation * target.activation
    
    // LTP: 长时程增强计算突触强度
    const synapticStrength = calculateLTP({
      presynaptic: experienceNode.activation,
      postsynaptic: target.activation,
      timeWindow: 100,  // ms
      baselineStrength: 0.5
    })
    
    return {
      source: experienceNode.id,
      target: target.id,
      weight: synapticStrength,
      type: 'associative'
    }
  })
  
  // 5. 图结构更新（记忆巩固）
  const graphUpdates: GraphUpdate[] = [
    {
      operation: 'addNode',
      node: experienceNode
    },
    ...newEdges.map(edge => ({
      operation: 'addEdge' as const,
      edge: edge
    })),
    {
      operation: 'updateIndex',
      index: hippocampalIndex
    }
  ]
  
  // 6. 更新已连接节点的度数（反映网络增长）
  connectionTargets.forEach(target => {
    target.degree += 1
  })
  experienceNode.degree = connectionTargets.length
  
  return {
    newExperienceNode: experienceNode,
    hippocampalIndex: hippocampalIndex,
    graphUpdates: graphUpdates
  }
}

// LTP计算辅助函数
function calculateLTP(params: {
  presynaptic: number
  postsynaptic: number  
  timeWindow: number
  baselineStrength: number
}): number {
  // 简化的LTP模型
  const coincidence = params.presynaptic * params.postsynaptic
  const potentiation = 1 + coincidence * 0.5
  return Math.min(params.baselineStrength * potentiation, 1.0)
}

// 记忆图就这样不断增长，形成复杂的关联网络
// 高度连接的节点成为"记忆枢纽"（类似概念原型）
// 新体验通过优先连接融入已有知识结构
```