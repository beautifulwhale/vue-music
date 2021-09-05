<template>
  <div class="recom-song">
    <recom-title :title-name="title"></recom-title>
    <div class="recomsongul">
      <div
        v-for="(item, index) in recomSongList"
        :key="index"
        class="recomsong"
      >
        <play-list-item :recom-song-item="item"></play-list-item>
      </div>
    </div>
  </div>
</template>
<script>
import PlayListItem from "@/components/RecommendPlaylist/PlayListItem";
import RecomTitle from "@/components/RecomTitle/RecomTitle";
export default {
  data() {
    return {
      title: "推荐歌单"
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
    PlayListItem,
    RecomTitle
  }
};
</script>
<style lang="less" scoped>
.recom-song {
  width: 1400px;
  height: 872px;
  padding-left: 120px;
  padding-top: 10px;
  .recomsongul {
    width: 1320px;
    height: 872px;
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    .recomsong {
      flex: 1;
    }
  }
}
</style>

