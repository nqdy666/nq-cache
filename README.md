NQ-CACHE

[![build status](https://api.travis-ci.org/nqdy666/nq-cache.svg?branch=master)](https://travis-ci.org/nqdy666/nq-cache)
[![codecov](https://codecov.io/gh/nqdy666/nq-cache/branch/master/graph/badge.svg)](https://codecov.io/gh/nqdy666/nq-cache)
[![node version](https://img.shields.io/badge/node.js-%3E=_8.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![David deps](https://img.shields.io/david/nqdy666/nq-cache.svg?style=flat-square)](https://david-dm.org/nqdy666/nq-cache)
[![license](https://img.shields.io/npm/l/nq-cache.svg)](https://www.npmjs.com/package/nq-cache)

[![Build Status](https://saucelabs.com/browser-matrix/nqdy666.svg)](https://saucelabs.com/beta/builds/1997be72b34e41228522a3a3e065d993)

## 特性
- IE8+
- 支持Typescript
- 支持纯函数缓存
- 支持返回值Promise的函数缓存
- 支持缓存到sessionStorage

## 文档
- [Example on JSBin](https://jsbin.com/quwakos/edit?html,css,js,output)

## 安装

安装npm包

```bash
npm install nq-cache
```

使用 `pureFuncMemoryCache`

add.js
```javascript
import { pureFuncMemoryCache } from 'nq-cache'

export function add (a, b) {
  return a + b
}

export const addCache = pureFuncMemoryCache(add)
```

app.js
```javascript
import { addCache as add } from './add'
add(1, 2) // 执行，并把结果缓存
add(1, 2) // 直接从缓存中获取结果
```

使用 `promiseMemoryCache`

request.js
```javascript
import { promiseMemoryCache } from 'nq-cache'

export function request (data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 2 * 1000)
  })
}

export const requestCache = promiseMemoryCache(request)
```

app.js
```javascript
import { requestCache as request } from './request'
// 执行，并把结果缓存
request({ name: 'bowl' }).then(res => {
  // 直接从缓存中获取结果
  return request({ name: 'bowl' }) 
})
```

使用 `promiseSessionStorageCache`

request.js
```javascript
import { promiseSessionStorageCache } from 'nq-cache'

export function request (data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 2 * 1000)
  })
}

export const requestCache = promiseSessionStorageCache(request, 'request')
```

app.js
```javascript
import { requestCache as request } from './request'
// 执行，并把结果缓存
request({ name: 'bowl' }).then(res => {
  // 直接从缓存中获取结果
  return request({ name: 'bowl' }) 
})
```

#### CDN

仅包含 `nq-cache`

```html
<!-- 使用最新版本 -->
<script src="https://unpkg.com/nq-cache@latest"></script>
<!-- 或指定某一个版本 -->
<script src="https://unpkg.com/nq-cache@0.0.2"></script>
<script>
  function add (a, b) {
    return a + b
  }
  addCache = cache.pureFuncMemoryCache(add)
  addCache(1, 2) // 执行，并把结果缓存
  addCache(1, 2) // 直接从缓存中获取结果
</script>
```

更多的例子

## 本地开发

- 安装依赖

```bash
npm install
```

- 测试

```bash
npm test
```

- 打包

```bash
npm run build
```

- `Flow`

```bash
npm run flow
```

- `ESLint`

```bash
npm run lint
```

- 更新文档

```bash
npm run doc
```
