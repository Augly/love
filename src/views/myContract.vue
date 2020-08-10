<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-10 15:46:38
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 16:18:36
-->
<template>
  <div>
    <van-empty class="custom-image" :image="nodata" description="暂无活动" />
    <div class="item">
      <div class="item_head">
        <van-image src="" fit="contain" width="44px" height="44px" round />
        <span class="item_name">彭于晏</span>
        <span class="item_name_user">
          <van-icon
            color="#FF3B69"
            class="iconfont"
            class-prefix="icon079aiqing"
            name="icon079aiqing"
            style="margin-right:5px;"
          />小燕子</span
        >
        <van-button color="rgba(83, 105, 252, 1)" class="sure"
          >解除合约</van-button
        >
      </div>
      <van-divider />
      <p class="item_p">
        <span class="title">
          心上人姓名:
        </span>
        小燕子
      </p>
      <p class="item_p">
        <span class="title">
          合约编号:
        </span>
        13464987946546565
      </p>
      <p class="item_p">
        <span class="title">
          身份证号:
        </span>
        154785968748956
      </p>
      <p class="item_p">
        <span class="title">
          签约时间:
        </span>
        2020-07-27 16:00:00:00
      </p>
      <div class="item_tip">
        <van-icon
          color="#82859D"
          class="iconfont"
          class-prefix="icon079aiqing"
          name="icon079aiqing"
          style="margin-right:5px;"
        />
        恭喜你们成功在区块链合约上永久记录你们的爱情
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodata: require("@/assets/image/noactive.png")
    };
  }
};
</script>

<style lang="less" scoped>
.custom-image {
  margin-top: 150px;
}
.item {
  width: 355px;
  height: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 20px 4px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 15px;
  .item_head {
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    .item_name {
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(27, 35, 63, 1);
      margin-left: 10px;
    }
    .item_name_user {
      width: auto;
      height: 24px;
      background: rgba(255, 59, 105, 0.1);
      border-radius: 0px 12px 12px 12px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 59, 105, 1);
      line-height: 24px;
      padding: 0px 7px;
      margin-left: 10px;
    }
    .sure {
      width: 90px;
      height: 33px;
      background: rgba(83, 105, 251, 1);
      box-shadow: 0px 2px 10px 1px rgba(83, 105, 251, 0.2);
      border-radius: 16px;
      margin-left: auto;
    }
  }
  .item_p {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(131, 139, 163, 1);
    .title {
      color: #838ba3;
    }
    margin-bottom: 14px;
  }
  .item_tip {
    width: 330px;
    height: 45px;
    background: rgba(247, 248, 251, 1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(121, 124, 147, 1);
    box-sizing: border-box;
    padding: 0px 20px;
  }
}
</style>
