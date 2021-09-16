<template>
  <div class="comment-list">
    <div class="write-comment">
      <textarea
        placeholder="请说点什么吧..."
        class="textarea"
        v-model="commentContent"
      ></textarea>
      <div class="comment-button">
        <span class="iconfont icon-aite"></span>
        <span class="iconfont icon-huati"></span>
        <el-button type="danger" round size="mini" @click="submitComment"
          >评论</el-button
        >
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
      <span>最新评论({{ commentTotal }})</span>
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
import { sendComment } from "../../network/comment";
export default {
  props: {
    commentList: {
      type: Array,
      default: () => []
    },
    hotCommentList: {
      type: Array,
      default: () => []
    },
    commentTotal: {
      type: Number,
      default: 0
    },
    //评论歌单的ID
    playListId: {
      type: Number,
      default: 0
    },
    mvId: {
      type: Number,
      default: 0
    }
  },
  inject: ["reload"],
  data() {
    return {
      commentContent: "",
      tSend: 1,
      tDelete: 0,
      playListTye: 2,
      mvType: 1
    };
  },
  methods: {
    async sendComment(t, type, id, content) {
      const res = await sendComment(t, type, id, content);
      console.log(res);
    },
    submitComment() {
      this.sendComment(
        this.tSend,
        this.playListType,
        this.playListId,
        this.commentContent
      );
      this.sendComment(
        this.tSend,
        this.mvType,
        this.mvId,
        this.commentContent
      );

      this.commentContent = "";
      this.$message({
        message: "恭喜你评论成功！",
        type: "success"
      });
      this.$router.go(0);
    }
  },
  components: {
    CommentItem
  }
};
</script>
<style lang="less" scoped>
.comment-list {
  width: 1160px;
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