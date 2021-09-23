<template>
  <div class="mvitem" @click="getMvPlay(mvItem.id)">
    <div class="img">
      <img :src="imgUrl" />
      <span class="playCount">
        <i class="iconfont icon-bofangliang"></i>{{ playCount }}</span
      >
    </div>
    <div class="info">
      <div class="name">{{ mvItem.name }}</div>
      <div class="artistName">by{{ mvItem.artistName }}</div>
    </div>
  </div>
</template>
<script>
import { tranNumber } from "../../utils/utils";
export default {
  props: {
    mvItem: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    playCount() {
      return tranNumber(this.mvItem.playCount, 0);
    },
    imgUrl() {
      return this.mvItem.picUrl || this.mvItem.cover || this.mvItem.imgurl;
    }
  },
  methods: {
    getMvPlay(id) {
      this.$router.push({
        path: "/videodetails",
        query: { id: id }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.mvitem {
  width: 250px;
  height: 220px;
  cursor: pointer;
  .img {
    width: 250px;
    height: 150px;
    position: relative;
    img {
      width: 250px;
      height: 150px;
      border-radius: 10px;
    }
    .playCount {
      position: absolute;
      top: 5px;
      right: 5px;
      color: white;
      font-size: 12px;
      .iconfont {
        font-size: 13px;
      }
    }
  }
  .info {
    width: 250px;
    height: 20px;
    .name {
      margin-top: 10px;
      font-size: 15px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .artistName {
      margin-top: 5px;
      font-size: 12px;
      color: #000;
    }
  }
}
</style>