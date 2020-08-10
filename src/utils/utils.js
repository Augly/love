/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-09-24 10:32:21
 * @LastEditors: zero
 * @LastEditTime: 2019-09-24 10:41:53
 */
export function findDict(list, item) {
  let result = null;
  for (let i = 0; i < list.length; i++) {
    if (list[i].value === item) {
      result = list[i].detailName;
    }
  }
  return result;
}
