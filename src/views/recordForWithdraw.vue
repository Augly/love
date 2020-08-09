<template>
  <div>
    <div class="bg_wrap">
      <p class="bg_title">账户余额</p>
      <div class="money_group">
        <h5>450.00</h5>
        <van-icon
          color="#FFFFFF"
          class="iconfont f17"
          class-prefix="iconai44"
          name="iconai44"
        />
      </div>
      <div class="bg_items">
        <div class="item">
          <van-circle
            :value="30"
            layer-color="#A0A7C0"
            color="#FFFFFF"
            size="40px"
            stroke-linecap="sqaure"
            :clockwise="false"
          />
          <div class="item_res">
            <p>今日收益</p>
            <h5>502.00</h5>
          </div>
        </div>
        <div class="item">
          <van-circle
            :value="70"
            layer-color="#A0A7C0"
            color="#FFE066"
            size="40px"
            stroke-linecap="sqaure"
            :clockwise="false"
          />
          <div class="item_res">
            <p>累计收益</p>
            <h5>502.00</h5>
          </div>
        </div>
      </div>
    </div>
    <h5 class="title">提现记录</h5>
    <div>
      <div class="list_item">
        <div class="list_item_avtar"></div>
        <div class="list_item_content">
          <p class="name">刘伟</p>
          <p class="join_time">2020-07-22 12:00:00</p>
        </div>
        <div class="list_item_extra">
          <p class="success">提现成功</p>
          <h5 class="success">-20.00</h5>
        </div>
      </div>
      <div class="list_item">
        <div class="list_item_avtar"></div>
        <div class="list_item_content">
          <p class="name">刘伟</p>
          <p class="join_time">2020-07-22 12:00:00</p>
        </div>
        <div class="list_item_extra">
          <p class="error">提现失败</p>
          <h5 class="error">-20.00</h5>
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
  background-image: url("~@/assets/image/record.png");
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 20px 15px 0px 15px;
  overflow: hidden;
  .bg_title {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(248, 249, 253, 0.7);
  }
  .money_group {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h5 {
      font-size: 27px;
      font-family: Grundig DIN;
      font-weight: 500;
      color: rgba(248, 249, 253, 1);
      &::before {
        content: "￥";
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(248, 249, 253, 1);
        margin-right: 2px;
      }
    }
  }
  .bg_items {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    .item {
      flex: 1;
      display: flex;
      align-items: center;
      .item_res {
        margin-left: 11px;
        display: flex;
        height: 40px;
        flex-direction: column;
        justify-content: space-around;
        p {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(248, 249, 253, 0.7);
        }
        h5 {
          font-size: 16px;
          font-family: Grundig DIN;
          font-weight: 500;
          color: rgba(248, 249, 253, 1);
          &::before {
            content: "￥";
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            margin-right: 2px;
          }
        }
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
    width: 160px;
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
  .list_item_extra {
    margin-left: auto;
    p {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
    }
    p.success {
      color: rgba(22, 165, 59, 1);
    }
    p.error {
      color: rgba(241, 53, 53, 1);
    }
    h5 {
      margin-top: 8px;
      font-size: 16px;
      font-family: Grundig DIN;
      font-weight: 500;
      color: rgba(28, 36, 63, 1);
    }
    h5.success {
      color: rgba(248, 249, 253, 1);
    }
    h5.error {
      color: rgba(160, 167, 192, 1);
    }
  }
}
</style>
