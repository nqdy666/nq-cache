// @flow
/**
 * 把参数转换为key
 * @param {...} arg - 可以有多个参数
 * @returns {string} 用作缓存数据的key
 */
export function argToKey (...arg: Array<any>): string {
  return JSON.stringify(arg)
}
