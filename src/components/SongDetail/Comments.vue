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
      @zanComment="zanComment"
    ></comment-item>
    <div class="title">
      <span>最新评论({{ commentTotal || mvTotal || videoTotal }})</span>
    </div>
    <comment-item
      class="comment-item"
      v-for="(item, index) in commentList"
      :key="index"
      :comment-item="item"
      @zanComment="zanComment"
    ></comment-item>
  </div>
</template>
<script>
import CommentItem from "@/components/SongDetail/CommentItem";
import { sendComment, sendDyComment, likeComment } from "../../network/comment";
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
    //mv评论的总数量
    mvTotal: {
      type: Number,
      default: 0
    },
    //视频评论总数
    videoTotal: {
      type: Number,
      default: 0
    },
    //歌单的ID
    playListId: {
      type: Number,
      default: 0
    },
    //MV的ID
    mvId: {
      type: Number,
      default: 0
    },
    //视频的ID
    videoId: {
      type: String,
      default: ""
    },
    //动态ID
    threadId: {
      type: String,
      default: ""
    },
    //专辑ID
    albumId: {
      type: Number,
      default: 0
    },
    //歌曲ID
    musicId: {
      type: Number,
      default: 0
    }
  },
  inject: ["reload"],
  data() {
    return {
      commentContent: "",
      tSend: 1,
      playListType: 2,
      mvType: 1,
      videoType: 5,
      dynamicType: 6,
      albumType: 3,
      musicType: 0,
      tLike: 1
    };
  },
  methods: {
    //发送(删除)评论
    async sendComment(t, type, id, content) {
      const res = await sendComment(t, type, id, content);
    },
    //发送动态评论
    async sendDyComment(t, type, id, content) {
      const res = await sendDyComment(t, type, id, content);
    },
    //点赞评论
    async likeComment(t, type, id, cid) {
      const res = await likeComment(t, type, id, cid);
    },
    //发送评论
    submitComment() {
      this.sendComment(
        this.tSend,
        this.playListType,
        this.playListId,
        this.commentContent
      );
      this.sendComment(this.tSend, this.mvType, this.mvId, this.commentContent);
      this.sendComment(
        this.tSend,
        this.videoType,
        this.videoId,
        this.commentContent
      );
      this.sendDyComment(
        this.tSend,
        this.dynamicType,
        this.threadId,
        this.commentContent
      );
      this.sendComment(
        this.tSend,
        this.albumType,
        this.albumId,
        this.commentContent
      );
      this.sendComment(
        this.tSend,
        this.musicType,
        this.musicId,
        this.commentContent
      );
      this.commentContent = "";
      this.$message({
        message: "恭喜你评论成功！",
        type: "success"
      });
      this.$router.go(0);
    },
    //点赞评论
    zanComment(commentId) {
      this.likeComment(
        this.tLike,
        this.playListType,
        this.playListId,
        commentId
      );
      this.likeComment(this.tLike, this.mvType, this.mvId, commentId);
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
    height: 60px;
    margin: 15px 10px;
    display: flex;
    justify-content: flex-start;
  }
}
</style>