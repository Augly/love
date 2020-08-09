<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-08 19:34:43
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-09 12:12:52
-->
<template>
  <div>
    <div class="input_wrap">
      <p class="title">提现金额</p>
      <van-field
        v-model="number"
        type="number"
        label="￥"
        size="large"
        :border="false"
        placeholder="请输入金额"
        label-width="20px"
      >
        <template #extra>
          <span class="all" @click="sureAll">全部</span>
        </template>
      </van-field>
      <van-divider />
      <p class="tip">可提现至微信钱包金额 <span>￥20000.00</span></p>
    </div>
    <van-button color="#5369FC" class="sure" @click="toSuccess"
      >立即提现</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    sureAll() {
      console.log("12121");
    },
    toSuccess() {
      this.$router.push("/recharge");
    }
  }
};
</script>
<style lang="less" scoped>
.input_wrap {
  width: 345px;
  height: 151px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 15px;
  box-sizing: border-box;
  padding: 15px;
  .title {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(132, 139, 164, 1);
  }
  /deep/ .van-cell {
    padding: 0px;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-family: Grundig DIN;
    font-weight: 500;
    color: rgba(28, 36, 63, 1);
    margin-top: 30px;
    .van-field__label {
      font-size: 30px;
      font-family: Grundig DIN;
      font-weight: 500;
      color: rgba(28, 36, 63, 1);
    }
  }
  /deep/ .van-field__body {
    input::-webkit-input-placeholder {
      font-size: 20px;
    }
  }
  .all {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(83, 105, 252, 1);
  }
}
.sure {
  width: 300px;
  height: 45px;
  background: rgba(83, 105, 252, 1);
  box-shadow: 0px 4px 14px 4px rgba(83, 105, 252, 0.25);
  border-radius: 23px;
  display: block;
  margin: 0 auto;
  margin-top: 90px;
  /deep/ .van-button__text {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
}
.tip {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(132, 139, 164, 1);
  span {
    color: #ff8706;
  }
}
</style>
