<template>
  <!-- <div id="home">
    <nav-bar></nav-bar>
    <div class="aside">
      <router-link class="routers" to="/findmusic">发现音乐</router-link>
      <router-link class="routers" to="/findmusic">播客</router-link>
      <router-link class="routers" to="/findmusic">视频</router-link>
      <router-link class="routers" to="/findmusic">私人FM</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <foot></foot>
  </div> -->
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-container>
      <el-aside>
        <!-- 侧边栏菜单区域 -->
        <el-menu active-text-color="blue" unique-opened router>
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i class="el-icon-platform-eleme"></i>
              <span>发现音乐</span>
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
// #home {
//   width: 1365px;
//   position: relative;
//   .aside {
//     width: 200px;
//     height: 680px;
//     position: fixed;
//     top: 70px;
//     left: 0;
//     background-color: #bfa;
//     display: flex;
//     flex-flow: column;
//     justify-content: space-around;
//   }
//   .main {
//     width: 1165px;
//     height: 3000px;
//     margin-left: 200px;
//   }
// }

</style>

