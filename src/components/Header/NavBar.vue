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
export default {
  data() {
    return {
      isShowLogin: false,
      userInfo: {
        avatarUrl: "",
        nickname: ""
      },
      isLoginStatus: false,
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
    async phoneLogin(LoginPhone) {
      const res = await phoneLogin(LoginPhone.phone, LoginPhone.password);
      this.userInfo.avatarUrl = res.profile.avatarUrl;
      this.userInfo.nickname = res.profile.nickname;
      //将登陆状态保存到vuex,在路由导航时判断是否已经登录
      this.$store.dispatch("updataLogin", true);
      //在localStorage设置一个Flag关键字,作用是如果Flag有值且为isLogin的时候，证明用户已经登录了
      localStorage.setItem("Flag", "isLogin");
      
      localStorage.setItem("token", res.token);
      localStorage.setItem("avatarUrl", res.profile.avatarUrl);
      localStorage.setItem("nickname", res.profile.nickname);
      // this.$store.commit("setToken", res.token);
      // this.$store.commit("setUserImg", res.profile.avatarUrl);
      // this.$store.commit("setNickName", res.profile.avatarUrl);
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
    }
  },
  created() {
    this.getLoginKey();
    this.userInfo.avatarUrl = window.localStorage.getItem("avatarUrl");
    this.userInfo.nickname = window.localStorage.getItem("nickname");
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