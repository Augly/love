<!--
import { import } from '@babel/types';
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 12:15:30
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-17 16:19:58
-->
<template>
  <div class="content">
    <h5 class="title">绑定信息</h5>
    <p class="tip">您未绑定身份信息，需要绑定身份信息</p>
    <van-form
      @submit="onSubmit"
      @failed="onFail"
      :show-error-message="false"
      ref="form"
      validate-trigger="onChange"
      style="margin-top:40px;"
    >
      <div class="input_item">
        <van-field
          v-model="idcard"
          name="idcard"
          placeholder="请输入身份证"
          style="background-color:#F4F6F9;line-height:25px;"
          :rules="[
            {
              required: true,
              pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
              trigger: 'onBlur',
              message: '请输入签约人的身份证'
            }
          ]"
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
          v-model="mobile"
          name="mobile"
          placeholder="请输入手机号"
          style="background-color:#F4F6F9;line-height:25px;"
          :rules="[
            {
              required: true,
              pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
              trigger: 'onBlur',
              message: '请输入正确的手机号'
            }
          ]"
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
            type="number"
            name="verification_code"
            v-model="verification_code"
            placeholder="请输入验证码"
            style="background-color:#F4F6F9;line-height:25px;"
            :rules="[
              {
                required: true,
                trigger: 'onBlur',
                message: '请输入验证码'
              }
            ]"
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
        <div class="sendCode" @click.stop="sendCode">
          {{ title !== "获取验证码" ? title + "s后获取" : title }}
        </div>
      </div>
    </van-form>
    <van-button class="sure" @click="sure">下一步</van-button>
  </div>
</template>

<script>
import { updateUserMessage, verificationCodes } from "@/api/user";
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      title: "获取验证码",
      error: true,
      verification_code: "",
      idcard: "",
      mobile: "",
      verification_key: ""
    };
  },
  created() {
    console.log(this.$router);
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);

      updateUserMessage(
        Object.assign(values, {
          verification_key: this.verification_key
        })
      )
        .then(result => {
          if (result) {
            this.$toast.success("绑定成功");
          }
        })
        .catch(() => {});
    },
    sendCode() {
      if (this.title === "获取验证码") {
        if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.mobile)) {
          this.$toast.fail("请输入正确的手机号");
          return false;
        }
        verificationCodes({
          mobile: this.mobile
        })
          .then(result => {
            if (result) {
              this.title = 59;
              let s = setInterval(() => {
                this.title--;
                if (this.title === 0) {
                  clearInterval(s);
                  this.title = "获取验证码";
                }
              }, 1000);
              this.verification_key = result.data.key;
            }
          })
          .catch(() => {});
      }
    },
    onFail() {
      this.$toast.fail("请正确填写");
    },
    sure() {
      this.$refs.form.submit();
    }
  }
};
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
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 50px;
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
