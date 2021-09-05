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
      class='related-item'
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
  width: 380px;
  .recom-song {
    font-size: 14px;
    span {
      margin-left: 3px;
    }
  }
//   .related-item{

//   }
}
</style>