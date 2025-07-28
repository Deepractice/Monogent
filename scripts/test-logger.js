#!/usr/bin/env node

import { log, getLogger } from '@monogent/logger'

// 测试全局log
console.log('=== 测试全局log ===')
log.info('这是一条info日志')
log.debug('这是一条debug日志')
log.warn('这是一条警告')
log.error('这是一条错误', new Error('测试错误'))

// 测试命名logger
console.log('\n=== 测试命名logger ===')
const hippocampusLog = getLogger('hippocampus')
hippocampusLog.info('海马体启动', { version: '0.0.1' })

// 测试子logger
console.log('\n=== 测试子logger ===')
const childLog = hippocampusLog.child({ memoryId: 'mem_123', operation: 'encode' })
childLog.debug('开始编码记忆')
childLog.info('记忆编码完成', { duration: 150 })

// 测试错误处理
console.log('\n=== 测试错误处理 ===')
try {
  throw new Error('内存不足')
} catch (error) {
  log.error('记忆编码失败', error)
}

console.log('\n✅ 日志系统测试完成！')