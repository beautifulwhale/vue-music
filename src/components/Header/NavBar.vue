<template>
  <div class="header_title">
    <img src="../../assets/image/logo.jpg" />
    <!-- 搜索 -->
    <search></search>
    <!-- 登陆状态 -->
    <div class="logined" v-if="isLoginStatus">
      <div class="img">
        <el-image
          style="width: 50px; height: 50px"
          :src="userInfo.avatarUrl"
        ></el-image>
        <!-- <img :src="" /> -->
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
  </div>
</template>
<script>
import Search from "@/components/Search/Search";
import Login from "@/views/Login/Login";
import {
  phoneLogin,
  getLoginKey,
  getLoginQrCode,
  CheckQrCode
} from "../../network/login";
import { mapState } from "vuex";
import Cookies from 'js-cookie'
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
      sellectQrCode: false
    };
  },
  components: {
    Search,
    Login
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
      Cookies.set('userCookie',res.cookie,{expires:10})
      //在localStorage存储token
      localStorage.setItem("token", res.token);
      localStorage.setItem("avatarUrl", res.profile.avatarUrl);
      localStorage.setItem("nickname", res.profile.nickname);
      console.log(res)
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
      // console.log(res);
    },
    changeQrCodeLogin() {
      this.sellectPhone = false;
      this.sellectQrCode = true;
      this.getLoginQrCode(this.loginKey);
      this.CheckQrCode(this.loginKey);
      this.isLoginStatus = true;
      this.$router.push("/recommend");
    },
  },
  created() {
    this.getLoginKey();
    this.userInfo.avatarUrl = window.localStorage.getItem("avatarUrl");
    this.userInfo.nickname = window.localStorage.getItem("nickname");
  },
  computed: {
    isLoginStatus(){
      return window.localStorage.getItem('token') === null ? false : true
    }
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
  img {
    padding: 4px 20px;
    margin-right: 150px;
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
      margin-right: 10px;
      .el-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 10px;
      }
    }
    .nickname {
      font-size: 13px;
      color: gray;
    }
  }
}
</style>