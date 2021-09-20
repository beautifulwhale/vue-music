<template>
  <div class="recomsong">
    <div class="title">
      <h3>最新音乐<i class="el-icon-arrow-right"></i></h3>
    </div>
    <div
      v-for="(item, index) in recomSongList"
      :key="index"
      class="recomsongitem"
    >
      <recom-song-item
        :song-item="item"
        @click.native="getMusic(item.id)"
      ></recom-song-item>
    </div>
  </div>
</template>
<script>
import RecomSongItem from "@/components/RecomendSong/RecomSongItem";
export default {
  props: {
    recomSongList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    RecomSongItem,
  },
  methods: {
    getMusic(id) {
      this.$bus.$emit("getMusic", id);
      this.$store.commit("getSongList", this.recomSongList);
    }
  }
};
</script>

<style lang="less" scoped>
.recomsong {
  margin-top: 40px;
  width: 1200px;
  height: 500px;
  .title {
    color: black;
    margin-left: 20px;
  }
  .recomsongitem {
    width: 500px;
    height: 50px;
    margin: 20px;
    float: left;
    padding: 2px 5px 2px 0;
  }
}
</style>