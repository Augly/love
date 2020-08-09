<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 12:15:30
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-09 13:11:50
-->
<template>
  <div class="content">
    <h5 class="title">绑定信息</h5>
    <p class="tip">您未绑定身份信息，需要绑定身份信息</p>
    <div class="input_item">
      <van-field
        v-model="value"
        placeholder="请输入用户名"
        style="background-color:#F4F6F9;line-height:25px;"
      >
        <template #left-icon>
          <van-icon
            class="iconfont"
            class-prefix="iconshenfenz"
            name="iconshenfenz"
          />
        </template>
      </van-field>
    </div>
    <div class="input_item">
      <van-field
        v-model="value"
        placeholder="请输入用户名"
        style="background-color:#F4F6F9;line-height:25px;"
      >
        <template #left-icon>
          <van-icon
            class="iconfont"
            class-prefix="iconphone"
            name="iconphone"
          />
        </template>
      </van-field>
    </div>

    <div class="code_group">
      <div class="code_write">
        <van-field
          v-model="value"
          placeholder="请输入用户名"
          style="background-color:#F4F6F9;line-height:25px;"
        >
          <template #left-icon>
            <van-icon
              class="iconfont"
              class-prefix="iconyanzhengma2"
              name="iconyanzhengma2"
            />
          </template>
        </van-field>
      </div>
      <van-button class="sendCode">获取验证码</van-button>
    </div>
    <van-button class="sure">下一步</van-button>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0px 20px;
  .title {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(28, 36, 63, 1);
    margin-top: 52px;
  }
  .tip {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(160, 166, 184, 1);
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .input_item {
    width: 335px;
    height: 50px;
    background: rgba(243, 245, 249, 1);
    border-radius: 25px;

    overflow: hidden;
    margin-top: 27px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 5px;
    /deep/ .van-cell {
      display: flex;
      align-items: center;
    }
    /deep/ .van-field__left-icon {
      display: flex;
      align-items: center;
    }
    .iconfont {
      margin-right: 8px;
      font-size: 21px;
      line-height: 100%;
    }
  }
  .code_group {
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 5px;
    .code_write {
      width: 192px;
      height: 50px;
      background: rgba(243, 245, 249, 1);
      border-radius: 25px;

      overflow: hidden;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 5px;
      /deep/ .van-cell {
        display: flex;
        align-items: center;
      }
      /deep/ .van-field__left-icon {
        display: flex;
        align-items: center;
      }
      .iconfont {
        margin-right: 8px;
        font-size: 21px;
        line-height: 100%;
      }
    }
    .sendCode {
      width: 120px;
      height: 50px;
      background: rgba(83, 105, 252, 1);
      box-shadow: 0px 4px 14px 4px rgba(83, 105, 252, 0.25);
      border-radius: 25px;
      /deep/ .van-button__text {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
.sure {
  width: 100%;
  height: 50px;
  background: rgba(83, 105, 252, 1);
  box-shadow: 0px 4px 14px 4px rgba(83, 105, 252, 0.25);
  border-radius: 23px;
  margin: 0 auto;
  margin-top: 80px;
  /deep/ .van-button__text {
    font-size: 16px;
    font-family: PingFang SC;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
