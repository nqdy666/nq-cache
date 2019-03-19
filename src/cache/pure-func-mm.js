// @flow
import store from './store'
import { argToKey } from '../utils/assist'

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
