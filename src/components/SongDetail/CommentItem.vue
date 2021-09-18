<template>
  <div class="comment-item">
    <div class="avatar">
      <img
        :src="commentItem.user.avatarUrl"
        @click="getUser(commentItem.user.userId)"
      />
    </div>
    <div class="info">
      <div class="say">
        <div class="name" @click="getUser(commentItem.user.userId)">
          {{ commentItem.user.nickname }}:
        </div>
        <div class="content">{{ commentItem.content }}</div>
      </div>
      <div class="time">
        {{ commentTime }}
      </div>
      <div class="opertion">
        <span
          class="iconfont icon-zan"
          @click="zanComment(commentItem.commentId)"
          :style="
            isLiked && currentId === commentItem.commentId ? 'color:red' : ''
          "
        >
          <span class="zanCount" v-if="commentItem.likedCount !== 0">{{
            commentItem.likedCount
          }}</span>
        </span>
        <span class="iconfont icon-forward1"></span>
        <span class="iconfont icon-huifu"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { dateFormat } from "../../utils/utils";
export default {
  props: {
    commentItem: {
      type: Object,
      default() {
        return {};
      }
    }
    // isLiked: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      currentId: 0,
      isLiked: false
    };
  },
  computed: {
    commentTime() {
      return dateFormat(this.commentItem.time);
    }
  },
  methods: {
    zanComment(commentId) {
      this.$emit("zanComment", commentId);
      this.currentId = commentId;
      if (!this.isLiked) {
        this.commentItem.likedCount += 1;
        this.isLiked = true;
      } else {
        if (this.commentItem.likedCount !== 0) {
          this.commentItem.likedCount -= 1;
          this.isLiked = false;
          this.currentId = 0;
        }
      }
    },
    getUser(id) {
      this.$router.push({ path: "/user", query: { id: id } });
    }
  }
};
</script>
<style lang="less" scoped>
.comment-item {
  width: 1200px;
  height: 60px;
  border-bottom: 1px solid gainsboro;
  display: flex;
  flex: 1;
  .avatar {
    margin-right: 15px;
    cursor: pointer;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .info {
    width: 1100px;
    height: 50px;
    .say {
      width: 1100px;
      .name {
        font-size: 12px;
        color: tomato;
        float: left;
        margin-right: 5px;
        cursor: pointer;
      }
      .content {
        width: 1100px;
        font-size: 12px;
      }
    }
    .time {
      margin-top: 10px;
      color: gray;
      font-size: 12px;
      float: left;
      margin-right: 740px;
    }
    .opertion {
      width: 160px;
      height: 25px;
      padding: 0 5px;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      .iconfont {
        width: 50px;
        height: 25px;
        margin-right: 10px;
        font-size: 14px;
        color: gray;
        .zanCount {
          margin-left: 3px;
        }
      }
    }
  }
}
</style>