// @flow
import store from './store'
import { argToKey } from '../utils/assist'

export default function promiseCache<F: Function> (fn: F): F {
  let cache = {}
  const cachedFn = (function cachedFn (...arg: Array<any>) {
    let key = argToKey(...arg)
    return cache.hasOwnProperty(key)
      ? Promise.resolve(cache[key])
      : fn(...arg).then(res => {
        cache[key] = res
        return Promise.resolve(res)
      })
  }: any)
  cachedFn.clearCache = function (key?: string): void {
    if (key) {
      delete cache[key]
    } else {
      cache = {}
    }
  }
  cachedFn.funType = 'promise'
  cachedFn.cacheType = 'memory'
  cachedFn.originFunName = fn.name
  store.push(cachedFn)
  return cachedFn
}
