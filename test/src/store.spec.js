import { clearCache, pureFuncMemoryCache } from '../../src/index'

describe('promise memory cache', () => {
  test('clear all cache', () => {
    const cacheFun = pureFuncMemoryCache(function () {
      return 'hello world'
    })
    cacheFun()
    clearCache()
  })
})
