<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-08 23:45:09
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-08 23:56:13
-->
<template>
  <div>
    <div class="success_wrap">
      <div class="logo"></div>
      <p class="tip">微信提现申请成功</p>
      <h5 class="money">455</h5>
    </div>
    <div class="rule">
      <p class="tip">
        须知
      </p>
      <p class="rule_item">1.支付宝、微信支付需要支付手续费</p>
    </div>
    <van-button color="#5369FC" class="sure">确认</van-button>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.success_wrap {
  width: 345px;
  height: 179px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    width: 64px;
    height: 64px;
    background-image: url("~@/assets/image/success.png");
    background-size: 100% 100%;
  }
  .tip {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(127, 135, 164, 1);
    margin-top: 17px;
  }
  .money {
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(28, 36, 63, 1);
    margin-top: 14px;
    &::before {
      content: "￥";
      font-size: 18px;
    }
  }
}
.rule {
  width: 345px;
  height: auto;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 25px 14px;
  margin: 0 auto;
  margin-top: 10px;
  .tip {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(28, 36, 63, 1);
  }
  .rule_item {
    margin-top: 10px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(127, 135, 164, 1);
  }
}
.sure {
  display: block;
  width: 300px;
  height: 45px;
  background: rgba(83, 105, 252, 1);
  box-shadow: 0px 4px 14px 4px rgba(83, 105, 252, 0.25);
  border-radius: 23px;
  margin: 0 auto;
  margin-top: 50px;
  /deep/ .van-button__text {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
