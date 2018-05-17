// @flow
import store from './store'
import { argToKey } from '../utils/assist'

/**
 * 纯函数执行的结果缓存在内存中，下次调用直接使用缓存数据
 * @param {Function} fn - 返回值是Promise的函数
 * @returns {Function} 和原函数的调用方式是一样的，第一次调用数据缓存后，之后的调用不会调用原函数，而是会直接使用缓存后的数据，另外该函数还带有一个静态的clearCache方法，可以用来清空缓存数据
 * @property {Function} clearCache 清空缓存数据
 */
export default function pureFuncCache<F: Function> (fn: F): F {
  let cache = {}
  const cachedFn = (function cachedFn (...arg: Array<any>) {
    const cacheKey = argToKey(...arg)
    return cache.hasOwnProperty(cacheKey) ? cache[cacheKey] : (cache[cacheKey] = fn(...arg))
  }: any)

  cachedFn.clearCache = function (key?: string): void {
    if (key) {
      delete cache[key]
    } else {
      cache = {}
    }
  }

  cachedFn.funType = 'pureFunc'
  cachedFn.cacheType = 'memory'
  cachedFn.originFunName = fn.name
  store.push(cachedFn)

  return cachedFn
}
