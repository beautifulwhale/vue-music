<template>
  <div class="related-list">
    <div class="recom-song">
      <i class="iconfont icon-jian"></i>
      <span>推荐歌单</span>
    </div>
    <related-item
      v-for="(item, index) in relatedPlayList"
      :key="index"
      :related-item="item"
      class="related-item"
    ></related-item>
  </div>
</template>
<script>
import RelatedItem from "@/components/SongDetail/RelatedItem";
export default {
  props: {
    relatedPlayList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    RelatedItem
  }
};
</script>
<style lang="less" scoped>
.related-list {
  width: 1000px;
  .recom-song {
    .iconfont{
      font-size: 25px;
      color: black;
    }
    span {
      margin-left: 3px;
      color: black;
      font-size: 18px;
    }
  }
  .related-item {
    width: 400px;
    height: 200px;
   
  }
}
</style>