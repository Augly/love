/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-07-15 10:33:40
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-17 11:51:13
 */
// eslint-disable-next-line no-unused-vars
import Vue from "vue";
import { Notify, Toast } from "vant";
import axios from "axios";
import { VueAxios } from "./axios";
// 创建 axios 实例
const service = axios.create({
  baseURL: "/api", // api base_url
  timeout: 50000 // 请求超时时间
});

const err = error => {
  console.log(error);
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
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
    duration: 0
  });
  // const token = Vue.ls.get("Access-Token");
  // if (token) {
  config.headers[
    "Authorization"
  ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb3ZlLmJhaWx1Z2UuY29tXC9hcGlcL3VzZXJzXC9sb2dpbiIsImlhdCI6MTU5NzM4NTk2MCwiZXhwIjoxNjAwOTg1OTYwLCJuYmYiOjE1OTczODU5NjAsImp0aSI6IkN1cnVZbzNxUjMwcndOSWsiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.P72qK8nmXx8-h2iUwyxb8JvOiW8W9Vpv-WRRb5WMZQo`;
  // config.headers["Authorization"] = Vue.ls.get("Access-access_token"); // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  Toast.clear();
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
