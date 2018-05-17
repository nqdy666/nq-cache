// @flow
/**
 * 缓存函数数组
 * @type {Array}
 */
const cacheFunList = []

/**
 * 把缓存函数加入到数组中
 * @param {Function} func - 函数
 */
export function push (func: Function): void {
  cacheFunList.push(func)
}

/**
 * 清空在数组中函数的缓存数据
 */
export function clearCache (): void {
  cacheFunList.forEach(func => {
    func.clearCache()
  })
}

export default {
  push,
  clearCache
}
