import { pureFuncMemoryCache, argToKey } from '../../src/index'

function func () {
  return 'hello world'
}

function same(str) {
  return str
}

function add (a, b) {
  return a + b
}

describe('pure func memory cache', () => {
  test('no params', () => {
    const funcCached = pureFuncMemoryCache(func)
    const res = funcCached()
    expect(res).toBe(func())
  })

  test('simple params', () => {
    const funcCached = pureFuncMemoryCache(same)
    const res = funcCached('hello world')
    expect(res).toBe(same('hello world'))
  })

  test('multi params', () => {
    const funcCached = pureFuncMemoryCache(add)
    const res = funcCached(1, 2)
    expect(res).toBe(add(1, 2))
  })

  test('cache', () => {
    const funcCached = pureFuncMemoryCache(add)
    expect(funcCached(1, 2)).toBe(add(1, 2))
    expect(funcCached(1, 2)).toBe(add(1, 2))
  })

  test('cache with jest mock', () => {
    const originMock = jest.fn()
    const funcCached = pureFuncMemoryCache(originMock)
    funcCached()
    funcCached()
    expect(originMock.mock.calls.length).toBe(1)
  })

  test('clear with key', () => {
    const funcCached = pureFuncMemoryCache(add)
    expect(funcCached(1, 2)).toBe(add(1, 2))
    funcCached.clearCache(argToKey(1, 2))
    expect(funcCached(1, 2)).toBe(add(1, 2))
  })

  test('clear', () => {
    const funcCached = pureFuncMemoryCache(add)
    expect(funcCached(1, 2)).toBe(add(1, 2))
    funcCached.clearCache()
    expect(funcCached(1, 2)).toBe(add(1, 2))
  })
})
