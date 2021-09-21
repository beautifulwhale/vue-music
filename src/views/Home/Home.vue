<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <!-- 侧边栏菜单区域 -->
        <el-menu unique-opened router>
          <el-menu-item>
            <template slot="title">
              <router-link
                class="routers"
                active-class="activeClass"
                to="/findmusic"
                >发现音乐</router-link
              >
            </template>
          </el-menu-item>
          <el-menu-item>
            <template slot="title">
              <router-link
                class="routers"
                active-class="activeClass"
                to="/video"
                >视频</router-link
              >
            </template>
          </el-menu-item>
          <el-menu-item>
            <template slot="title">
              <router-link
                class="routers"
                active-class="activeClass"
                to="/friends"
                >朋友</router-link
              >
            </template>
          </el-menu-item>
          <el-menu-item-group>
            <template slot="title">我的音乐</template>
            <el-menu-item>
              <template slot="title">
                <router-link class="routers" to="/recentplay"
                  ><i
                    class="iconfont icon-zuijinbofang"
                    style="margin-right:10px"
                  ></i
                  >最近播放</router-link
                >
              </template></el-menu-item
            >
            <el-menu-item>
              <template slot="title">
                <router-link class="routers" to="/cloudDisk"
                  ><i class="iconfont icon-yunpan" style="margin-right:10px"></i
                  >我的音乐云盘</router-link
                >
              </template>
            </el-menu-item>
            <el-menu-item>
              <template slot="title">
                <router-link class="routers" to="/mypodcast"
                  ><i class="iconfont icon-boke" style="margin-right:10px"></i
                  >我的播客</router-link
                >
              </template>
            </el-menu-item>
            <el-menu-item>
              <template slot="title">
                <router-link class="routers" to="/mycollect"
                  ><i
                    class="iconfont icon-shoucang"
                    style="margin-right:10px"
                  ></i
                  >我的收藏</router-link
                >
              </template>
            </el-menu-item>
          </el-menu-item-group>
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
    .el-menu-item {
      width: 200px;
      .activeClass {
        font-weight: bold;
        font-size: 17px;
      }
      .routers {
        font-size: 15px;
      }
    }
  }
  .el-main {
    width: 1300px;
    margin-left: 200px;
  }
}
</style>

