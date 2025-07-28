/**
 * @monogent/logger - 高性能日志系统
 * 
 * 提供类似 Java Lombok @Slf4j 的便捷日志功能
 */

import { pino } from 'pino'
import type { Logger as PinoLogger } from 'pino'

// 全局logger实例缓存
const loggerCache = new Map<string, Logger>()

// 日志级别
export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'

// 日志上下文
export interface LogContext {
  [key: string]: any
}

/**
 * Logger封装类
 */
export class Logger {
  private pino: PinoLogger
  private context: LogContext = {}

  constructor(name: string, context?: LogContext) {
    const isDev = process.env.NODE_ENV === 'development'
    
    this.pino = pino({
      name,
      level: process.env.LOG_LEVEL || (isDev ? 'debug' : 'info'),
      // 开发环境使用漂亮输出
      ...(isDev && {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname'
          }
        }
      })
    })
    
    if (context) {
      this.context = context
    }
  }

  // 创建子logger
  child(context: LogContext): Logger {
    const childLogger = Object.create(this)
    childLogger.pino = this.pino.child(context)
    childLogger.context = { ...this.context, ...context }
    return childLogger
  }

  // 便捷方法
  trace(msg: string, ...args: any[]): void {
    this.pino.trace({ ...this.context }, msg, ...args)
  }

  debug(msg: string, ...args: any[]): void {
    this.pino.debug({ ...this.context }, msg, ...args)
  }

  info(msg: string, ...args: any[]): void {
    this.pino.info({ ...this.context }, msg, ...args)
  }

  warn(msg: string, ...args: any[]): void {
    this.pino.warn({ ...this.context }, msg, ...args)
  }

  error(msg: string, error?: Error | unknown, ...args: any[]): void {
    if (error instanceof Error) {
      this.pino.error({ ...this.context, err: error }, msg, ...args)
    } else if (error) {
      this.pino.error({ ...this.context, error }, msg, ...args)
    } else {
      this.pino.error({ ...this.context }, msg, ...args)
    }
  }

  fatal(msg: string, error?: Error | unknown, ...args: any[]): void {
    if (error instanceof Error) {
      this.pino.fatal({ ...this.context, err: error }, msg, ...args)
    } else if (error) {
      this.pino.fatal({ ...this.context, error }, msg, ...args)
    } else {
      this.pino.fatal({ ...this.context }, msg, ...args)
    }
  }
}

/**
 * 获取或创建logger（单例模式）
 */
export function getLogger(name: string, context?: LogContext): Logger {
  const cacheKey = context ? `${name}:${JSON.stringify(context)}` : name
  
  if (!loggerCache.has(cacheKey)) {
    loggerCache.set(cacheKey, new Logger(name, context))
  }
  
  return loggerCache.get(cacheKey)!
}

/**
 * 装饰器：自动注入logger到类的私有属性
 * 类似 Lombok 的 @Slf4j
 */
export function Log(loggerName?: string) {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    // 直接在原型上添加属性，避免TypeScript的类型问题
    Object.defineProperty(constructor.prototype, 'log', {
      get() {
        if (!this._loggerInstance) {
          this._loggerInstance = getLogger(
            loggerName || constructor.name.toLowerCase()
          )
        }
        return this._loggerInstance
      },
      enumerable: false,
      configurable: true
    })
    
    return constructor
  }
}

/**
 * 方法装饰器：自动记录方法调用
 */
export function LogMethod(level: LogLevel = 'debug') {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
      const logger = (this as any).log || getLogger(target.constructor.name)
      const startTime = Date.now()
      
      logger[level](`Calling ${propertyKey}`, { args })
      
      try {
        const result = await originalMethod.apply(this, args)
        const duration = Date.now() - startTime
        
        logger[level](`Completed ${propertyKey}`, { duration, result })
        
        return result
      } catch (error) {
        const duration = Date.now() - startTime
        
        logger.error(`Failed ${propertyKey}`, error as Error, { duration })
        throw error
      }
    }

    return descriptor
  }
}

/**
 * 静态logger获取方法（最简单的使用方式）
 * 
 * 使用示例：
 * import { log } from '@monogent/logger'
 * 
 * log.info('Hello world')
 * log.error('Something went wrong', error)
 */
export const log = getLogger('app')

// 导出pino的类型
export type { Logger as PinoLogger } from 'pino'

// 便捷的导出
export default getLogger