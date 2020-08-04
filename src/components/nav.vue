<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-03 15:47:07
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-03 19:48:15
-->
<template>
  <div class="nav_wrap">
    <div class="nav_circle">
      <div class="circle"></div>
    </div>
    <div class="nav_bar">
      <router-link
        :to="{ path: '/index' }"
        replace
        exact
        tag="div"
        class="nav_item"
        exact-active-class="nav_item_active"
      >
        <span>首页</span>
      </router-link>
      <div class="nav_text">查询合约</div>
      <router-link
        :to="{ path: '/personl' }"
        replace
        exact
        tag="div"
        class="nav_item"
        exact-active-class="nav_item_active"
        ><span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 375px;
  background-color: transparent;
  .nav_circle {
    position: fixed;
    bottom: 18px;
    z-index: 2;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -15px 10px 0px rgba(122, 132, 204, 0.06);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .circle {
      width: 48px;
      height: 48px;
      background: rgba(83, 105, 252, 1);
      border-radius: 50%;
    }
  }
  .nav_bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -15px 10px 0px rgba(122, 132, 204, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .nav_item {
      width: 78px;
      height: 30px;
      border-radius: 15px;
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(176, 181, 200, 1);
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(176, 181, 200, 1);
      text-align: center;
      line-height: 30px;
    }
    .nav_item_active {
      background: rgba(41, 109, 255, 0.05);
      color: rgba(83, 105, 252, 1);
    }
    .nav_text {
      font-size: 10px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(176, 181, 200, 1);
      line-height: 22px;
      align-self: flex-end;
    }
  }
}
</style>
