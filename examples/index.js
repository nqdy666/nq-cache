function testPureFuncMemoryCache() {
  var beginTime = 0
  var endTime = 0

  function add(a, b) {
    return a + b
  }
  var addCache = cache.pureFuncMemoryCache(add)

  beginTime = new Date().getTime()
  var addResult = addCache(1, 2) // run
  endTime = new Date().getTime()
  document.getElementById('pureFmRst01').innerText = addResult
  document.getElementById('pureFmTime01').innerText = endTime - beginTime

  beginTime = new Date().getTime()
  var addResultCache = addCache(1, 2) // run
  endTime = new Date().getTime()
  document.getElementById('pureFmRst02').innerText = addResultCache
  document.getElementById('pureFmTime02').innerText = endTime - beginTime
}

function testPromiseMemoryCache() {
  var beginTime = 0
  var endTime = 0

  function request(data) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(data)
      }, 2 * 1000)
    })
  }
  var requestCache = cache.promiseMemoryCache(request)

  beginTime = new Date().getTime()
  requestCache('hello').then(function (res) {
    endTime = new Date().getTime()
    document.getElementById('promiseFmRst01').innerText = res
    document.getElementById('promiseFmTime01').innerText = endTime - beginTime

    beginTime = new Date().getTime()
    // 直接从缓存中获取结果
    return requestCache('hello') // run
  }).then(function (res) {
    endTime = new Date().getTime()
    document.getElementById('promiseFmRst02').innerText = res
    document.getElementById('promiseFmTime02').innerText = endTime - beginTime
  })
}

function testPromiseSessionStorageCache() {
  var beginTime = 0
  var endTime = 0

  function request(data) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(data)
      }, 2 * 1000)
    })
  }
  var requestSSCache = cache.promiseSessionStorageCache(request, 'request')

  beginTime = new Date().getTime()
  requestSSCache('hello').then(function (res) {
    endTime = new Date().getTime()
    document.getElementById('promiseFsRst01').innerText = res
    document.getElementById('promiseFsTime01').innerText = endTime - beginTime

    beginTime = new Date().getTime()
    // 直接从缓存中获取结果
    return requestSSCache('hello') // run
  }).then(function (res) {
    endTime = new Date().getTime()
    document.getElementById('promiseFsRst02').innerText = res
    document.getElementById('promiseFsTime02').innerText = endTime - beginTime
  })
}

testPureFuncMemoryCache()
testPromiseMemoryCache()
testPromiseSessionStorageCache()
