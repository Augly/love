<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-15 11:52:55
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-15 12:53:22
-->
<template>
  <div>
    <div class="page_head"></div>
    <div class="head_group">
      <van-image round width="80" height="80" src="" />
      <h4 class="head_phone">17633369350</h4>
    </div>
    <div class="link_group">
      <van-cell title="我的合约" is-link to="index" />
      <van-cell title="我的推广" is-link to="index" />
      <van-cell title="我的钱包" is-link to="index" />
      <van-cell title="联系客服" is-link to="index" />
      <van-cell title="联系地址" is-link to="index" />
      <van-cell title="推荐好友" is-link to="index" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.page_head {
  width: 100%;
  height: 160px;
  background: #f6dede;
}
.head_group {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0px 9px;
  display: flex;
  margin-top: -50px;
  .head_avater {
    width: 80px;
    height: 80px;
  }
  .head_phone {
    font-size: 18px;
    font-weight: 500;
    margin-top: 13px;
    margin-left: 15px;
    color: #ffffff;
  }
}
.link_group {
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin-top: -40px;
  padding-top: 45px;
}
</style>
