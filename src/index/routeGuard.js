import Vue from "vue";
import Storage from "vue-ls";
import { VueAxios } from "./utils/request";
let options = {
  namespace: "love__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};
Vue.use(Storage, options);
Vue.use(VueAxios);
// import store from "@/store";
import router from "./router";
import { login } from "@/api/user";
// import NProgress from "nprogress"; // progress bar
// import "nprogress/nprogress.css"; // progress bar style

/**
 * 分割函数
 */
// Vue.ls.set("access_token", "o8JTmvp96yXhgywqo7QXrqmBrN_I");
let s = decodeURIComponent(window.location.search);
// let time = new Date().getTime();
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
// function getType() {
//   var ua = window.navigator.userAgent.toLowerCase();
//   if (ua.indexOf("alipayclient") > 0) {
//     store.commit("SET_USERTYPE", "Alipay");
//     return true;
//   }
//   store.commit("SET_USERTYPE", "H5");
//   return false;
// }
// NProgress.configure({
//   showSpinner: false
// });
let shareId = "";
if (GetQueryString(s)["shareId"]) {
  shareId = GetQueryString(s)["shareId"];
}
router.beforeEach((to, from, next) => {
  console.log(router.history.pending.fullPath);
  if (from && to.path === from.path) {
    next(false);
  }
  // NProgress.start();
  //
  // 判断全局变量有没有openid
  if (!Vue.ls.get("access_token")) {
    if (s !== "") {
      if (GetQueryString(s)["code"]) {
        // 去换取微信openid
        login({
          code: GetQueryString(s)["code"],
          parent_id: shareId
        })
          .then(result => {
            if (result) {
              Vue.ls.set(
                "access_token",
                `${result.data.token_type} ${result.data.access_token}`
              );
            }
            // else {
            //   if (Vue.ls.get("url")) {
            //     window.location.replace(Vue.ls.get("url"));
            //   }
            // }
          })
          .catch(() => {
            // if (Vue.ls.get("url")) {
            //   window.location.replace(Vue.ls.get("url"));
            // }
          });
      } else {
        Vue.ls.set("url", window.location.href);
        window.location.replace(
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx60afbbb03350eb53&redirect_uri=" +
            window.location.origin +
            window.location.pathname +
            "&response_type=code&scope=snsapi_userinfo&state=" +
            shareId +
            "#wechat_redirect"
        );
      }
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
