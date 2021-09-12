<template>
  <div class="video" v-if="recomVideo.length">
    <div class="title">
      <h3>相关视频</h3>
    </div>
    <div class="video-item" v-for="item in recomVideo" :key="item.vid">
      <video-recom-item
        @click.native="playVideo(item.vid)"
        :video-item="item"
      ></video-recom-item>
    </div>
  </div>
</template>
<script>
import VideoRecomItem from "@/components/VideoDetail/VideoRecomItem";
export default {
  props: {
    recomVideo: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    playVideo(vid) {
      // this.$router.push({type:'/videodetails',query})
      if(this.recomVideo[0].vid){
        this.$emit("playVideo", vid);
      }
    }
  },
  components: {
    VideoRecomItem
  }
};
</script>
<style lang="less" scoped>
.video {
  width: 350px;
  margin-top: 70px;
  .title {
    color: black;
  }
  .video-item {
    width: 350px;
    height: 120px;
    margin-bottom: 20px;
  }
}
</style>