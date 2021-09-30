<template>
  <div class="sendemail" v-show="isSend">
    <div class="navbar">
      <span class="el-icon-arrow-left" @click="goback"></span>
      <span class="username">{{ user.nickname }}</span>
    </div>
    <div class="content">
      <div class="message">
        <div class="msg-item" v-for="item in newMsgList" :key="item.id">
          <div class="time">{{ formatTime(item.time) }}</div>
          <div v-if="item.toUser.userId === 3243961585" class="friend-say">
            <img :src="item.fromUser.avatarUrl" />
            <div class="friends">
              <span>{{ JSON.parse(item.msg).msg }}</span>
            </div>
          </div>
          <div class="mySay" v-else>
            <div class="my-content">
              <span>{{ JSON.parse(item.msg).msg }}</span>
            </div>
            <img :src="item.fromUser.avatarUrl" />
          </div>
        </div>
      </div>
      <div class="input">
        <el-input
          type="textarea"
          :placeholder="baseMsg"
          v-model="msg"
          maxlength="30"
          show-word-limit
          rows="3"
        >
        </el-input>
      </div>
      <div class="button">
        <el-button size="mini" round @click="sendMsg">发送</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { sendEmail } from "../../network/email";
import { dateFormat } from "../../utils/utils";
export default {
  props: {
    isSend: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      userId: 3243961585,
      limit: 30,
      before: 0,
      msg: "",
      newMsgList: [],
      oldMsgList: []
    };
  },
  computed: {
    baseMsg() {
      return "回复 " + this.user.nickname;
    }
  },
  methods: {
    // async getContent(id, limit, before) {
    //   const res = await letterContent(id, limit, before);
    //   this.oldMsgList = res.msgs;
    // },
    async sendEmail(id, msg) {
      const res = await sendEmail(id, msg);
      this.newMsgList = res.newMsgs.reverse();
    },
    sendMsg() {
      this.sendEmail(this.user.userId, this.msg);
      this.msg = "";
    },
    formatTime(time) {
      return dateFormat(time);
    },
    goback() {
      this.$bus.$emit("goback");
      this.newMsgList = [];
    }
  }
};
</script>
<style lang="less" scoped>
.sendemail {
  width: 350px;
  height: 680px;
  background-color: #ffffff;
  position: fixed;
  top: 70px;
  right: 0;
  padding: 20px 0 0 20px;
  box-shadow: 0 2px 1px #000;
  .navbar {
    width: 350px;
    height: 50px;
    .el-icon-arrow-left {
      cursor: pointer;
    }
    .username {
      margin-left: 100px;
      font-size: 12px;
      font-weight: bold;
    }
  }
  .content {
    width: 320px;
    height: 630px;
    .message {
      width: 320px;
      height: 450px;
      overflow-y: scroll;
      .msg-item {
        width: 320px;
        height: 60px;
        margin-bottom: 10px;
        .time {
          width: 320px;
          text-align: center;
          font-size: 10px;
          color: gainsboro;
          height: 30px;
        }
        .friend-say {
          width: 320px;
          height: 60px;
          display: flex;
          flex: 1;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .friends {
            height: 35px;
            font-size: 12px;
            line-height: 35px;
            span {
              padding: 5px;
              border: 1px solid gainsboro;
              border-radius: 8px;
              background-color: rgb(253, 207, 215);
              color: black;
            }
          }
        }
        .mySay {
          width: 320px;
          display: flex;
          justify-content: flex-end;
          .my-content {
            height: 60px;
            font-size: 12px;
            line-height: 40px;
            span {
              padding: 5px;
              border: 1px solid gainsboro;
              border-radius: 8px;
              color: black;
              background-color: rgb(14, 240, 248);
            }
          }
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-left: 10px;
          }
        }
      }
    }
    .button {
      margin-top: 10px;
      margin-left: 250px;
    }
  }
}
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(252, 252, 252, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(247, 247, 247, 0.3);
  background-color: gainsboro;
}
</style>