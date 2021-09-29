<template>
  <div class="comment">
    <div class="comment-item" v-for="(item, index) in commentList" :key="index">
      <div class="img">
        <img :src="item.user.avatarUrl" @click="getUser(item.user.userId)" />
      </div>
      <div class="info">
        <div class="namemsg">
          <span class="name" @click="getUser(item.user.userId)">{{
            item.user.nickname
          }}</span>
          <span class="time">{{ formatTime(item.time) }}</span>
        </div>
        <div class="comment-content">
          {{ item.content }}
        </div>
        <div class="mycontent" @click="getResource">
          {{ item.beRepliedContent }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getYMDHMS } from "../../utils/utils";
export default {
  props: {
    commentList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatTime(time) {
      return getYMDHMS(time);
    },
    getUser(id) {
      this.$router.push({ path: "/user", query: { id: id } });
      this.$bus.$emit("closeEmail");
    },
    getResource(){}
  }
};
</script>
<style lang="less" scoped>
.comment {
  width: 330px;
  height: 680px;
  overflow-y: scroll;
  .comment-item {
    width: 330px;
    height: 100px;
    padding: 10px 10px 20px 0px;
    display: flex;
    flex: 1;
    .img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .info {
      width: 270px;
      .namemsg {
        width: 270px;
        display: flex;
        justify-content: space-between;
        .name {
          font-size: 12px;
          color: rgb(54, 171, 248);
          margin-bottom: 5px;
          cursor: pointer;
        }
        .time {
          color: gainsboro;
          font-size: 12px;
        }
      }
      .comment-content {
        font-size: 12px;
        color: black;
      }
      .mycontent {
        background-color: whitesmoke;
        width: 270px;
        height: 30px;
        padding: 10px;
        font-size: 12px;
        margin-top: 5px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>