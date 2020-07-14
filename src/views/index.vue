<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-14 15:20:25
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-14 17:58:30
-->
<template>
  <div class="page">
    <div class="page_head">
      <h4>JOJO恋爱合约</h4>
    </div>
    <div class="page_form"></div>
    <div class="shareContain" @click="handelClick(1)"></div>
    <div class="title_group">
      <span class="title">活动公告</span>
      <span class="more">查看更多</span>
      <van-icon
        name="arrow"
        size="12px"
        color="rgba(153, 153, 153, 1)"
        tag="span"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handelClick(i) {
      console.log(i);
    }
  }
};
</script>

<style lang="less" scoped>
.page_head {
  width: 375px;
  height: 286px;
  background: rgba(246, 222, 222, 1);
  box-sizing: border-box;
  padding: 0 23px;
  h4 {
    line-height: 120px;
    font-size: 28px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(247, 131, 153, 1);
  }
}
.page_form {
  width: 351px;
  height: 205px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 13px 3px rgba(246, 222, 222, 0.51);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -166px;
}
.shareContain {
  width: 351px;
  height: 125px;
  background: rgba(246, 222, 222, 1);
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 15px;
}
.title_group {
  width: 351px;
  height: 50px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .title {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }
  .more {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
}
</style>
