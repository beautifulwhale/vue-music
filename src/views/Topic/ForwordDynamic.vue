<template>
  <div class="forword">
    <div class="info">
      <span class="artist">{{ hasFoworder.user.nickname }}</span>
      <span class="title">{{ dynamicInfo.msg }}</span>
    </div>
    <div
      class="songs"
      v-if="dynamicInfo.song && Object.keys(dynamicInfo.song).length !== 0"
      @click="getMusicPlay(dynamicInfo.song.id)"
    >
      <div class="img">
        <img :src="dynamicInfo.song.album.picUrl" />
      </div>
      <div class="info">
        <div class="songname">{{ dynamicInfo.song.name }}</div>
        <div class="artist">{{ dynamicInfo.song.artists[0].name }}</div>
      </div>
    </div>
    <div
      class="songs"
      v-if="
        dynamicInfo.playlist && Object.keys(dynamicInfo.playlist).length !== 0
      "
      @click="getPlayList(dynamicInfo.playlist.id)"
    >
      <div class="img">
        <img :src="dynamicInfo.playlist.coverImgUrl" />
      </div>
      <div class="info">
        <div class="songname">
          <span style="color:red">歌单</span> {{ dynamicInfo.playlist.name }}
        </div>
        <div class="artist">{{ dynamicInfo.playlist.creator.nickname }}</div>
      </div>
    </div>
    <div class="dynamicImg">
      <div
        class="origin-img"
        v-for="(item, index) in hasFoworder.pics"
        :key="index"
      >
        <img
          :src="item.originUrl"
          :class="{
            active: hasFoworder.pics.length === 1,
            active1: hasFoworder.pics.length === 2
          }"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForwordDynamic",
  props: {
    hasFoworder: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      dynamicInfo: {}
    };
  },
  created() {
    this.dynamicInfo = JSON.parse(this.hasFoworder.json);
    console.log(this.dynamicInfo);
  },
  methods: {
    //播放歌曲
    getMusicPlay(id) {
      this.$bus.$emit("getMusic", id);
    },
    //展开歌单
    getPlayList(id) {
      this.$router.push({ path: "/songdetails", query: { id: id } });
    }
  }
};
</script>
<style lang="less" scoped>
</style>