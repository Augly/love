/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-08-10 16:49:11
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 21:48:24
 */
import { axios } from "@/utils/request";
// import Qs from "qs";
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
    params: parameter
  });
}
/**
 *
 *
 * @export 获取文章列表
 * @param {any} parameter
 * @returns
 */
export function getList(parameter) {
  return axios({
    url: "article/getList",
    method: "get",
    params: parameter
  });
}
/**
 *
 *
 * @export 获取可用套餐
 * @param {any} parameter
 * @returns
 */
export function patternGetList(parameter) {
  return axios({
    url: "pattern/getList",
    method: "get",
    params: parameter
  });
}
/**
 *
 *
 * @export 获取单页信息
 * @param {any} parameter
 * @returns
 */
export function getDetail(parameter) {
  return axios({
    url: "page/getDetail",
    method: "get",
    params: parameter
  });
}
