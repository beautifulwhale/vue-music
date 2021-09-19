<template>
  <div>
    <!-- <topic-event-item></topic-event-item> -->
    <comments
      :comment-list="dynamicComment"
      :hot-comment-list="hotComment"
      :comment-total="commentTotal"
      :thread-id="String(threadId)"
    ></comments>
  </div>
</template>
<script>
import Comments from "@/components/SongDetail/Comments";
import TopicEventItem from "@/views/Topic/TopicEventItem";
import { getDynamicComment } from "../../network/dynamic";
export default {
  data() {
    return {
      threadId: 0,
      dynamicComment: [],
      hotComment: [],
      commentTotal: 0
    };
  },
  methods: {
    async getDynamicComment(id) {
      const res = await getDynamicComment(id);
      this.dynamicComment = res.comments;
      this.hotComment = res.hotComments;
      this.commentTotal = res.total;
    }
  },
  created() {
    this.threadId = this.$route.query.id;
    this.getDynamicComment(this.threadId);
  },
  components: {
    Comments,
    TopicEventItem
  }
};
</script>
<style lang="less" scoped>
</style>