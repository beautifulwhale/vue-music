<template>
  <div>
    <div class="title">
      <h3>收藏的视频</h3>
      <span>({{ total }})</span>
    </div>
    <div class="collectmv">
      <div class="mvitem" v-for="item in collectMvList" :key="item.vid">
        <video-item
          v-if="item.type === 0"
          :video-item="item"
          @click.native="getMvPlay(item.vid)"
        ></video-item>
        <video-item :video-item="item" v-else></video-item>
      </div>
    </div>
  </div>
</template>
<script>
import VideoItem from "@/components/VideoList/VideoItem";
import { myCollectMv } from "../../network/mvdetails";
export default {
  data() {
    return {
      collectMvList: [],
      total: 0
    };
  },
  methods: {
    async getCollectMv() {
      const res = await myCollectMv();
      this.collectMvList = res.data;
      this.total = res.count;
    },
    getMvPlay(id) {
      this.$router.push({
        path: "/videodetails",
        query: { id: id }
      });
    }
  },
  created() {
    this.getCollectMv();
  },
  components: {
    VideoItem
  }
};
</script>
<style lang="less" scoped>
.title {
  margin-top: 30px;
  width: 300px;
  height: 40px;
  h3 {
    color: black;
    float: left;
    margin-right: 5px;
  }
  span {
    font-size: 12px;
    color: gray;
  }
}
.collectmv {
  width: 1200px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  .mvitem {
    margin-right: 20px;
  }
}
</style>