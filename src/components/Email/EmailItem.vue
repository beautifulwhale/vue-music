<template>
  <div class="email-item">
    <div class="avatar">
      <img
        :src="emailItem.fromUser.avatarUrl"
        @click="getUser(emailItem.fromUser.userId)"
      />
    </div>
    <div class="info" @click="sendEmail(emailItem.fromUser)">
      <div class="name">
        <span class="user">{{ emailItem.fromUser.nickname }}</span>
        <span class="time">{{ lastMsgTime }}</span>
      </div>
      <div class="lastmsg">{{ lastMsg }}</div>
    </div>
  </div>
</template>
<script>
import { getYMDHMS } from "../../utils/utils";
export default {
  props: {
    emailItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    lastMsg() {
      return JSON.parse(this.emailItem.lastMsg).msg;
    },
    lastMsgTime() {
      return getYMDHMS(this.emailItem.lastMsgTime);
    }
  },
  methods: {
    sendEmail(user) {
      this.$bus.$emit("sendEmail",user);
    },
    getUser(id) {
      this.$router.push({ path: "/user", query: { id: id } });
      this.$bus.$emit("closeEmail");
    }
  }
};
</script>
<style lang="less" scoped>
.email-item {
  width: 330px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex: 1;
  .avatar {
    width: 40px;
    height: 50px;
    margin-right: 10px;
    margin-top: 10px;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .info {
    width: 270px;
    padding: 10px 10px 0 0;
    border-bottom: 1px solid gainsboro;
    .name {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      .user {
        color: rgb(54, 171, 248);
      }
      .time {
        color: gainsboro;
      }
    }
    .lastmsg {
      font-size: 12px;
      width: 270px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: black;
    }
  }
}
</style>