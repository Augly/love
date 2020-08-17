/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-08-15 14:09:13
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-17 23:47:24
 */
import { axios } from "@/utils/request";
import Qs from "qs";
/**
 *
 *
 * @export 登陆用户
 * @param {any} parameter
 * @returns
 */
export function login(parameter) {
  return axios({
    url: "users/login",
    method: "post",
    data: Qs.stringify(parameter)
  });
}

/**
 *
 *
 * @export 获取我的团队页面信息
 * @param {any} parameter
 * @returns
 */
export function getMyTeam(parameter) {
  return axios({
    url: "users/getMyTeam",
    method: "get",
    params: parameter
  });
}
/**
 *
 *
 * @export 我的推广页面数据
 * @param {any} parameter
 * @returns
 */
export function getMyPromote(parameter) {
  return axios({
    url: "users/getMyPromote",
    method: "get",
    params: parameter
  });
}
/**
 *
 *
 * @export 绑定身份证和手机号
 * @param {any} parameter
 * @returns
 */
export function updateUserMessage(parameter) {
  return axios({
    url: "users/updateUserMessage",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 *
 *
 * @export 发送短信验证码
 * @param {any} parameter
 * @returns
 */
export function verificationCodes(parameter) {
  return axios({
    url: "verificationCodes",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 *
 *
 * @export 用户添加地址
 * @param {any} parameter
 * @returns
 */
export function addressStore(parameter) {
  return axios({
    url: "address/store",
    method: "post",
    data: Qs.stringify(parameter)
  });
}

/**
 *
 *
 * @export 用户编辑地址
 * @param {any} parameter
 * @returns
 */
export function addressUpdate(parameter) {
  return axios({
    url: "address/update",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 *
 *
 * @export 用户删除地址
 * @param {any} parameter
 * @returns
 */
export function destroy(parameter) {
  return axios({
    url: "address/destroy",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
