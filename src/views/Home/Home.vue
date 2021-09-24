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

          <el-submenu index="1">
            <template slot="title"
              ><span class="gedantitle"> 创建的歌单</span
              ><span class="el-icon-plus" @click="createPlayList"></span
            ></template>
            <el-menu-item v-for="item in personalList" :key="item.id">
              <template>
                <div class="personal" @click="getPlayList(item.id)">
                  <span class="iconfont icon-gedan"></span>
                  {{ item.name }}
                </div>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><span class="gedantitle">收藏的歌单</span>
            </template>
            <el-menu-item v-for="item in myCollectList" :key="item.id">
              <template>
                <div class="collect" @click="getPlayList(item.id)">
                  <span class="iconfont icon-gedan"></span>
                  {{ item.name }}
                </div>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <el-card v-show="isCreate">
          <div class="title">
            <div class="el-icon-close" @click="closeCreate"></div>
            <h4>新建歌单</h4>
          </div>
          <div class="content">
            <el-input
              v-model="playListTilte"
              placeholder="请输入新歌单标题"
            ></el-input>
            <el-button type="danger" round size="medium" @click="goCreate"
              >创建</el-button
            >
          </div>
        </el-card>
      </el-main>
    </el-container>
    <foot></foot>
  </el-container>
</template>
<script>
import NavBar from "@/components/Header/NavBar";
import Foot from "@/components/Foot/Foot";
import { getUserPlayList } from "../../network/user";
import { createPlayList } from "../../network/songdetails";
export default {
  data() {
    return {
      limit: 100,
      offset: 0,
      userId: 3243961585,
      playList: [],
      personalList: [],
      myCollectList: [],
      playListTilte: "",
      isCreate: false,
      type: "NORMAL"
    };
  },
  components: {
    NavBar,
    Foot
  },
  methods: {
    //获取用户的歌单
    async UserPlayList(id, limit, offset) {
      const res = await getUserPlayList(id, limit, offset);
      this.playList = res.playlist;
      this.playList.filter(item => {
        if (item.userId === 3243961585) {
          this.personalList.push(item);
        }
      });
      let playListSet = new Set(this.playList);
      let personalListSet = new Set(this.personalList);
      let diff = new Set(
        [...playListSet].filter(function(item) {
          return !personalListSet.has(item);
        })
      );
      this.myCollectList = [...diff];
    },
    //创建歌单
    async goCreatePlayList(name, type) {
      const res = await createPlayList(name, type);
      console.log(res);
    },
    getPlayList(id) {
      this.$router.push({ path: "/songdetails", query: { id: id } });
    },
    //创建歌单
    createPlayList() {
      this.isCreate = true;
    },
    goCreate() {
      this.goCreatePlayList(this.playListTilte, this.type);
      this.isCreate = false;
    },
    closeCreate() {
      this.isCreate = false;
    }
  },
  created() {
    this.UserPlayList(this.userId, this.limit, this.offset);
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
    .gedantitle {
      font-size: 12px;
      color: rgb(177, 176, 176);
    }
    .el-menu-item {
      width: 200px;
      .routers {
        font-size: 15px;
      }
      .personal,
      .collect {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .el-icon-plus {
      margin-left: 30px;
      font-size: 14px;
      color: black;
    }
  }
  .el-main {
    width: 1300px;
    margin-left: 200px;
    position: relative;
    .el-card {
      width: 500px;
      height: 250px;
      position: absolute;
      top: 200px;
      left: 350px;
      z-index: 999;
      .title {
        width: 500px;
        margin-bottom: 40px;
        .el-icon-close {
          font-size: 20px;
          margin-left: 430px;
        }
        h4 {
          width: 480px;
          color: black;
          text-align: center;
        }
      }
      .el-button {
        margin-top: 30px;
        margin-left: 200px;
      }
    }
  }
}
</style>

