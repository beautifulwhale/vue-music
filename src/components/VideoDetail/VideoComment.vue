<template>
  <comments
    class="comment"
    :comment-list="mvComment"
    :hot-comment-list="mvHotComment"
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