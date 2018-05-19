var add = cache.pureFuncMemoryCache(function (a, b) {
  return a + b
})

var res = add(1, 2)
document.getElementById('first').innerText = res

res = add(1, 2)
document.getElementById('second').innerText = res

// clear cache with key
add.clearCache(cache.argToKey(1, 2))

// clear all cache
add.clearCache()
