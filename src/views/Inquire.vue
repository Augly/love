<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-05 16:10:10
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-07 23:19:53
-->
<template>
  <div>
    <div class="form_content">
      <div class="input_wrap">
        <van-field
          v-model="value"
          label-width="80px"
          label="合约编码"
          placeholder="请输入用户名"
          style="background-color:#F4F6F9;line-height:25px;"
        >
          <template #left-icon>
            <van-icon
              class="iconfont"
              class-prefix="iconbanjianbianma"
              name="iconbanjianbianma"
            />
          </template>
        </van-field>
      </div>
      <div class="input_wrap">
        <van-field
          v-model="value"
          label-width="80px"
          label="身份证号"
          placeholder="请输入用户名"
          style="background-color:#F4F6F9"
        >
          <template #left-icon>
            <van-icon
              class="iconfont"
              class-prefix="iconshenfenzheng"
              name="iconshenfenzheng"
            />
          </template>
        </van-field>
      </div>
    </div>
    <van-button color="#5369FC" class="sure">查询</van-button>
    <div class="rules">
      <h4 class="title">温馨提示</h4>
      <p>1.输入合约编码及身份证号码即可查询合约信息</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.form_content {
  width: 345px;
  height: 192px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  margin: 60px auto;
  box-sizing: border-box;
  padding: 29px 0px 12px 0px;
  .input_wrap {
    width: 315px;
    height: 50px;
    background: rgba(244, 246, 249, 1);
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    .iconfont {
      margin-right: 8px;
    }
  }
}
.sure {
  width: 320px;
  height: 45px;
  display: block;
  background: rgba(83, 105, 252, 1);
  box-shadow: 0px 4px 14px 4px rgba(83, 105, 252, 0.25);
  border-radius: 23px;
  margin: 0 auto;
  margin-top: 27px;
  /deep/ .van-button__text {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
}
.rules {
  width: 320px;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  .title {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(40, 50, 71, 1);
  }
  p {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(40, 50, 71, 1);
    margin-top: 20px;
  }
}
</style>
