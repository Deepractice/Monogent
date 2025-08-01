# Experiential Encoding 示例

## 基本用法

```typescript
import { experientialEncoding } from '../processes/ExperientialEncoding.js'

// 1. 编码字符串
const text = "一只棕色的狗在叫"
const textExperience = experientialEncoding.evolve(text)
// 结果：
// {
//   value: "一只棕色的狗在叫",
//   source: "encoded",
//   context: { timestamp: 1698765432100 }
// }

// 2. 编码对象
const imageData = { 
  type: 'image', 
  data: 'base64...' 
}
const imageExperience = experientialEncoding.evolve(imageData)
// 结果：
// {
//   value: { type: 'image', data: 'base64...' },
//   source: "encoded",
//   context: { timestamp: 1698765432200 }
// }

// 3. 已经是Experience的情况（直接返回）
const existing = {
  value: "已有体验",
  source: "memory",
  context: { strength: 0.8 }
}
const sameExperience = experientialEncoding.evolve(existing)
// 结果：返回原对象，不会重新编码
```

## 在认知系统中的位置

```typescript
// 系统入口函数
function perceive(stimulus: any): Promise<Experience> {
  // Step 1: 编码为Experience
  const experience = experientialEncoding.evolve(stimulus)
  
  // Step 2: 进入认知路径
  return cognition.understand().evolve(experience)
}

// 使用
await perceive("一只狗在叫")
await perceive({ type: 'image', url: '...' })
await perceive(123)  // 任何类型都可以
```

## 关键点

1. **简单直接**：any → Experience，没有复杂逻辑
2. **幂等性**：如果输入已经是Experience，直接返回
3. **最小化元数据**：只添加必要的source和timestamp
4. **类型安全**：通过泛型保持类型信息