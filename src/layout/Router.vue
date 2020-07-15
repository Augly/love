<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-14 14:49:13
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-15 11:57:42
-->
<template>
  <div>
    <div class="router">
      <div class="page"><router-view /></div>
    </div>
    <van-tabbar v-model="active" active-color="#F78399" route>
      <van-tabbar-item replace to="/index" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/personl" icon="user-circle-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less" scoped>
.router {
  position: relative;
  width: 100%;
  // background: rgba(246, 222, 222, 1);
  height: calc(100% - 50px);
}
</style>
