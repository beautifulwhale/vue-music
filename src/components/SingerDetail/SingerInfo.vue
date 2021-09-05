<template>
  <div>
    <div class="singer-desc">
      <div class="img">
        <img :src="singerInfo.cover" />
      </div>
      <div class="info">
        <div class="name">
          <h2>{{ singerInfo.name }}</h2>
        </div>
        <div class="products">
          <div>
            <i class="iconfont icon-gequxinshang"></i>
            <div class="size">{{ singerInfo.musicSize }}</div>
          </div>
          <div>
            <i class="iconfont icon-zhuanji"></i>
            <div class="size">{{ singerInfo.albumSize }}</div>
          </div>
          <div>
            <i class="iconfont icon-shexiangji"></i>
            <div class="size">{{ singerInfo.mvSize }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    singerInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.singer-desc {
  width: 1350px;
  height: 367px;
  margin: 80px auto 0;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  .img {
    margin: 0 auto ;
    width: 250px;
    height: 250px;
    img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }
  }
  .info{
      width: 390px;
      height: 97px;
      margin: 0 auto;
    text-align: center;
    .products{
        width: 390px;
        height: 56px;
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            font-size: 30px;
            color: gainsboro;
        }
        .size{
            margin-top: 5px;
        }
    }
  }
}
</style>