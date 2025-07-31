# Cognition 认知架构

## 概述

Cognition 模块实现了从感知到理解的完整认知流程。基于认知心理学和神经科学原理，将认知过程分解为可组合的阶段。

## 认知流程的三个阶段

### 1. 前AMR阶段（信号→结构）

处理原始感知信号，形成结构化表示。

| 阶段 | 基质类型 | 对应神经网络 | 功能描述 |
|------|----------|--------------|----------|
| **Sensation** | Computation | 感觉器官→丘脑 | 接收原始感觉信号 |
| **Attention** | Computation | 丘脑网状核、额顶网络 | 选择性过滤，增强相关信号 |
| **Discrimination** | Generation | 初级感觉皮层 | 检测差异，建立知觉边界 |
| **Perception** | Generation | 高级感觉皮层 | 组织成有意义的知觉模式 |

**输出**：结构化的知觉表示（尚未语义化）

### 2. AMR处理阶段（结构→语义）

将知觉表示转换为AMR（抽象意义表示），并在AMR上进行各种认知操作。

| 阶段 | 基质类型 | 对应神经网络 | 功能描述 |
|------|----------|--------------|----------|
| **Representation** | Generation | 角回、语言区 | 将知觉转换为AMR表示 |
| **Categorization** | Generation | 颞下皮层、前额叶 | AMR节点分类（person→人类） |
| **Abstraction** | Generation | 前额叶、顶叶 | 提取AMR的抽象模式 |
| **Activation** | Computation | 全脑网络 | 基于AMR激活相关概念/记忆 |
| **Association** | Computation | 联合皮层 | AMR节点间建立联系 |

**核心**：所有操作都在AMR图结构上进行

### 3. 后AMR阶段（语义→理解）

基于语义化的AMR，形成完整的理解和记忆。

| 阶段 | 基质类型 | 对应神经网络 | 功能描述 |
|------|----------|--------------|----------|
| **Recollection** | Generation | 海马体、内侧颞叶 | 基于AMR检索情景记忆 |
| **Integration** | Computation | 海马体、前额叶 | 整合所有信息形成理解 |

## 基质（Substrate）说明

- **Computation**：确定性、快速、自动的处理
  - 特点：并行、无需意识参与
  - 例如：注意力过滤、激活扩散
  
- **Generation**：创造性、语义性、需要"理解"的处理
  - 特点：串行、需要语义知识
  - 例如：知觉组织、概念分类

## AMR的核心作用

**Representation** 是整个认知流程的分水岭：
- **之前**：处理感知信号，形成结构
- **之后**：处理语义内容，操作AMR

在AMR层面的三种核心操作：
1. **Activation**：AMR触发相关记忆网络的激活
2. **Association**：在AMR节点间建立新的关系
3. **Inference**（计划中）：基于AMR推导新的节点和关系

## 使用示例

```typescript
// 构建认知管道
const pipeline = compose(
  // 前AMR：感知处理
  sensation,
  attention,
  discrimination,
  perception,
  
  // AMR处理：语义理解
  representation,  // 转折点：生成AMR
  categorization,  // 分类AMR节点
  abstraction,     // 抽象AMR模式
  activation,      // 激活相关网络
  association,     // 建立联系
  
  // 后AMR：整合理解
  recollection,
  integration
)

// 处理输入
const understanding = await pipeline(stimulus)
```

## 下一步计划

1. 实现 **Inference** 阶段 - 基于AMR的推理机制
2. 完善各阶段的具体实现
3. 添加认知现象测试（如系列位置效应）
4. 优化AMR的表示和操作

## 理论依据

- 认知心理学：信息加工理论、双处理理论
- 神经科学：皮层-海马体交互、丘脑-皮层回路
- 计算理论：图处理、扩散激活、符号推理