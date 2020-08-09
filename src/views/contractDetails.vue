<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 18:20:04
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-09 22:26:08
-->
<template>
  <div>
    <div class="love_personl">
      <van-image src="" fit="contain" width="50px" height="50px" round />
      <div class="love_content">
        <p class="name">刘伟</p>
        <p class="join_time">加入时间：2020-07-31</p>
      </div>

      <span class="love_user">
        <van-icon
          color="#FF3B69"
          class="iconfont"
          class-prefix="icon079aiqing"
          name="icon079aiqing"
          style="margin-right:5px;"
        />小燕子</span
      >
    </div>
    <div class="love_info">
      <p class="love_info_list">
        <span>
          合约编号:
        </span>
        13464987946546565
      </p>
      <p class="love_info_list">
        <span>
          身份证号:
        </span>
        154785968748956
      </p>
      <p class="love_info_list">
        <span>
          签约时间:
        </span>
        2020-07-27 16:00:00:00
      </p>
      <p class="love_info_list">
        <span>
          兑现日期:
        </span>
        2020-8-7 16:00
      </p>
    </div>

    <div class="love_info_content">
      <span class="mintitle">
        合约内容：
      </span>
      恋爱合约自支付成功后次日零时起生效,本合约生效3年后且在约定的合约期内，签约人与心上人均为除此在民政部门领取中华人民共和国结婚证的,签约人符合兑现要求的。
    </div>
    <van-button class="sure">销毁合约</van-button>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.love_personl {
  width: 345px;
  height: 108px;
  box-sizing: border-box;
  padding: 32px 0px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .avatar {
    width: 50px;
    height: 50px;
  }
  .love_content {
    width: 200px;
    height: auto;
    margin-left: 14px;
    .name {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(28, 36, 63, 1);
    }
    .join_time {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(160, 167, 192, 1);
      margin-top: 8px;
    }
  }
  .love_user {
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
    align-self: flex-start;
  }
}
.love_info {
  width: 345px;
  overflow: hidden;
  background: rgba(247, 248, 251, 1);
  border-radius: 5px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 0px;
  .love_info_list {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(132, 139, 164, 1);
    margin-bottom: 20px;
    span {
      color: #848ba4;
    }
  }
}
.love_info_content {
  width: 345px;
  height: auto;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
  background: rgba(247, 248, 251, 1);
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #3a4569;
  line-height: 20px;
  height: 240px;
  .mintitle {
    color: #848ba4;
  }
}
.sure {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  width: 325px;
  height: 50px;
  display: block;
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
