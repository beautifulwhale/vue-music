<template>
  <div class="recomsong">
    <recom-title :title-name="title"></recom-title>
    <div
      v-for="(item, index) in recomSongList"
      :key="index"
      class="recomsongitem"
    >
      <recom-song-item :song-item="item"></recom-song-item>
    </div>
  </div>
</template>
<script>
import RecomSongItem from "@/components/RecomendSong/RecomSongItem";
import RecomTitle from "@/components/RecomTitle/RecomTitle";
export default {
  data() {
    return {
      title: "推荐歌曲"
    };
  },
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
    RecomTitle
  }
};
</script>

<style lang="less" scoped>
.recomsong {
  margin-left: 120px;
  margin-top: 40px;
  width: 1332px;
  height: 550px;
  .recomsongitem {
    width: 642px;
    margin: 10px;
    float: left;
    padding: 2px 5px 2px 0;
  }
}
</style>