import { promiseSessionStorageCache, argToKey } from '../../src/index'

describe('promise session storage cache', () => {
  test('cache', done => {
    function same (str) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(str)
        }, 100)
      })
    }
    const promiseCached = promiseSessionStorageCache(same, 'same')
    promiseCached('hello world').then(res => {
      expect(res).toBe('hello world')
      return promiseCached('hello world')
    }).then(res => {
      expect(res).toBe('hello world')
      done()
    })
  })

  test('cache with jest mock', done => {
    const callbackMock = jest.fn()
    function same (str) {
      return new Promise(resolve => {
        setTimeout(() => {
          callbackMock()
          resolve(str)
        }, 100)
      })
    }
    const promiseCached = promiseSessionStorageCache(same, 'same2')
    promiseCached('hello world').then(res => {
      expect(res).toBe('hello world')
      expect(callbackMock.mock.calls.length).toBe(1)
      return promiseCached('hello world')
    }).then(res => {
      expect(callbackMock.mock.calls.length).toBe(1)
      expect(res).toBe('hello world')
      done()
    })
  })

  test('clear with key', done => {
    const callbackMock = jest.fn()
    function same (str) {
      return new Promise(resolve => {
        setTimeout(() => {
          callbackMock()
          resolve(str)
        }, 100)
      })
    }
    const promiseCached = promiseSessionStorageCache(same, 'same3')
    promiseCached('hello world').then(res => {
      expect(res).toBe('hello world')
      expect(callbackMock.mock.calls.length).toBe(1)
      promiseCached.clearCache(argToKey('hello world'))
      return promiseCached('hello world')
    }).then(res => {
      expect(callbackMock.mock.calls.length).toBe(2)
      expect(res).toBe('hello world')
      done()
    })
  })

  test('clear', done => {
    const callbackMock = jest.fn()
    function same (str) {
      return new Promise(resolve => {
        setTimeout(() => {
          callbackMock()
          resolve(str)
        }, 100)
      })
    }
    const promiseCached = promiseSessionStorageCache(same, 'same4')
    promiseCached('hello world').then(res => {
      expect(res).toBe('hello world')
      expect(callbackMock.mock.calls.length).toBe(1)
      promiseCached.clearCache()
      return promiseCached('hello world')
    }).then(res => {
      expect(callbackMock.mock.calls.length).toBe(2)
      expect(res).toBe('hello world')
      done()
    })
  })
})
