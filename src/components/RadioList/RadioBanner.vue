<template>
  <div class="banner">
    <div class="banneritem" v-for="(item, index) in bannerList" :key="index">
      <div class="img">
        <img :src="item.pic" />
        <span class="label">{{ item.typeTitle }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bannerList: {
      type: Array,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="less" scoped>
.banner {
  widows: 1200px;
  height: 120px;
  display: flex;
  flex: 1;
  margin-bottom: 50px;
  .banneritem {
    width: 380px;
    height: 150px;
    cursor: pointer;
    margin-right: 10px;
    .img {
      width: 380px;
      height: 150px;
      position: relative;
      img {
        width: 380px;
        height: 150px;
        border-radius: 10px;
      }
      .label {
        width: 70px;
        height: 20px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: tomato;
        font-size: 13px;
        color: #fff;
        padding: 0 5px;
        text-align: center;
        line-height: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>