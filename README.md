NQ-CACHE
=

## 安装

```bash
npm install nq-cache
```

## 使用

- `ES Module`

```javascript
import { promiseMemoryCache, promiseSessionStorageCache, pureFuncMemoryCache } from 'nq-cache'
```

- `commonjs`

```javascript
const { promiseMemoryCache, promiseSessionStorageCache, pureFuncMemoryCache } = require('nq-cache')
```

- `UMD`(未压缩且保留注释，需自行引入 `uglify` 处理)

```javascript
const { promiseMemoryCache, promiseSessionStorageCache, pureFuncMemoryCache } = require('nq-cache/dist/nq-cache')
```

- `iife`

```html
<script type="text/javascript" href="nq-cache/dist/nq-cache.min.js"></script>
<script>
  var cache = window.cache
</script>
```

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
