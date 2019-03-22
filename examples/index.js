

function add(a, b) {
  for (var i = 0; i < 10000000; i++) {}
  return a + b
}
var addCache = cache.pureFuncMemoryCache(add)

function testPureFuncMemoryCache() {
  document.getElementById('pureFmRst01').innerText = ''
  document.getElementById('pureFmTime01').innerText = ''
  document.getElementById('pureFmRst02').innerText = ''
  document.getElementById('pureFmTime02').innerText = ''

  var beginTime = 0
  var endTime = 0

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

function request(data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(data)
    }, 2 * 1000)
  })
}
var requestCache = cache.promiseMemoryCache(request)

function testPromiseMemoryCache() {
  document.getElementById('promiseFmRst01').innerText = ''
  document.getElementById('promiseFmTime01').innerText = ''
  document.getElementById('promiseFmRst02').innerText = ''
  document.getElementById('promiseFmTime02').innerText = ''

  var beginTime = 0
  var endTime = 0

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

function requestSS(data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(data)
    }, 2 * 1000)
  })
}
var requestSSCache = cache.promiseSessionStorageCache(requestSS, 'requestSS')

function testPromiseSessionStorageCache() {
  document.getElementById('promiseFsRst01').innerText = ''
  document.getElementById('promiseFsTime01').innerText = ''
  document.getElementById('promiseFsRst02').innerText = ''
  document.getElementById('promiseFsTime02').innerText = ''

  var beginTime = 0
  var endTime = 0

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

function clearPureFmFunction () {
  addCache.clearCache()
}

function reRunPureFmFunction () {
  testPureFuncMemoryCache()
}

function clearPromiseFmFunction () {
  requestCache.clearCache()
}

function reRunPromiseFmFunction () {
  testPromiseMemoryCache()
}

function clearPromiseFsFunction () {
  requestSSCache.clearCache()
}

function reRunPromiseFsFunction () {
  testPromiseSessionStorageCache()
}

testPureFuncMemoryCache()
testPromiseMemoryCache()
testPromiseSessionStorageCache()
