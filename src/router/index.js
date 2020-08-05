/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 14:02:37
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-05 16:15:56
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
          import(/* webpackChunkName: "ordel" */ "@/views/protocol.vue")
      },
      {
        path: "/Inquire",
        name: "Inquire",
        meta: { title: "查询合约" },
        component: () =>
          import(/* webpackChunkName: "ordel" */ "@/views/Inquire.vue")
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
