<template>
  <div class="comment-list">
    <div class="write-comment">
      <textarea placeholder="请说点什么吧..." class="textarea"></textarea>
      <div class="comment-button">
        <span class="iconfont icon-aite"></span>
        <span class="iconfont icon-huati"></span>
        <el-button type="danger" round size="mini">评论</el-button>
      </div>
    </div>
    <div class="title" v-if="hotCommentList.length">
      <span>精彩评论({{ hotCommentList.length }})</span>
    </div>
    <comment-item
      class="comment-item"
      v-for="item in hotCommentList"
      :key="item.commentId"
      :comment-item="item"
    ></comment-item>
    <div class="title">
      <span>最新评论({{ commentList.length }})</span>
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
    },
    hotCommentList: {
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
  width: 1200px;
  margin-top: 10px;
  .write-comment {
    width: 1100px;
    height: 100px;
    margin-bottom: 30px;
    .textarea {
      width: 1100px;
      height: 70px;
    }
    .comment-button {
      width: 1100px;
      height: 30px;
      margin-top: 10px;
      .icon-aite {
        margin-right: 10px;
      }
      .icon-huati {
        margin-right: 980px;
      }
    }
  }

  .title {
    font-size: 16px;
    color: black;
    font-weight: bold;
    span {
      margin-left: 5px;
    }
  }
  .comment-item {
    width: 1200px;
    height: 70px;
    margin: 15px 10px;
    display: flex;
    justify-content: flex-start;
  }
}

</style>