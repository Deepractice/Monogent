/**
 * Composer - Composition strategies for cognitive architecture
 * 
 * Design Philosophy:
 * Composers only define HOW to compose, not WHAT flows through
 * 
 * Theoretical Foundation:
 * - Functional Composition (Category Theory)
 * - Pipeline Pattern (Software Architecture)
 * - Cognitive Modularity (Fodor, 1983)
 */

/**
 * Basic composition of functions
 * f ∘ g ∘ h = f(g(h(x)))
 */
export function compose(...fns: Function[]): Function {
  return (input: any) => {
    return fns.reduce((acc, fn) => fn(acc), input)
  }
}

/**
 * Async composition of functions
 * Handles both sync and async functions
 */
export function composeAsync(...fns: Function[]): Function {
  return async (input: any) => {
    let result = input
    for (const fn of fns) {
      result = await fn(result)
    }
    return result
  }
}

/**
 * Pipeline composition (left-to-right)
 * More intuitive reading order
 */
export function pipe(...fns: Function[]): Function {
  return compose(...fns)
}

/**
 * Async pipeline composition
 */
export function pipeAsync(...fns: Function[]): Function {
  return composeAsync(...fns)
}