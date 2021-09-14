<template>
  <div class="cloudmusic">
    <recom-title :title-name="title"></recom-title>
    <div class="cloud-music-item" v-for="item in cloudList" :key="item.id">
      <cloud-music-item :cloud-item="item"></cloud-music-item>
    </div>
  </div>
</template>
<script>
import RecomTitle from "@/components/RecomTitle/RecomTitle";
import CloudMusicItem from "@/components/RankDetail/CloudMusicItem";
export default {
  data() {
    return {
      title: "云音乐特色榜"
    };
  },
  props: {
    cloudList: {
      type: Array
    }
  },
  methods: {},
  components: {
    RecomTitle,
    CloudMusicItem
  }
};
</script>
<style lang="less" scoped>
.cloudmusic {
  width: 1200px;
  height: 1400px;
  margin-top: 70px;
  margin-left: 50px;
  .cloud-music-item {
    width: 1200px;
    height: 320px;
    // margin-bottom: 30px;
    margin-left: 20px;
  }
}
</style>