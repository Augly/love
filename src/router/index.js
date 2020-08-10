/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 14:02:37
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 16:01:36
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Router from "@/layout/Router.vue";
import Page from "@/layout/Page.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Router",
    component: Router,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/index.vue")
      },
      {
        path: "/personl",
        name: "personl",
        component: () =>
          import(/* webpackChunkName: "personl" */ "@/views/personl.vue")
      }
    ]
  },
  {
    path: "/page",
    name: "page",
    component: Page,
    children: [
      {
        path: "/ordel",
        name: "ordel",
        meta: { title: "提交订单" },
        component: () =>
          import(/* webpackChunkName: "ordel" */ "@/views/ordel.vue")
      },
      {
        path: "/protocol",
        name: "protocol",
        meta: { title: "签约协议" },
        component: () =>
          import(/* webpackChunkName: "protocol" */ "@/views/protocol.vue")
      },
      {
        path: "/Inquire",
        name: "Inquire",
        meta: { title: "查询合约" },
        component: () =>
          import(/* webpackChunkName: "Inquire" */ "@/views/Inquire.vue")
      },
      {
        path: "/team",
        name: "team",
        meta: { title: "我的团队" },
        component: () =>
          import(/* webpackChunkName: "team" */ "@/views/team.vue")
      },
      {
        path: "/promote",
        name: "promote",
        meta: { title: "我的推广" },
        component: () =>
          import(/* webpackChunkName: "promote" */ "@/views/promote.vue")
      },
      {
        path: "/withdraw",
        name: "withdraw",
        meta: { title: "提现" },
        component: () =>
          import(/* webpackChunkName: "withdraw" */ "@/views/withdraw.vue")
      },
      {
        path: "/recordForWithdraw",
        name: "recordForWithdraw",
        meta: { title: "提现记录" },
        component: () =>
          import(
            /* webpackChunkName: "recordForWithdraw" */ "@/views/recordForWithdraw.vue"
          )
      },
      {
        path: "/recharge",
        name: "recharge",
        meta: { title: "提现成功" },
        component: () =>
          import(/* webpackChunkName: "recharge" */ "@/views/recharge.vue")
      },
      {
        path: "/bandPhone",
        name: "bandPhone",
        meta: { title: "绑定手机号" },
        component: () =>
          import(/* webpackChunkName: "bandPhone" */ "@/views/bandPhone.vue")
      },
      {
        path: "/addList",
        name: "addList",
        meta: { title: "联系地址" },
        component: () =>
          import(/* webpackChunkName: "addList" */ "@/views/addList.vue")
      },
      {
        path: "/addressEdit",
        name: "addressEdit",
        meta: { title: "编辑地址" },
        component: () =>
          import(
            /* webpackChunkName: "addressEdit" */ "@/views/addressEdit.vue"
          )
      },
      {
        path: "/activeList",
        name: "activeList",
        meta: { title: "活动公告" },
        component: () =>
          import(/* webpackChunkName: "activeList" */ "@/views/activeList.vue")
      },
      {
        path: "/activeDetail",
        name: "activeDetail",
        meta: { title: "活动详情" },
        component: () =>
          import(
            /* webpackChunkName: "activeDetail" */ "@/views/activeDetail.vue"
          )
      },
      {
        path: "/ordelList",
        name: "ordelList",
        meta: { title: "我的订单" },
        component: () =>
          import(/* webpackChunkName: "ordelList" */ "@/views/ordelList.vue")
      },
      {
        path: "/contractDetails",
        name: "contractDetails",
        meta: { title: "合约详情" },
        component: () =>
          import(
            /* webpackChunkName: "contractDetails" */ "@/views/contractDetails.vue"
          )
      },
      {
        path: "/createOrdel",
        name: "createOrdel",
        meta: { title: "提交订单" },
        component: () =>
          import(
            /* webpackChunkName: "createOrdel" */ "@/views/createOrdel.vue"
          )
      },
      {
        path: "/myContract",
        name: "myContract",
        meta: { title: "我的合约" },
        component: () =>
          import(/* webpackChunkName: "myContract" */ "@/views/myContract.vue")
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
