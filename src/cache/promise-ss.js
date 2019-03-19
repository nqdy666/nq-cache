// @flow
import store from './store'
import { SessionStorage } from '../utils/storage'
import { argToKey } from '../utils/assist'

/**
 * 异步的结果缓存在session storage中，下次调用直接使用缓存数据
 * @param {Function} fn - 返回值是Promise的函数
 * @param {Function} storageKey - 缓存在session storage中的key前缀
 * @returns {Function} 和原函数的调用方式是一样的，第一次调用数据缓存后，之后的调用不会调用原函数，而是会直接使用缓存后的数据，另外该函数还带有一个静态的clearCache方法，可以用来清空缓存数据
 * @property {Function} clearCache 清空缓存数据
 */
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
