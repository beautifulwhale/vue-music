<template>
  <div class="showitem">
    <div class="img">
      <img :src="showItem.coverUrl" alt="" />
      <div class="play">
        <span class="iconfont icon-bofang1"></span>
      </div>
    </div>
    <div class="info">
      <div class="name">{{ showItem.name }}</div>
      <div class="art">
        <span class="label">{{ showItem.radio.category }}</span>
        <span class="artist">{{ showItem.dj.nickname }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
 
};
</script>
<style lang="less" scoped>
.showitem {
  width: 400px;
  height: 70px;
  display: flex;
  flex: 1;
  cursor: pointer;
  .img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    position: relative;
    img {
      width: 70px;
      height: 70px;
      border-radius: 5px;
    }
    .play {
      position: absolute;
      bottom: 5px;
      right: 10px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #fff;
      text-align: center;
      line-height: 25px;
      span {
        color: red;
        font-size: 13px;
      }
    }
  }
  .info {
    width: 300px;
    height: 70px;
    .name {
      margin-top: 10px;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .art {
      font-size: 12px;
      .label {
        border: 1px solid gainsboro;
        color: gainsboro;
        padding: 1px;
        margin-right: 10px;
      }
      .artist {
        color: gainsboro;
      }
    }
  }
}
</style>