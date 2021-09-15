<template>
  <transition>
    <el-card class="box-card">
      <span class="el-icon-close" @click="closeLogin"></span>
      <div class="img">
        <img src="../../assets/image/login.jpg" />
      </div>
      <!-- 手机登录 -->
      <el-form
        label-width="0px"
        class="login_form"
        :model="LoginPhone"
        :rules="LoginPhoneRules"
        ref="LoginFormRefs"
        v-show="sellectPhone"
      >
        <!-- 手机号 -->
        <el-form-item prop="phone">
          <el-input
            v-model="LoginPhone.phone"
            placeholder="请输入手机号"
            prefix-icon="iconfont icon-shouji"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="LoginPhone.password"
            placeholder="请输入密码"
            prefix-icon="iconfont icon-mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button style="width:100%" type="danger" @click="phoneLoginClick"
            >登录</el-button
          >
          <el-button style="width:100%" @click="qrCodeLogin"
            >二维码登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="qrcode" v-show="sellectQrCode">
        <h2>扫码登陆</h2>
        <vue-qr
          :text="qrCode"
          :margin="0"
          colorDark="#000000"
          colorLight="#fff"
          :size="200"
          class="qrcode"
        ></vue-qr>
      </div>
    </el-card>
  </transition>
</template>
<script>
import vueQr from "vue-qr";
export default {
  props: {
    sellectPhone: {
      type: Boolean,
      default: true
    },
    sellectQrCode: {
      type: Boolean,
      default: false
    },
    qrCode: {
      type: String,
      default: ""
    }
  },
  data() {
    //定义手机号的校验规则
    var isMobileNumber = (rule, value, callback) => {
      if (!value) {
        return new Error("请输入电话号码");
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        const isPhone = reg.test(value);
        value = Number(value); //转换为数字
        if (typeof value === "number" && !isNaN(value)) {
          //判断是否为数字
          value = value.toString(); //转换成字符串
          if (value.length < 0 || value.length > 12 || !isPhone) {
            //判断是否为11位手机号
            callback(new Error("手机号码格式如:155xxxx9664"));
          } else {
            callback();
          }
        } else {
          callback(new Error("请输入电话号码"));
        }
      }
    };
    return {
      LoginPhone: {
        phone: "",
        password: ""
      },
      LoginPhoneRules: {
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: isMobileNumber, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入登陆密码", trigger: "blur" },
          { min: 8, max: 20, message: "长度在 8 到 20个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    closeLogin() {
      this.$emit("closeLogin");
    },
    phoneLoginClick() {
      this.$emit("phoneLoginClick", this.LoginPhone);
      this.closeLogin();
    },
    qrCodeLogin() {
      this.$emit("changeQrCodeLogin");
    }
  },
  components: {
    vueQr
  }
};
</script>
<style lang="less" scoped>
.el-card {
  height: 550px;
  width: 350px;
  background-color: #fff;
  position: absolute;
  top: 150px;
  right: 50%;
  transform: translateX(50%);
  .el-icon-close {
    font-size: 25px;
    position: absolute;
    font-weight: bold;
    right: 10px;
    top: 10px;
  }
  .img {
    width: 300px;
    height: 200px;
    margin: 10px 0 30px;
    img {
      width: 300px;
      height: 200px;
      border-radius: 20px;
    }
  }
  .el-button--danger {
    background-color: red;
    border-color: red;
  }
  .el-button {
    margin-bottom: 10px;
  }
  .el-button + .el-button {
    margin-left: 0;
  }
  .qrcode {
    h2 {
      color: black;
      margin-bottom: 20px;
    }
    margin-left: 20px;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0; /*透明度*/
  transform: translateY(150px);
}
/*入场(离场)动画的时间段   */
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}

.my-enter,
.my-leave-to {
  opacity: 0; /*透明度*/
  transform: translateX(70px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.8s ease;
}
</style>