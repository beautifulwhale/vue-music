<template>
  <div>
    <div class="email" v-show="show">
      <div class="title">
        <span>消息</span>
      </div>
      <div class="content">
        <el-tabs>
          <el-tab-pane>
            <span slot="label"
              ><el-button round size="mini">私信</el-button>
            </span>
            <personal-letter :letter-list="letterList"></personal-letter>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"
              ><el-button round size="mini">评论</el-button>
            </span>
            <personal-comment :comment-list="commentList"></personal-comment>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"
              ><el-button round size="mini">@我</el-button>
            </span>
            <call-me :call-me-list="callMeList"></call-me>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"
              ><el-button round size="mini">通知</el-button>
            </span>
            <notices :notice-list="noticeList"></notices>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import {
  personalLetter,
  personalComment,
  getCallMe,
  getNotice
} from "../../network/email";
import PersonalLetter from "@/components/Email/PersonalLetter";
import PersonalComment from "@/components/Email/PersonalComment";
import CallMe from "@/components/Email/CallMe";
import Notices from "@/components/Email/Notices";
import SendEmail from "@/components/Email/SendEmail";
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      direction: "rtl",
      limit: 30,
      offset: 0,
      before: 0,
      letterList: [],
      uid: 3243961585,
      commentList: [],
      callMeList: [],
      time: -1,
      noticeList: []
    };
  },
  created() {
    this.getLetter(this.limit, this.offset);
    this.getComment(this.uid, this.limit, this.before);
    this.getCallMe(this.limit, this.offset);
    this.getNotice(this.limit, this.time);
  },

  methods: {
    async getLetter(limit, offset) {
      const res = await personalLetter(limit, offset);
      this.letterList = res.msgs;
    },
    async getComment(id, limit, before) {
      const res = await personalComment(id, limit, before);
      this.commentList = res.comments;
    },
    async getCallMe(limit, before) {
      const res = await getCallMe(limit, before);
      this.callMeList = res.forwards;
    },
    async getNotice(limit, time) {
      const res = await getNotice(limit, time);
      this.noticeList = res.notices;
    }
  },
  components: {
    PersonalLetter,
    PersonalComment,
    CallMe,
    Notices,
    SendEmail
  }
};
</script>
<style lang="less" scoped>
.email {
  width: 350px;
  height: 680px;
  background-color: #fff;
  position: fixed;
  top: 70px;
  right: 0;
  padding: 20px 0 0 20px;
  box-shadow: 0 2px 1px #000;
  .title {
    font-size: 20px;
    color: black;
  }
}

/deep/.el-tabs__item {
  padding: 7px !important;
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