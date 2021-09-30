<template>
  <div class="header_title">
    <div class="logo">
      <span class="iconfont icon-wangyiyun1"></span>
      <h3>网易云音乐</h3>
      <span class="back" @click="goBackRouter">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span class="refresh" @click="refreshRouter">
        <i class="el-icon-refresh-right"></i>
      </span>
    </div>
    <!-- 搜索 -->
    <search></search>
    <!-- 登陆状态 -->
    <div class="logined" v-if="isLoginStatus">
      <div class="img">
        <el-image
          style="width: 50px; height: 50px"
          :src="userInfo.avatarUrl"
        ></el-image>
      </div>
      <span class="nickname">{{ userInfo.nickname }}</span>
    </div>
    <!-- 未登录状态 -->
    <div class="login" @click="login" v-else>
      <span class="iconfont icon-weidenglu1"></span>
      <span class="logout">未登录</span>
    </div>
    <login
      v-show="isShowLogin"
      @closeLogin="closeLogin"
      @phoneLoginClick="phoneLoginClick"
      @changeQrCodeLogin="changeQrCodeLogin"
      ref="loginRef"
      :sellect-phone="sellectPhone"
      :sellect-qr-code="sellectQrCode"
      :qr-code="qrCode"
    ></login>
    <!-- 私信 -->
    <div class="message">
      <span class="el-icon-message" @click="getEmail"></span>
    </div>
    <email :show="show"></email>
    <send-email :is-send="isSend" :user="sendUser"></send-email>
  </div>
</template>
<script>
import Search from "@/components/Search/Search";
import Email from "@/components/Email/Email";
import Login from "@/views/Login/Login";
import SendEmail from "@/components/Email/SendEmail";
import {
  phoneLogin,
  getLoginKey,
  getLoginQrCode,
  CheckQrCode
} from "../../network/login";
import { mapState } from "vuex";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      isShowLogin: false,
      userInfo: {
        avatarUrl: "",
        nickname: ""
      },
      loginKey: "",
      qrCode: "",
      sellectPhone: true,
      sellectQrCode: false,
      show: false,
      isSend: false,
      sendUser: {}
    };
  },
  components: {
    Search,
    Login,
    Email,
    SendEmail
  },
  methods: {
    login() {
      this.isShowLogin = !this.isShowLogin;
      this.$router.push("/login");
    },
    closeLogin() {
      this.isShowLogin = false;
      this.$router.push("/recommend");
    },
    phoneLoginClick(LoginPhone) {
      this.phoneLogin(LoginPhone);
      this.isLoginStatus = true;
      this.$router.push("/recommend");
    },
    //手机号登陆
    async phoneLogin(LoginPhone) {
      const res = await phoneLogin(LoginPhone.phone, LoginPhone.password);
      this.userInfo.avatarUrl = res.profile.avatarUrl;
      this.userInfo.nickname = res.profile.nickname;
      Cookies.set("userCookie", res.cookie, { expires: 10 });
      //在localStorage存储token
      localStorage.setItem("token", res.token);
      localStorage.setItem("avatarUrl", res.profile.avatarUrl);
      localStorage.setItem("nickname", res.profile.nickname);
    },
    async getLoginKey() {
      const res = await getLoginKey();
      this.loginKey = res.data.unikey;
    },
    async getLoginQrCode(key) {
      const res = await getLoginQrCode(key);
      this.qrCode = res.data.qrurl;
    },
    async CheckQrCode(key) {
      const res = await CheckQrCode(key);
    },
    changeQrCodeLogin() {
      this.sellectPhone = false;
      this.sellectQrCode = true;
      this.getLoginQrCode(this.loginKey);
      this.CheckQrCode(this.loginKey);
      this.isLoginStatus = true;
      this.$router.push("/recommend");
    },
    getEmail() {
      this.show = !this.show;
    },
    goBackRouter() {
      this.$router.back();
    },
    refreshRouter() {
      this.$router.go(0);
    }
  },
  created() {
    this.getLoginKey();
    this.userInfo.avatarUrl = window.localStorage.getItem("avatarUrl");
    this.userInfo.nickname = window.localStorage.getItem("nickname");
  },
  computed: {
    isLoginStatus() {
      return window.localStorage.getItem("token") === null ? false : true;
    }
  },
  mounted() {
    this.$bus.$on("closeEmail", () => {
      this.show = false;
    });
    this.$bus.$on("sendEmail", user => {
      this.sendUser = user;
      this.isSend = true;
      this.show = false;
    });
    this.$bus.$on("goback", () => {
      this.isSend = false;
      this.show = true;
    });
  }
};
</script>
<style lang="less" scoped>
.header_title {
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: #fff;
  display: flex;
  flex: 1;
  box-shadow: 2px 0 1px rgba(0, 0, 0, 0.8);
  background-color: rgb(253, 60, 26);
  .logo {
    padding: 4px 20px;
    margin-right: 0px;
    width: 150px;
    height: 62px;
    display: flex;
    flex: 1;
    .iconfont {
      font-size: 25px;
      color: whitesmoke;
      margin-right: 5px;
      margin-top: 20px;
    }
    h3 {
      color: whitesmoke;
      margin-top: 24px;
      font-family: "方正兰亭黑简体";
    }
    .back {
      width: 28px;
      height: 28px;
      margin-top: 20px;
      border-radius: 50%;
      margin-left: 100px;
      font-size: 20px;
      padding: 3px;
      cursor: pointer;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);
      i {
        margin-right: 3px;
        color: #fff;
      }
    }
    .refresh {
      width: 28px;
      height: 28px;
      margin-top: 20px;
      border-radius: 50%;
      margin-left: 15px;
      font-size: 20px;
      padding: 3px;
      cursor: pointer;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);
      i {
        margin-right: 3px;
        color: #fff;
      }
    }
  }
  .login {
    width: 100px;
    height: 70px;
    line-height: 70px;
    margin-left: 500px;
    .iconfont {
      font-size: 30px;
      color: gray;
    }
    .logout {
      font-size: 14px;
      color: black;
    }
  }
  .logined {
    width: 180px;
    height: 70px;
    line-height: 70px;
    margin-left: 500px;
    display: flex;
    flex: 1;
    .img {
      width: 50px;
      height: 50px;
      margin-right: 5px;
      .el-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 10px;
      }
    }
    .nickname {
      width: 100px;
      font-size: 12px;
      color: whitesmoke;
    }
  }
  .message {
    width: 40px;
    height: 70px;
    margin-right: 130px;
    cursor: pointer;
    span {
      line-height: 70px;
      font-size: 25px;
      color: whitesmoke;
    }
  }
}
</style>