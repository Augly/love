/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-08-15 14:25:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-15 15:02:53
 */
import Vue from "vue";
import Storage from "vue-ls";
let options = {
  namespace: "love__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};
Vue.use(Storage, options);
// import store from "@/store";
import router from "./index";
import { login } from "@/api/user";
// import NProgress from "nprogress"; // progress bar
// import "nprogress/nprogress.css"; // progress bar style

/**
 * 分割函数
 */
let s = decodeURIComponent(window.location.search);
function GetQueryString(url) {
  var obj = new Object();
  var scan_url = url.split("?")[1];
  var strs = scan_url.split("&");
  for (var x in strs) {
    var arr = strs[x].split("=");
    obj[arr[0]] = arr[1];
  }
  return obj;
}
// NProgress.configure({
//   showSpinner: false
// });
let sharId = (s && GetQueryString(s)["sharId"]) || "";
router.beforeEach((to, from, next) => {
  console.log(router.history.pending.fullPath);
  if (from && to.path === from.path) {
    next(false);
  }
  // NProgress.start();
  // 判断全局变量有没有openid
  if (!Vue.ls.get("access_token")) {
    if (s && GetQueryString(s)["code"]) {
      // 去换取微信openid
      login({
        code: GetQueryString(s)["code"],
        parent_id: sharId
      })
        .then(result => {
          if (result) {
            Vue.ls.set(
              "access_token",
              `${result.data.token_type} ${result.data.access_token}`
            );
            // if (Vue.ls.get("url")) {
            //   window.location.replace(Vue.ls.get("url"));
            // }
          } else {
            // if (Vue.ls.get("url")) {
            //   window.location.replace(Vue.ls.get("url"));
            // }
          }
        })
        .catch(() => {
          // if (Vue.ls.get("url")) {
          //   window.location.replace(Vue.ls.get("url"));
          // }
        });
    } else {
      Vue.ls.set("url", window.location.href);
      window.location.replace(
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx80c4780c6b482c8d&redirect_uri=" +
          window.location.origin +
          window.location.pathname +
          "&response_type=code&scope=snsapi_userinfo&state=" +
          sharId +
          "#wechat_redirect"
      );
    }
  } else {
    next();
  }
});
/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
router.onError(error => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});
router.afterEach(() => {
  // NProgress.done();
});
