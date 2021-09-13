<template>
  <div>
    <play-list :recom-song-list="albums"></play-list>
  </div>
</template>
<script>
import PlayList from "@/components/RecommendPlaylist/PlayList";
export default {
  props: {
    albums: {
      type: Array,
      default: () => []
    }
  },
  components: {
    PlayList
  }
};
</script>
<style lang="less" scoped>
</style>