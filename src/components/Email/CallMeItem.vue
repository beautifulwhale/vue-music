<template>
  <div class="callmeitem">
    <div class="img">
      <img
        :src="callMeInfo.comment.user.avatarUrl"
        @click="getUser(callMeInfo.comment.user.userId)"
      />
    </div>
    <div class="info">
      <div class="name">
        <div class="nickname" @click="getUser(callMeInfo.comment.user.userId)">
          {{ callMeInfo.comment.user.nickname }}
        </div>
        <div class="time">{{ time }}</div>
      </div>
      <div class="comment">
        <span>评论:</span>
        {{ callMeInfo.comment.content }}
      </div>
      <div class="resource" @click="getPlayList(callMeInfo.resource.id)">
        <div class="img">
          <img :src="callMeInfo.resource.coverImgUrl" />
        </div>
        <div class="resource-info">
          <div class="name">{{ callMeInfo.resource.name }}</div>
          <div class="artist">by{{ callMeInfo.resource.creator.nickname }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getYMDHMS } from "../../utils/utils";
export default {
  props: {
    callMeItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    callMeInfo() {
      return JSON.parse(this.callMeItem.json);
    },
    time() {
      return getYMDHMS(this.callMeInfo.comment.time);
    }
  },
  methods: {
    getPlayList(id) {
      this.$router.push({ path: "/songdetails", query: { id: id } });
      this.$bus.$emit("closeEmail");
    },
    getUser(id) {
      this.$router.push({ path: "/user", query: { id: id } });
      this.$bus.$emit("closeEmail");
    }
  }
};
</script>
<style lang="less" scoped>
.callmeitem {
  width: 330px;
  height: 120px;
  display: flex;
  flex: 1;
  padding: 10px 10px 20px 5px;
  border-bottom: 1px solid gainsboro;
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
    .name {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      .nickname {
        color: rgb(54, 171, 248);
        margin-bottom: 10px;
        cursor: pointer;
      }
      .time {
        color: gainsboro;
      }
    }
    .comment {
      font-size: 12px;
      margin-bottom: 10px;
      span {
        margin-right: 5px;
      }
    }
    .resource {
      width: 260px;
      height: 50px;
      padding: 5px;
      display: flex;
      flex: 1;
      background-color: whitesmoke;
      border-radius: 5px;
      cursor: pointer;
      .img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 5px;
        }
      }
      .resource-info {
        width: 220px;
        padding-right: 10px;
        height: 40px;
        .name {
          font-size: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 5px;
        }
        .artist {
          color: gray;
          font-size: 12px;
        }
      }
    }
  }
}
</style>