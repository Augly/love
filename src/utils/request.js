/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-07-15 10:33:40
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 17:20:33
 */
// eslint-disable-next-line no-unused-vars
// import Vue from "vue";
import { Notify } from "vant";
import axios from "axios";
import { VueAxios } from "./axios";

// 创建 axios 实例
const service = axios.create({
  baseURL: "/api", // api base_url
  timeout: 50000 // 请求超时时间
});

const err = error => {
  if (error.message.includes("timeout")) {
    Notify({ type: "warning", message: "请求超时" });
  } else {
    // window.location.replace(Vue.ls.get("url"));
  }

  if (error.response) {
    if (
      !error.response.config.url.endsWith("codeForUnionID") &&
      !error.response.config.url.endsWith("insRecord")
    ) {
      const data = error.response.data;
      Notify({ message: data.message });
    }
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(config => {
  // const token = Vue.ls.get("Access-Token");
  // if (token) {
  //   config.headers["OKCLOUD-TOKEN"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  if (response.data.code === 10000 || response.data.code === 500) {
    Notify({ type: "warning", message: response.data.message });
    return false;
  } else {
    return response.data;
  }
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  }
};

export { installer as VueAxios, service as axios };
