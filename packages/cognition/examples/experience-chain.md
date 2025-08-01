# Experience链表结构示例

## 基本概念

每个认知过程产生一个新的Experience节点，通过`previous`指针形成链表，记录完整的认知历程。

## 具体示例

```typescript
// 初始输入
const initial: Experience<string> = {
  value: "一只棕色的狗在叫",
  source: "external"
}

// 经过认知路径处理后
const final = await cognition.understand().evolve(initial)

// final现在包含完整的认知链
// 可以回溯整个过程
```

## 遍历认知链

```typescript
// 工具函数：遍历认知历史
function* traverseExperienceChain<T>(exp: Experience<T>) {
  let current: Experience<any> | undefined = exp
  
  while (current) {
    yield current
    current = current.previous
  }
}

// 使用示例
for (const exp of traverseExperienceChain(final)) {
  console.log(`[${exp.source}]: ${JSON.stringify(exp.value)}`)
}

// 输出（从最后到最初）：
// [consolidation]: { understanding: "...", integrated_knowledge: "..." }
// [recollection]: { memories: [...] }  
// [familiarity]: { score: 0.75, activated_concepts: [...] }
// [comprehension]: { amr: {...} }
// [perception]: { features: {...}, patterns: {...} }
// [sensation]: "一只棕色的狗在叫"
// [external]: "一只棕色的狗在叫"
```

## 提取特定阶段

```typescript
// 工具函数：查找特定阶段的Experience
function findExperienceBySource<T = any>(
  exp: Experience<any>, 
  source: string
): Experience<T> | undefined {
  for (const e of traverseExperienceChain(exp)) {
    if (e.source === source) {
      return e as Experience<T>
    }
  }
  return undefined
}

// 使用示例
const perceptionExp = findExperienceBySource(final, 'perception')
if (perceptionExp) {
  console.log('知觉阶段识别的特征:', perceptionExp.value)
}
```

## 认知路径长度

```typescript
// 计算认知深度
function getCognitiveDepth(exp: Experience<any>): number {
  let depth = 0
  let current = exp
  
  while (current.previous) {
    depth++
    current = current.previous
  }
  
  return depth
}

const depth = getCognitiveDepth(final)
console.log(`认知经过了 ${depth} 个处理阶段`)
```

## 优势

1. **完整历史**：保留每个认知阶段的快照
2. **易于调试**：可以精确追踪问题发生在哪个阶段
3. **符合认知原理**：认知确实是sequential和cumulative的
4. **类型灵活**：每个阶段可以有不同的value类型
5. **内存效率**：只需要一个指针，不需要复制所有历史

## 注意事项

- 链表是不可变的（readonly），保证历史不被篡改
- 在长时间运行的系统中，可能需要考虑链表长度限制
- 可以选择性地保存关键节点，而不是所有中间步骤