/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-09-24 10:32:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 20:33:21
 */
export function findDict(list, item, key) {
  let result = null;
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === item) {
      result = list[i];
    }
  }
  return result;
}
