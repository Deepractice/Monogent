/**
 * 最简单的使用方式（不用装饰器）
 */

import { getLogger, log } from '@monogent/logger'

export interface MemoryTrace {
  id: string
  content: unknown
  timestamp: Date
  strength: number
  type: 'episodic' | 'semantic' | 'procedural'
  associations: string[]
}

/**
 * 方式1：使用全局 log（最简单）
 */
export class SimpleHippocampus {
  private shortTermMemory = new Map<string, MemoryTrace>()

  encode(content: unknown): void {
    // 直接使用导入的 log
    log.info('编码新记忆')
    log.debug('记忆内容', { content })
    
    // 处理逻辑...
  }
}

/**
 * 方式2：为类创建专属 logger
 */
export class Hippocampus {
  // 只需要一行代码！
  private readonly log = getLogger('hippocampus')
  
  private shortTermMemory: Map<string, MemoryTrace>
  private longTermMemory: Map<string, MemoryTrace>

  constructor() {
    this.shortTermMemory = new Map()
    this.longTermMemory = new Map()
    this.log.info('海马体初始化完成')
  }

  encode(content: unknown, type: MemoryTrace['type']): MemoryTrace {
    // 创建带上下文的子logger
    const log = this.log.child({ 
      method: 'encode',
      type 
    })
    
    log.debug('开始编码记忆')
    
    const trace: MemoryTrace = {
      id: this.generateId(),
      content,
      timestamp: new Date(),
      strength: 1.0,
      type,
      associations: []
    }

    this.shortTermMemory.set(trace.id, trace)
    
    log.info('记忆编码完成', { memoryId: trace.id })
    
    return trace
  }

  consolidate(): number {
    const log = this.log.child({ 
      method: 'consolidate',
      timestamp: Date.now()
    })
    
    let count = 0
    
    log.debug('开始记忆巩固', { 
      shortTermCount: this.shortTermMemory.size 
    })
    
    try {
      for (const [id, trace] of this.shortTermMemory) {
        if (trace.strength >= 0.5) {
          this.longTermMemory.set(id, trace)
          this.shortTermMemory.delete(id)
          count++
        }
      }
      
      log.info('记忆巩固成功', { 
        consolidatedCount: count,
        totalLongTerm: this.longTermMemory.size
      })
    } catch (error) {
      log.error('记忆巩固失败', error as Error)
      throw error
    }
    
    return count
  }

  private generateId(): string {
    return `mem_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * 方式3：在函数中使用
 */
export function processMemory(data: unknown): void {
  // 函数级别的logger
  const log = getLogger('memory-processor')
  
  log.info('开始处理记忆数据')
  
  try {
    // 处理逻辑
    log.debug('处理细节', { data })
    
    log.info('记忆处理完成')
  } catch (error) {
    log.error('记忆处理失败', error as Error)
    throw error
  }
}