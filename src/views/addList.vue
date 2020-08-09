<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 13:13:59
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-09 13:35:45
-->
<template>
  <div style="padding-bottom:50px;">
    <van-address-list
      safe-area-inset-bottom
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
      this.$router.push("/addressEdit");
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #5369fc;
  border-color: #5369fc;
}
/deep/ .van-address-item .van-radio__icon--checked .van-icon {
  background-color: #5369fc;
  border-color: #5369fc;
}
/deep/ .van-tag--danger {
  background-color: #5369fc;
}
</style>
