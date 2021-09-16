<template>
  <div class="videolist">
    <div class="videoitem" v-for="item in videoList" :key="item.vid">
      <video-item :video-item="item.data"></video-item>
    </div>
  </div>
</template>
<script>
import VideoItem from "@/components/VideoList/VideoItem";
export default {
  props: {
    videoList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    VideoItem
  }
};
</script>
<style lang="less" scoped>
.videolist {
  width: 1160px;
  height: 480px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  .videoitem {
    width: 250px;
    height: 200px;
    margin-right: 20px;
    margin-top: 20px;
  }
}
</style>