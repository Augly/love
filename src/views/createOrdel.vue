<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 23:05:32
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 15:44:34
-->
<template>
  <div>
    <div class="ordel_info">
      <h4>恋爱合约</h4>
      <div class="date_warp">
        <div class="date_half">
          <p class="date_title">定制日期</p>
          <p class="date_num">2020-05-30</p>
        </div>
        <div class="date_half">
          <p class="date_title">定制日期</p>
          <p class="date_num">2020-05-30</p>
        </div>
      </div>
      <div class="info">
        <h5 class="info_title">
          <van-icon
            color="#838BA3"
            class="iconfont"
            class-prefix="iconziliao"
            name="iconziliao"
          />
          填写信息
        </h5>
        <div class="input_item">
          <van-field
            v-model="value"
            label-width="50px"
            label="签约人"
            colon
            placeholder="请输入用户名"
            style="background-color:#F4F6F9;line-height:25px;"
          >
          </van-field>
        </div>
        <div class="input_item">
          <van-field
            v-model="value"
            label-width="50px"
            label="身份证"
            colon
            placeholder="请输入用户名"
            style="background-color:#F4F6F9;line-height:25px;"
          >
          </van-field>
        </div>
        <div class="input_item">
          <van-field
            v-model="value"
            label-width="50px"
            label="心上人"
            colon
            placeholder="请输入用户名"
            style="background-color:#F4F6F9;line-height:25px;"
          >
          </van-field>
        </div>
        <div class="input_item">
          <van-field
            v-model="value"
            label-width="50px"
            label="身份证"
            colon
            placeholder="请输入用户名"
            style="background-color:#F4F6F9;line-height:25px;"
          >
          </van-field>
        </div>
      </div>
      <div class="info">
        <h5 class="info_title">
          <van-icon
            color="#838BA3"
            class="iconfont"
            class-prefix="iconlianxifangshi"
            name="iconlianxifangshi"
          />
          联系方式
        </h5>
        <div class="input_item">
          <van-field
            v-model="value"
            label-width="70px"
            label="联系电话"
            colon
            placeholder="请输入用户名"
            style="background-color:#F4F6F9;line-height:25px;"
          >
          </van-field>
        </div>
        <div class="input_item">
          <van-field
            v-model="value"
            label-width="70px"
            label="联系地址"
            colon
            placeholder="请输入用户名"
            style="background-color:#F4F6F9;line-height:25px;"
          >
          </van-field>
        </div>
      </div>
    </div>
    <div class="button_group">
      <span class="price">
        299
      </span>
      <van-button color="rgba(83, 105, 252, 1)" class="sure_pay" to="protocol"
        >签约</van-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.ordel_info {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  padding: 10px 15px 50px 15px;
  h4 {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(28, 36, 63, 1);
    margin: 20px 0px;
  }
  .date_warp {
    width: 345px;
    height: 70px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .date_half {
      width: 48%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      justify-content: center;
      padding-left: 18px;
      .date_title {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(28, 36, 63, 1);
      }
      .date_num {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(83, 105, 252, 1);
        margin-top: 9px;
      }
    }
  }
}
.info {
  width: 345px;
  height: auto;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 20px 4px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 15px;
  box-sizing: border-box;
  padding: 18px 13px;
  overflow: hidden;
  .info_title {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(131, 139, 163, 1);
  }
  .input_item {
    width: 320px;
    height: 45px;
    background: rgba(247, 249, 253, 1);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-top: 10px;
    &:first-of-type {
      margin-top: 17px;
    }
  }
}
.button_group {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 2px 18px 0px rgba(209, 209, 209, 0.35);
  margin: 0px 0px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 0px 0px 10px 10px;
  padding: 0px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .price {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 123, 5, 1);
    position: relative;
    text-indent: 13px;
    &::before {
      position: absolute;
      content: "￥";
      font-size: 15px;
      left: -15px;
      bottom: 2px;
    }
    &::after {
      position: absolute;
      content: "元";
      font-size: 15px;
      right: -18px;
      bottom: 2px;
    }
  }
  .sure_pay {
    width: 107px;
    height: 40px;
    background: rgba(83, 105, 252, 1);
    box-shadow: 0px 4px 10px 2px rgba(83, 105, 252, 0.25);
    border-radius: 20px;
  }
}
</style>
