declare module 'nq-cache' {
  export function pureFuncMemoryCache(func: Function): any
  export function promiseMemoryCache(func: Function): any
  export function promiseSessionStorageCache(func: Function, key: string | void): any
  export function clearCache(key: string | void): void
  export function argToKey(...args:any[]): string
}
