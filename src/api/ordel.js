/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-08-10 21:04:41
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 22:14:31
 */
import { axios } from "@/utils/request";
import Qs from "qs";
/**
 *
 *
 * @export 获取订单列表
 * @param {any} parameter
 * @returns
 */
export function getList(parameter) {
  return axios({
    url: "order/getList",
    method: "get",
    params: parameter
  });
}
/**
 *
 *
 * @export 获取我的合约列表
 * @param {any} parameter
 * @returns
 */
export function getContractList(parameter) {
  return axios({
    url: "order/getContractList",
    method: "get",
    params: parameter
  });
}
/**
 *
 *
 * @export 获取我的合约详情
 * @param {any} parameter
 * @returns
 */
export function getContractDetail(parameter) {
  return axios({
    url: "order/getContractDetail",
    method: "get",
    params: parameter
  });
}
/**
 *
 *
 * @export 解除合约
 * @param {any} parameter
 * @returns
 */
export function liftContract(parameter) {
  return axios({
    url: "order/liftContract",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
