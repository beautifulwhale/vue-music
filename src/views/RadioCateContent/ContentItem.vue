<template>
  <div class="content">
    <div class="img">
      <img :src="contentItem.picUrl" />
    </div>
    <div class="info">
      <div class="name">{{ contentItem.name }}</div>
      <div class="desc">{{ contentItem.rcmdtext }}</div>
      <div class="msg">
        <span class="voice">声音: {{ contentItem.programCount }}</span>
        <span class="collect">收藏: {{ contentItem.subCount }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contentItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  width: 600px;
  height: 150px;
  display: flex;
  flex: 1;
  margin-top: 20px;
  .img {
    width: 150px;
    height: 150px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 5px;
    }
  }
  .info{
      width: 450px;
      height: 150px;
      margin-left: 10px;
      .name{
          font-size: 14px;
          margin-top: 30px;
          margin-bottom: 20px;
      }
      .desc{
          font-size: 13px;
          color: rgb(172, 172, 172);
          margin-bottom: 10px;
      }
      .msg{
          font-size: 13px;
          color: rgb(172, 172, 172);
      }
  }
}
</style>