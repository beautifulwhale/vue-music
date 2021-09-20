<template>
  <div class="related-list">
    <div
      class="play-list"
      v-for="(item, index) in relatedPlayList"
      :key="index"
    >
      <play-list-item :play-item="item"></play-list-item>
    </div>
  </div>
</template>
<script>
import PlayListItem from "@/components/PlayListItem/PlayListItem";
export default {
  props: {
    relatedPlayList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    PlayListItem
  }
};
</script>
<style lang="less" scoped>
.related-list {
  width: 1200px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  .play-list{
    width: 200px;
    height: 250px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>