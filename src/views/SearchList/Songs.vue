<template>
  <div>
    <detail-list :song-list="songs" v-if="songs.length"></detail-list>
  </div>
</template>
<script>
import DetailList from "@/components/SongDetail/DetailList";
export default {
  props: {
    songs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    DetailList
  }
};
</script>
<style lang="less" scoped>
</style>