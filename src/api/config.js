/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-08-10 16:49:11
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 17:19:17
 */
import { axios } from "@/utils/request";
import Qs from "qs";
/**
 *
 *
 * @export 获取网站配置及幻灯片
 * @param {any} parameter
 * @returns
 */
export function getSite(parameter) {
  return axios({
    url: "config/getSite",
    method: "get",
    data: Qs.stringify(parameter)
  });
}
