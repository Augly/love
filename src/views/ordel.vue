<!--
import { import } from '@babel/types';
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-15 09:27:17
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-15 13:04:03
-->
<template>
  <div>
    <div class="pageView">
      <div class="form_wrap">
        <h4>恋爱合约</h4>
        <p>定制日期：2020-05-30</p>
        <p>兑现日期：2023-05-30</p>
        <van-form
          @submit="onSubmit"
          @failed="onFail"
          :show-error-message="false"
          ref="form"
          validate-trigger="onChange"
          style="margin-top:40px;"
          ><van-cell-group>
            <van-field
              required
              v-model="selfName"
              name="selfName"
              label="签约人"
              placeholder="请输入签约人姓名"
              :rules="[
                {
                  required: true,
                  trigger: 'onBlur',
                  message: '请输入签约人姓名'
                }
              ]"
            />
            <van-field
              required
              v-model="selfIdCard"
              name="selfIdCard"
              label="身份证"
              placeholder="请输入签约人的身份证"
              :rules="[
                {
                  required: true,
                  pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
                  trigger: 'onBlur',
                  message: '请输入签约人的身份证'
                }
              ]"
            />
            <van-field
              required
              v-model="loveName"
              name="loveName"
              label="心上人"
              placeholder="请输入心上人姓名"
              :rules="[
                {
                  required: true,
                  trigger: 'onBlur',
                  message: '请输入心上人姓名'
                }
              ]"
            />
            <van-field
              required
              v-model="loveIdCard"
              name="loveIdCard"
              label="身份证"
              placeholder="请输入心上人的身份证"
              :rules="[
                {
                  required: true,
                  pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
                  trigger: 'onBlur',
                  message: '请输入心上人的身份证'
                }
              ]"
            />
            <van-field
              required
              v-model="selftell"
              name="selftell"
              type="tel"
              label="手机号"
              maxlength="11"
              :rules="[
                {
                  required: true,
                  pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
                  trigger: 'onBlur',
                  message: '请输入正确的手机号'
                }
              ]"
              placeholder="请输入正确的手机号"
            />
            <van-field
              required
              readonly
              clickable
              name="area"
              :value="value"
              label="地区选择"
              placeholder="点击选择省市区"
              :rules="[
                {
                  required: true,
                  trigger: 'onBlur',
                  message: '请选择省市区'
                }
              ]"
              @click="showArea = true"
            />
            <van-popup
              v-model="showArea"
              position="bottom"
              safe-area-inset-bottom
            >
              <van-area
                :area-list="areaList"
                @confirm="onConfirm"
                @cancel="showArea = false"
              />
            </van-popup>
            <van-field
              required
              v-model="adderDetail"
              name="adderDetail"
              rows="2"
              autosize
              type="textarea"
              maxlength="50"
              label="详细地址"
              placeholder="请输入详细地址"
              :rules="[
                {
                  required: true,
                  trigger: 'onBlur',
                  message: '请输入详细地址'
                }
              ]"
            />
          </van-cell-group>
        </van-form>
      </div>
    </div>
    <div class="button_group">
      <span class="price">
        ￥299元
      </span>
      <div class="sure_pay" @click="sure">提交</div>
    </div>
  </div>
</template>

<script>
import areaList from "@/config/area.js";
export default {
  data() {
    return {
      adderDetail: "",
      error: true,
      selfName: "",
      selfIdCard: "",
      loveName: "",
      loveIdCard: "",
      selftell: "",
      value: "",
      showArea: false,
      areaList: areaList // 数据格式见 Area 组件文档
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.$toast.success("调支付");
    },
    onFail() {
      this.$toast.fail("请正确填写");
    },
    onConfirm(values) {
      this.value = values.map(item => item.name).join("/");
      this.showArea = false;
    },
    sure() {
      this.$refs.form.submit();
    }
  }
};
</script>

<style lang="less" scoped>
.pageView {
  width: 100vw;
  height: calc(100vh - 46px);
}
.button_group {
  width: 100%;
  box-sizing: border-box;
  height: 60px;
  margin-top: -60px;
  padding: 0px 13px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 18px 0px rgba(209, 209, 209, 0.35);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .price {
    font-size: 21px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(247, 130, 151, 1);
  }
  .sure_pay {
    width: 115px;
    height: 40px;
    background: rgba(247, 130, 151, 1);
    border-radius: 20px;
    font-size: 13px;
    line-height: 40px;
    text-align: center;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
.form_wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 12px;
  h4 {
    font-size: 23px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(247, 130, 151, 1);
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  p {
    font-size: 13px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(136, 136, 136, 1);
    text-align: center;
    margin-bottom: 13px;
  }
}
</style>
