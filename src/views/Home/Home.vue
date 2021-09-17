<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <!-- 侧边栏菜单区域 -->
        <el-menu unique-opened router>
          <el-submenu index="1">
            <template slot="title">
              <router-link
                class="routers"
                active-class="activeClass"
                to="/findmusic"
                >发现音乐</router-link
              >
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <router-link
                class="routers"
                active-class="activeClass"
                to="/video"
                >视频</router-link
              >
            </template>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <router-link
                class="routers"
                active-class="activeClass"
                to="/friends"
                >朋友</router-link
              >
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <foot></foot>
  </el-container>
</template>
<script>
import NavBar from "@/components/Header/NavBar";
import Foot from "@/components/Foot/Foot";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Foot
  }
};
</script>
<style lang='less' scoped>
.el-container {
  width: 1510px;
  position: relative;
  .el-aside {
    width: 200px;
    height: 680px;
    position: fixed;
    top: 70px;
    left: 0;
    background-color: #fff;
    .el-menu {
      width: 200px;
      height: 680px;
      border-right: 1px solid gainsboro;
    }
    .el-submenu {
      width: 200px;
      .routers {
        font-size: 18px;
      }
      .activeClass {
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
  .el-main {
    width: 1300px;
    margin-left: 200px;
  }
}
</style>

