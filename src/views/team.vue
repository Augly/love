<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-05 17:30:47
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-08 15:13:42
-->
<template>
  <div>
    <div class="bg_wrap">
      <p class="bg_people_num">9999925</p>
      <p class="bg_title">团队总人数</p>
      <van-divider dashed />
      <div class="bg_items">
        <div class="bg_item">
          <p class="bg_item_title">今日邀请</p>
          <p class="bg_item_num">8888888</p>
        </div>
        <div class="bg_item">
          <p class="bg_item_title">本月邀请</p>
          <p class="bg_item_num">7777777</p>
        </div>
      </div>
    </div>
    <h5 class="title">团队成员</h5>
    <div>
      <div class="list_item">
        <div class="list_item_avtar"></div>
        <div class="list_item_content">
          <p class="name">刘伟</p>
          <p class="join_time">加入时间：2020-07-31</p>
        </div>
      </div>
      <div class="list_item">
        <div class="list_item_avtar"></div>
        <div class="list_item_content">
          <p class="name">刘伟</p>
          <p class="join_time">加入时间：2020-07-31</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bg_wrap {
  width: 346px;
  height: 161px;
  margin: 0 auto;
  margin-top: 20px;
  background-image: url("~@/assets/image/team_bg.png");
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 0px 13px;
  overflow: hidden;
  .bg_people_num {
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-top: 20px;
  }
  .bg_title {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    line-height: 12px;
    text-align: center;
    margin-top: 10px;
  }
  .bg_items {
    width: 100%;
    height: auto;
    display: flex;
    .bg_item {
      flex: 1;
      .bg_item_title {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
      }
      .bg_item_num {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        margin-top: 8px;
        text-align: center;
      }
    }
  }
}
.title {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(28, 36, 63, 1);
  margin: 25px 0px 21px 15px;
}
.list_item {
  width: 345px;
  height: 78px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0px 14px;
  display: flex;
  align-items: center;
  .list_item_avtar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .list_item_content {
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
}
</style>
