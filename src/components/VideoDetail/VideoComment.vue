<template>
  <comments
    class="comment"
    :comment-list="mvComment"
    :hot-comment-list="mvHotComment"
    :mvId="Number(mvId)"
    :videoId="videoId"
    :mv-total="mvTotal"
    :video-total="videoTotal"
  ></comments>
</template>
<script>
import Comments from "@/components/SongDetail/Comments";
export default {
  props: {
    mvComment: {
      type: Array,
      default: () => []
    },
    mvHotComment: {
      type: Array,
      default: () => []
    },
    //mv评论的总数
    mvTotal: {
      type: Number,
      default: 0
    },
    //视频评论总数
    videoTotal: {
      type: Number,
      default: 0
    },
    mvId: {
      type: Number,
      default: 0
    },
    videoId: {
      type: String,
      default: ""
    }
  },
  components: {
    Comments
  }
};
</script>
<style lang="less" scoped>
.comment {
  margin-left: 20px;
}
</style>