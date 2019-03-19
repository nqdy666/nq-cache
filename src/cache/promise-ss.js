// @flow
import store from './store'
import { SessionStorage } from '../utils/storage'
import { argToKey } from '../utils/assist'

export default function promiseSessionStorageCache<F: Function> (fn: F, storageKey: string): F {
  let cache = SessionStorage.get(storageKey) || {}
  const cachedFn = (function cachedFn (...arg: Array<any>) {
    let key = argToKey(...arg)
    return cache.hasOwnProperty(key)
      ? Promise.resolve(cache[key])
      : fn(...arg).then(res => {
        cache[key] = res
        SessionStorage.set(storageKey, cache)
        return Promise.resolve(res)
      })
  }: any)
  cachedFn.clearCache = function (key?: string): void {
    if (key) {
      delete cache[key]
      SessionStorage.set(storageKey, cache)
    } else {
      cache = {}
      SessionStorage.remove(storageKey)
    }
  }
  cachedFn.funType = 'promise'
  cachedFn.cacheType = 'sessionStorage'
  cachedFn.cacheKey = storageKey
  cachedFn.originFunName = fn.name
  store.push(cachedFn)
  return cachedFn
}
