import Vue from "vue";
import Storage from "vue-ls";
import { VueAxios } from "./utils/request";
let options = {
  namespace: "H5__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};
Vue.use(Storage, options);
Vue.use(VueAxios);
import store from "@/store";
import router from "./router";
import { getOpenid, authCodeForUserId } from "@/api/shop";
// import NProgress from "nprogress"; // progress bar
// import "nprogress/nprogress.css"; // progress bar style

/**
 * 分割函数
 */
// Vue.ls.set("wx_openid1", "o8JTmvp96yXhgywqo7QXrqmBrN_I");
let s = decodeURIComponent(window.location.search);
let time = new Date().getTime();
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
function getType() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf("alipayclient") > 0) {
    store.commit("SET_USERTYPE", "Alipay");
    return true;
  }
  store.commit("SET_USERTYPE", "H5");
  return false;
}
// NProgress.configure({
//   showSpinner: false
// });
let timerHead = Vue.ls.get("wx_openid1") || Vue.ls.get("alipayUserId3");
router.beforeEach((to, from, next) => {
  console.log(router.history.pending.fullPath);
  if (from && to.path === from.path) {
    next(false);
  }
  // NProgress.start();
  //通过qid获取二维码信息
  function getInfo(qid) {
    sendLog({
      way: "1",
      uid: timerHead + time,
      params: JSON.stringify({
        openid: timerHead,
        msg: "调用findPaymentCode接口前",
        params: qid
      }),
      returns: ``
    });
    getQRCodeInfo({
      qid: qid,
      uid: timerHead + time
    })
      .then(res => {
        if (res) {
          if (Vue.ls.get("wx_openid1")) {
            store.commit("SET_OPENID", Vue.ls.get("wx_openid1"));
          }
          if (Vue.ls.get("alipayUserId3")) {
            store.commit("SET_ALIPAYUSERID", Vue.ls.get("alipayUserId3"));
          }
          // 店铺Id
          store.commit("SET_SHOPID", res.result.shopId);
          //订单Id
          store.commit("SET_ORDELID", "");
          //二维码类型
          store.commit("SET_TYPE", res.result.type);
          sendLog({
            way: "1",
            uid: timerHead + time,
            params: JSON.stringify({
              openid: timerHead,
              msg: "调用findPaymentCode接口成功",
              params: qid
            }),
            returns: JSON.stringify(res)
          });
          next();
        }
      })
      .catch(e => {
        sendLog({
          way: "1",
          uid: timerHead + time,
          params: JSON.stringify({
            openid: timerHead,
            msg: "调用findPaymentCode接口失败",
            params: qid
          }),
          returns: JSON.stringify(e)
        });
      });
  }
  //
  // 判断全局变量有没有openid
  if (
    (!getType() && !Vue.ls.get("wx_openid1")) ||
    (getType() && !Vue.ls.get("alipayUserId3"))
  ) {
    if (s !== "") {
      if (GetQueryString(s)["wx_openid1"] && GetQueryString(s)["q"]) {
        store.commit("SET_OPENID", GetQueryString(s)["wx_openid1"]);
        store.commit("SET_USERTYPE", "APP");
        getInfo(GetQueryString(s)["q"]);
      } else if (GetQueryString(s)["code"]) {
        // 去换取微信openid
        getOpenid({
          code: GetQueryString(s)["code"]
        })
          .then(result => {
            if (result) {
              Vue.ls.set("wx_openid1", result);
              store.commit("SET_OPENID", result);
              if (Vue.ls.get("url")) {
                window.location.replace(Vue.ls.get("url"));
              }
            } else {
              if (Vue.ls.get("url")) {
                window.location.replace(Vue.ls.get("url"));
              }
            }
          })
          .catch(() => {
            if (Vue.ls.get("url")) {
              window.location.replace(Vue.ls.get("url"));
            }
          });
      } else if (GetQueryString(s)["auth_code"]) {
        store.commit("SET_USERTYPE", "Alipay");
        // 去换取支付宝userID
        authCodeForUserId({
          authCode: GetQueryString(s)["auth_code"]
        })
          .then(result => {
            if (result) {
              Vue.ls.set("alipayUserId3", result.result.alipayUserId);
              store.commit("SET_ALIPAYUSERID", result.result.alipayUserId);
              if (Vue.ls.get("url")) {
                window.location.replace(Vue.ls.get("url"));
              }
            } else {
              if (Vue.ls.get("url")) {
                window.location.replace(Vue.ls.get("url"));
              }
            }
          })
          .catch(() => {
            if (Vue.ls.get("url")) {
              window.location.replace(Vue.ls.get("url"));
            }
          });
      } else {
        Vue.ls.set("url", window.location.href);
        // 如果是支付宝扫码
        if (getType()) {
          Vue.ls.set("scopeType", "Alipay");
          window.location.replace(
            "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2021001166699372&scope=auth_user&redirect_uri=" +
              window.location.origin +
              window.location.pathname +
              "&state=" +
              JSON.parse(decodeURIComponent(GetQueryString(s)["param"])).q
          );
        } else {
          // 如果是微信扫码
          Vue.ls.set("scopeType", "WeiXIN");
          window.location.replace(
            "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx60afbbb03350eb53&redirect_uri=" +
              window.location.origin +
              window.location.pathname +
              "&response_type=code&scope=snsapi_userinfo&state=" +
              JSON.parse(decodeURIComponent(GetQueryString(s)["param"])).q +
              "#wechat_redirect"
          );
        }
      }
    }
  } else if (!store.state._shopId) {
    getInfo(
      GetQueryString(s)["code"]
        ? GetQueryString(s)["state"]
        : JSON.parse(decodeURIComponent(GetQueryString(s)["param"])).q
    );
  } else {
    next();
  }
});
/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
router.onError(error => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  sendLog({
    way: "1",
    uid: timerHead + time,
    params: JSON.stringify({
      openid: timerHead,
      msg: `路由守卫跳转报错${targetPath}`,
      params: ""
    }),
    returns: JSON.stringify(error)
  });
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});
router.afterEach(to => {
  if (timerHead) {
    sendLog({
      way: "1",
      uid: timerHead + time,
      params: JSON.stringify({
        openid: timerHead,
        msg: `成功进入${to.path}页面`
      }),
      returns: `成功进入${to.path}页面`
    });
  }
  // NProgress.done();
});
