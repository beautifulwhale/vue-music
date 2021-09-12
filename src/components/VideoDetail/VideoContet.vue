<template>
  <div class="videoplay">
    <h3>视频详情</h3>
    <video
      width="700"
      height="400"
      :src="videoUrl"
      controls
      autoplay
    ></video>
  </div>
</template>
<script>
export default {
  props: {
    videoUrl: {
      type: String,
      default: ""
    }
  },
  methods: {
  },
  created(){
  }

};
</script>
<style lang="less" scoped>
.videoplay {
  width: 700px;
  height: 400px;
  margin-top: 70px;
  margin-bottom: 50px;
  h3{
    margin-bottom: 10px;
    color: black;
  }
}
</style>