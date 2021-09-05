<template>
  <div class="comment-list">
    <div class="title">
      <i class="iconfont icon-retouch"></i>
      <span>热门评论</span>
    </div>
    <comment-item
      class="comment-item"
      v-for="(item, index) in commentList"
      :key="index"
      :comment-item="item"
    ></comment-item>
  </div>
</template>
<script>
import CommentItem from "@/components/SongDetail/CommentItem";
export default {
  props: {
    commentList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CommentItem
  }
};
</script>
<style lang="less" scoped>
.comment-list {
  width: 380px;
  .title {
    font-size: 14px;
    span {
      margin-left: 5px;
    }
  }
  .comment-item {
    width: 332px;
    height: 71px;
    margin: 15px 10px;
    display: flex;
    justify-content: flex-start;
  }
}
</style>