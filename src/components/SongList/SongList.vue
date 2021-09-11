<template>
  <div class="song-list">
    <div class="song-listitem" v-for="(item, index) in songList" :key="index">
      <play-list-item :recom-song-item="item"></play-list-item>
    </div>
  </div>
</template>
<script>
import PlayListItem from "@/components/RecommendPlaylist/PlayListItem";
export default {
  props: {
    songList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    PlayListItem
  }
};
</script>
<style lang="less" scoped>
 .song-list {
    width: 1200px;
    height: 1100px;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    .song-listitem {
      flex: 1;
    }
  }
</style>