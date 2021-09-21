<template>
  <div class="dynamic">
    <div class="title">
      <h3>动态</h3>
      <el-button type="danger" size="mini" @click="writeDynamic"
        ><i class="el-icon-plus"></i>写动态</el-button
      >
    </div>
    <div class="container">
      <all-topic-event :all-event-list="allEventList"></all-topic-event>
      <write-dynamic
        v-show="isWrite"
        class="write-content"
        :is-show="isWrite"
        @closeCard="closeCard"
      ></write-dynamic>
    </div>
    <div class="rightmessage">
      <div class="userinfo">
        <div class="usertitle" @click="getUser">
          <img :src="avatarUrl" />
          <span>{{ nickname }}</span>
        </div>
        <div
          class="userlike"
          v-if="userInfo.profile && Object.keys(userInfo.profile).length !== 0"
        >
          <div
            class="dynamicnumber"
            @click="
              getUserDynamic(
                userInfo.profile.userId,
                userInfo.profile.nickname,
                userInfo.profile.eventCount
              )
            "
          >
            <div class="number">{{ userInfo.profile.eventCount }}</div>
            <div class="dyma">动态</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div
            class="guanzhu"
            @click="
              getUserFoucs(
                userInfo.profile.userId,
                userInfo.profile.nickname,
                userInfo.profile.follows
              )
            "
          >
            <div class="number">{{ userInfo.profile.follows }}</div>
            <div class="guan">关注</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div
            class="fans"
            @click="
              getUserFans(
                userInfo.profile.userId,
                userInfo.profile.nickname,
                userInfo.profile.followeds
              )
            "
          >
            <div class="number">{{ userInfo.profile.followeds }}</div>
            <div class="fan">粉丝</div>
          </div>
        </div>
      </div>
      <div class="hottopic">
        <hot-topic :hot-topic="hotTopicList"></hot-topic>
      </div>
    </div>
  </div>
</template>
<script>
import HotTopic from "@/views/Topic/HotTopic";
import AllTopicEvent from "@/views/Topic/AllTopicEvent";
import WriteDynamic from "@/components/WriteDynamic/WriteDynamic";
import { getUserDetail } from "../../network/user";
import { getHotTopic, getAllEvent } from "../../network/topic";
import { getUserFoucs } from "../../network/user";
export default {
  data() {
    return {
      avatarUrl: "",
      nickname: "",
      userId: 3243961585,
      hotTopicInfo: {
        limit: 5,
        offset: 0
      },
      hotTopicList: [],
      userInfo: {},
      limit: 30,
      offset: 0,
      myFollow: [],

      allEventList: [],
      eventInfo: {
        pagesize: 50,
        lasttime: -1
      },
      isWrite: false
    };
  },
  methods: {
    async getHotTopic(params) {
      const res = await getHotTopic(params.limit, params.offset);
      this.hotTopicList = res.hot;
    },
    //获取我的详细信息
    async getUserDetail(id) {
      const res = await getUserDetail(id);
      this.userInfo = res;
      this.limit = this.userInfo.profile.follows;
    },
    //获取我的关注
    async getMyFoucs(userId, limit, offset) {
      const res = await getUserFoucs(userId, limit, offset);
      this.myFollow = res.follow;
      let myFoucsArray = [];
      this.myFollow.forEach(item => myFoucsArray.push(item.userId));
      this.$store.commit("getMyFousc", myFoucsArray);
    },
    async getAllEvent(params) {
      const res = await getAllEvent(params.pagesize, params.lasttime);
      this.allEventList = res.event;
    },
    getUser() {
      this.$router.push({ path: "/user", query: { id: this.userId } });
    },
    //获取用户动态列表
    getUserDynamic(id, nickname, eventCount) {
      this.$router.push({
        path: "/userdynamic",
        query: { id: id, nickname: nickname, eventCount: eventCount }
      });
    },
    //获取用户关注列表
    getUserFoucs(id, nickname, follows) {
      this.$router.push({
        path: "/userfoucs",
        query: { id: id, nickname: nickname, follows: follows }
      });
    },
    //获取用户粉丝列表
    getUserFans(id, nickname, followeds) {
      this.$router.push({
        path: "/userfans",
        query: { id: id, nickname: nickname, followeds: followeds }
      });
    },
    writeDynamic() {
      this.isWrite = true;
    },
    closeCard() {
      this.isWrite = false;
    }
  },
  created() {
    this.avatarUrl = window.localStorage.getItem("avatarUrl");
    this.nickname = window.localStorage.getItem("nickname");
    this.getHotTopic(this.hotTopicInfo);
    this.getUserDetail(this.userId);
    this.getMyFoucs(this.userId, this.limit, this.offset);
    this.getAllEvent(this.eventInfo);
  },
  components: {
    HotTopic,
    AllTopicEvent,
    WriteDynamic
  }
};
</script>
<style lang="less" scoped>
.dynamic {
  width: 1050px;
  height: 700px;
  border-right: 1px solid gainsboro;
  padding: 20px 0;
  position: relative;
  .title {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    width: 1050px;
    height: 30px;
    h3 {
      color: black;
    }
    .el-button {
      border-radius: 20px;
    }
    .el-button--danger {
      background-color: red;
      border-color: red;
    }
  }
  .container {
    width: 1050px;
    position: relative;
    .write-content {
      position: absolute;
      top: 70px;
      left: 250px;
      z-index: 9;
    }
  }
  .rightmessage {
    width: 250px;
    height: 600px;
    position: absolute;
    right: -250px;
    top: 0px;
    .userinfo {
      width: 250px;
      height: 150px;
      padding: 30px 0px 10px 20px;
      background-color: whitesmoke;
      .usertitle {
        width: 250px;
        height: 50px;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          float: left;
          margin-right: 10px;
        }
        span {
          font-size: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .userlike {
        width: 200px;
        height: 40px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        flex: 1;
        cursor: pointer;
        .number {
          text-align: center;
          margin-bottom: 10px;
        }
        .el-divider--vertical {
          height: 40px;
        }
      }
    }
    .hottopic {
      width: 250px;
      height: 500px;
    }
  }
}
</style>