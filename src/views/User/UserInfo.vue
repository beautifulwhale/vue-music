<template>
  <div class="userinfo" v-if="Object.keys(userInfo).length !== 0">
    <div class="img">
      <img :src="userInfo.profile.avatarUrl" alt="" />
    </div>
    <div class="info">
      <div class="user-message">
        <div class="nickname">{{ userInfo.profile.nickname }}</div>
        <div class="logo">
          <div
            class="indentity"
            v-if="
              userInfo.profile.avatarDetail &&
                Object.keys(userInfo.profile.avatarDetail).length !== 0
            "
          >
            <img :src="userInfo.profile.avatarDetail.identityIconUrl" />
            <span>{{ userInfo.profile.mainAuthType.desc }}</span>
          </div>
          <div class="lg">
            <div class="level">
              <span>Lv{{ userInfo.level }}</span>
            </div>
            <div class="gender">
              <span
                class="iconfont icon-nanxing1"
                v-if="userInfo.profile.gender === 1"
              ></span>
              <span class="iconfont icon-nvxing1" v-else></span>
            </div>
          </div>
          <div class="send">
            <el-button round size="mini"
              ><i class="iconfont icon-youjian"></i>发邮件</el-button
            >
            <el-button round size="mini" class="foucsbutton"
              ><i class="el-icon-plus"></i>关注</el-button
            >
          </div>
        </div>
      </div>
      <div class="user-opertion">
        <div class="userlike">
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
        <div class="bing">
          <span class="bangding">社交网络:未绑定</span>
        </div>
        <div class="desc">
          <div class="introduct">个人介绍:{{ userInfo.profile.signature }}</div>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
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
    }
  }
};
</script>
<style lang="less" scoped>
.userinfo {
  width: 1260px;
  height: 200px;
  margin-top: 20px;
  display: flex;
  flex: 1;
  .img {
    width: 200px;
    height: 200px;
    margin-right: 30px;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
  .info {
    width: 1040px;
    height: 200px;
    .user-message {
      width: 1040px;
      height: 80px;
      border-bottom: 1px solid rgb(202, 202, 202);
      .nickname {
        font-size: 22px;
        color: black;
        font-weight: bold;
      }
      .logo {
        width: 1040px;
        height: 35px;
        margin-top: 10px;
        display: flex;
        flex: 1;
        align-items: center;
        .indentity {
          width: 200px;
          height: 20px;
          img {
            width: 15px;
            height: 15px;
          }
          span {
            color: rgb(231, 124, 124);
            font-size: 12px;
          }
        }
        .lg {
          width: 60px;
          height: 20px;
          display: flex;
          flex: 1;
          .level {
            width: 30px;
            height: 20px;
            text-align: center;
            background-color: whitesmoke;
            border-radius: 10px;
            margin-right: 10px;
            font-size: 10px;
            padding: 5px;
          }
          .gender {
            font-size: 15px;
            .icon-nanxing1 {
              color: blue;
            }
            .icon-nvxing1 {
              color: hotpink;
            }
          }
        }
        .foucsbutton {
          i {
            color: red;
            margin-right: 5px;
          }
        }
      }
    }
    .user-opertion {
      width: 1040px;
      height: 120px;
      .userlike {
        width: 200px;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        flex: 1;
        cursor: pointer;
        .number {
          text-align: center;
          margin-bottom: 10px;
        }
        .el-divider--vertical {
          color: whitesmoke;
          height: 40px;
        }
      }
      .bing {
        font-size: 13px;
        margin-bottom: 10px;
      }
      .desc {
        width: 1000px;
        height: 20px;
        .introduct {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 13px;
        }
      }
    }
  }
}
</style>