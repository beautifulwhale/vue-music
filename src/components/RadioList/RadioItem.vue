<template>
  <div class="radio-item" @click="getRadio(radioItem.id)">
    <div class="img">
      <img :src="radioItem.picUrl" />
      <div class="play-count">
        <span class="iconfont icon-bofangliang"></span>
        <span>{{ playCount }}</span>
      </div>
    </div>
    <div class="info">
      <span class="cate">{{ radioItem.category }}</span>
      <div class="name">{{ radioItem.name }}</div>
    </div>
  </div>
</template>
<script>
import { tranNumber } from "../../utils/utils";
export default {
  props: {
    radioItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    playCount() {
      return tranNumber(this.radioItem.playCount || this.radioItem.subCount);
    }
  },
  methods: {
    getRadio(id) {
      this.$router.push({ path: "/radiodetail", query: { id } });
    }
  }
};
</script>
<style lang="less" scoped>
.radio-item {
  width: 180px;
  height: 250px;
  cursor: pointer;
  .img {
    width: 180px;
    height: 180px;
    margin-bottom: 15px;
    position: relative;
    img {
      width: 180px;
      height: 180px;
      border-radius: 10px;
    }
    .play-count {
      position: absolute;
      top: 8px;
      right: 8px;
      color: white;
      font-size: 10px;
    }
  }
  .info {
    width: 180px;
    height: 55px;
    .cate {
      font-size: 12px;
      color: rgb(187, 187, 187);
      border: 1px solid rgb(179, 179, 179);
      float: left;
      margin-right: 10px;
    }
  }
}
</style>