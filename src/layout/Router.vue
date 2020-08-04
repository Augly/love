import { import } from '@babel/types'; import { import } from '@babel/types';
<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-14 14:49:13
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-03 19:38:55
-->
<template>
  <div>
    <div class="router">
      <div class="page"><router-view /></div>
    </div>
    <NavBar></NavBar>
  </div>
</template>

<script>
import { NavBar } from "@/components";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    NavBar
  }
};
</script>

<style lang="less" scoped>
.router {
  position: relative;
  overflow-y: scroll;
  top: 0;
  width: 100%;
  // background: rgba(246, 222, 222, 1);
  // height: calc(100% - 50px);
}
</style>
