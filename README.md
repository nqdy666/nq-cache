NQ-CACHE

> function cache

[![build status](https://api.travis-ci.org/nqdy666/nq-cache.svg?branch=master)](https://travis-ci.org/nqdy666/nq-cache)
[![codecov](https://codecov.io/gh/nqdy666/nq-cache/branch/master/graph/badge.svg)](https://codecov.io/gh/nqdy666/nq-cache)
[![node version](https://img.shields.io/badge/node.js-%3E=_8.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![David deps](https://img.shields.io/david/nqdy666/nq-cache.svg?style=flat-square)](https://david-dm.org/nqdy666/nq-cache)
[![license](https://img.shields.io/npm/l/nq-cache.svg)](https://www.npmjs.com/package/nq-cache)

## Features
- IE8+
- Support for Typescript

## Document
- [Example on JSBin] (https://jsbin.com/baluray/edit?html,js,output)

## Installation

Install npm package

```bash
npm install nq-cache
```

Use `pureFuncMemoryCache`

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
add(1, 2) // execute and cache the result
add(1, 2) // Get results directly from the cache
```

use `promiseMemoryCache`

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
// execute and cache the result
request({ name: 'bowl' }).then(res => {
  // get results directly from the cache
  return request({ name: 'bowl' })
})
```

use `promiseSessionStorageCache`

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
// execute and cache the result
request({ name: 'bowl' }).then(res => {
  // Get results directly from the cache
  return request({ name: 'bowl' })
})
```

#### CDN

Contains only `nq-cache`

```html
<!-- Use the latest version -->
<script src="https://unpkg.com/nq-cache@latest"></script>
<!-- or specify a version -->
<script src="https://unpkg.com/nq-cache@0.0.2"></script>
<script>
  function add (a, b) {
    return a + b
  }
  addCache = cache.pureFuncMemoryCache(add)
  addCache(1, 2) // Execute and cache the result
  addCache(1, 2) // Get the result directly from the cache
</script>
```
For more other methods, you can view [example] (https://jsbin.com/baluray/edit?html,js,output)


if the browser does not support Promise or JSON, you should do a polyfill
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
<!--[if lt IE 8]>
  <script type="text/javascript" src="https://cdn.bootcss.com/json2/20160511/json2.min.js"></script>
<![endif]-->
```

## Local development

- Installation dependencies

```bash
npm install
```

- Testing

```bash
npm test
```

- Build

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

- Update documentation

```bash
npm run doc
```

- Run the test page

```bash
npm run build
npm run example

Then open it with a browser
Http://localhost:5000/examples/
```

- Release

```bash
npm version [new version]
npm run build
npm publish
```
