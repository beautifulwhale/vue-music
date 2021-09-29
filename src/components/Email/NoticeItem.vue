<template>
  <div class="noticeitem">
    <div class="img">
      <img :src="notice.user.avatarUrl" @click="getUser(notice.user.userId)" />
    </div>
    <div class="info">
      <div class="name">
        <div>
          <span class="nickname" @click="getUser(notice.user.userId)">{{
            notice.user.nickname
          }}</span>
          <span class="label" v-if="notice.type === 10">{{
            notice.generalNotice.actionDesc
          }}</span>
          <span class="label" v-if="notice.type === 2">收藏了你的歌单</span>
          <span class="label" v-if="notice.type === 6">赞了你的评论</span>
          <span class="label" v-if="notice.type === 1">赞了你的动态</span>
        </div>
        <span class="time">
          {{ formatTime(noticeItem.time) }}
        </span>
      </div>
      <div class="content">
        <span class="label" v-if="notice.type === 10">{{
          notice.generalNotice.content
        }}</span>
        <span class="label" v-if="notice.type === 2">{{
          notice.playlist.name
        }}</span>
        <span class="label" v-if="notice.type === 6">{{
          notice.comment.content
        }}</span>
        <span class="label" v-if="notice.type === 1">{{ dynamic }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getYMDHMS } from "../../utils/utils";
export default {
  props: {
    noticeItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    formatTime(time) {
      return getYMDHMS(time);
    },
    getUser(id) {
      this.$router.push({ path: "/user", query: { id: id } });
      this.$bus.$emit("closeEmail");
    }
  },
  computed: {
    notice() {
      return JSON.parse(this.noticeItem.notice);
    },
    dynamic() {
      return (
        JSON.parse(this.notice.track.json).msg ||
        JSON.parse(this.notice.track.json).playlist.name ||
        JSON.parse(this.notice.track.json).song.name
      );
    }
  }
};
</script>
<style lang="less" scoped>
.noticeitem {
  width: 300px;
  height: 50px;
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
    width: 260px;
    height: 50px;
    .name {
      width: 260px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      .nickname {
        color: rgb(54, 171, 248);
        cursor: pointer;
      }
      .label {
        color: gainsboro;
      }
      .time {
        color: gainsboro;
      }
    }
    .content {
      font-size: 12px;
      color: #000;
    }
  }
}
</style>