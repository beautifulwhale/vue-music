<template>
  <el-card>
    <div slot="header" class="title">
      <h3>分享</h3>
      <span class="el-icon-close" @click="closeCard"></span>
    </div>
    <div class="container">
      <div class="chooseSong" v-if="isChooseMusic">
        <el-input
          placeholder="单曲/歌手/专辑/歌单/播客"
          v-model="queryInfo.keywords"
          clearable
          prefix-icon="el-icon-search"
          @change="search"
        >
        </el-input>
        <div class="recent-play">最近播放</div>
        <div class="recom-song" v-if="isGoToSearch">
          <div
            class="recom"
            v-for="item in recomSongs"
            :key="item.id"
            @click="chooseIt(item)"
          >
            <span class="iconfont icon-danqu"></span>
            <span class="name">{{ item.name }}</span>
            <span class="artist">{{ item.song.artists[0].name }}</span>
          </div>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" v-else>
          <el-tab-pane label="单曲" name="first">
            <el-table
              :data="songs"
              style="width: 100%"
              stripe
              :show-header="status"
              @row-click="chooseThis"
            >
              <el-table-column prop="name" width="300"> </el-table-column>
              <el-table-column prop="ar[0].name" width="180"> </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="歌手" name="second">
            <el-table
              :data="artists"
              style="width: 100%"
              stripe
              :show-header="status"
              @row-click="chooseThis"
            >
              <el-table-column width="80">
                <template slot-scope="scope">
                  <el-image
                    style="width: 50px; height: 50px"
                    :src="scope.row.picUrl"
                  >
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </template>
              </el-table-column>
              <el-table-column prop="name" width="400"> </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="专辑" name="third">
            <el-table
              :data="albums"
              style="width: 100%"
              stripe
              :show-header="status"
              @row-click="chooseThis"
            >
              <el-table-column width="80">
                <template slot-scope="scope">
                  <el-image
                    style="width: 50px; height: 50px"
                    :src="scope.row.picUrl"
                  >
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </template>
              </el-table-column>
              <el-table-column prop="name" width="200"> </el-table-column>
              <el-table-column prop="artists[0].name" width="200">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="歌单" name="fourth">
            <el-table
              :data="playlists"
              stripe
              style="width: 100%"
              :show-header="status"
              @row-click="chooseThis"
            >
              <el-table-column prop="coverImgUrl" width="80">
                <template slot-scope="scope">
                  <el-image
                    style="width: 50px; height: 50px"
                    :src="scope.row.coverImgUrl"
                  >
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </template>
              </el-table-column>
              <el-table-column prop="name" width="250"> </el-table-column>
              <el-table-column
                prop="creator.nickname"
                class="nickname"
                width="150px"
              ></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <el-button type="danger" size="mini" round @click="backWrite"
          >返回</el-button
        >
      </div>
      <div class="share" v-else>
        <el-input
          type="textarea"
          :rows="7"
          placeholder="请输入内容"
          v-model="content"
          maxlength="140"
          show-word-limit
        >
        </el-input>
        <div class="music" @click="chooseSong">
          <div class="haschoose" v-if="isChooesed">
            <div class="img"><img :src="picUrl" /></div>
            <div class="type" v-if="activeName === 'first'">单曲:</div>
            <div class="type" v-if="activeName === 'second'">歌手:</div>
            <div class="type" v-if="activeName === 'third'">专辑:</div>
            <div class="type" v-if="activeName === 'fourth'">歌单:</div>
            <div class="name">{{ currentChoose.name }}</div>
          </div>
          <div class="gotochoose" v-else>
            <span class="iconfont icon-wangyiyunyinle1"></span>
            <span class="text">给动态配上音乐</span>
            <span class="el-icon-plus"></span>
          </div>
        </div>
        <el-button type="danger" size="mini" round @click="share"
          >分享</el-button
        >
      </div>
    </div>
  </el-card>
</template>
<script>
import { getRecomSongs, getSearchCotent } from "../../network/search";
import { shareDynamic } from "../../network/dynamic";
export default {
  name: "writeDynamic",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: "",
      isChooseMusic: false,
      limit: 5,
      recomSongs: [],
      currentChoose: {},
      isChooesed: false,
      isGoToSearch: true,
      songs: [],
      artists: [],
      albums: [],
      playlists: [],
      queryInfo: {
        keywords: "",
        limit: 30,
        offset: 0,
        type: 1
      },
      activeName: "first",
      status: false,
      resourceId: 0,
      resourceType: "song"
    };
  },
  methods: {
    async getRecomSongs(limit) {
      const res = await getRecomSongs(limit);
      this.recomSongs = res.result;
    },
    //获取搜索内容
    async getSearchCotent(params) {
      const res = await getSearchCotent(
        params.keywords,
        params.limit,
        params.offset,
        params.type
      );
      const data = res.result;
      this.songs = data.songs;
      this.artists = data.artists;
      this.albums = data.albums;
      this.playlists = data.playlists;
    },
    //分享动态
    async shareDynamic(id, type, msg) {
      const res = await shareDynamic(id, type, msg);
      console.log(res);
    },
    handleClick(targetName) {
      if (targetName.paneName == "first") {
        this.queryInfo.type = 1;
      } else if (targetName.paneName == "second") {
        this.queryInfo.type = 100;
      } else if (targetName.paneName == "third") {
        this.queryInfo.type = 10;
      } else if (targetName.paneName == "fourth") {
        this.queryInfo.type = 1000;
      }
      this.getSearchCotent(this.queryInfo);
    },
    closeCard() {
      this.$emit("closeCard");
    },
    chooseSong() {
      this.isChooseMusic = true;
      this.isGoToSearch = true;
      this.queryInfo.keywords = "";
      this.getRecomSongs(this.limit);
    },
    backWrite() {
      this.isChooseMusic = false;
    },
    chooseIt(item) {
      this.currentChoose = item;
      this.isChooseMusic = false;
      this.isChooesed = true;
    },
    chooseThis(row) {
      this.currentChoose = row;
      this.isChooseMusic = false;
      this.isChooesed = true;
    },
    //搜索内容
    search() {
      this.isGoToSearch = false;
      this.getSearchCotent(this.queryInfo);
    },
    share() {
      if (this.activeName === "first") {
        this.type = "song";
      } else if (this.activeName === "fourth") {
        this.type = "playlist";
      }
      this.shareDynamic(this.currentChoose.id, this.type, this.content);
      this.closeCard();
      this.$message({ message: "恭喜您成功的发布了一条动态", type: "success" });
      this.$router.go(0);
    }
  },
  computed: {
    picUrl() {
      return (
        this.currentChoose.picUrl ||
        this.currentChoose.coverImgUrl ||
        this.currentChoose.al.picUrl
      );
    }
  }
};
</script>
<style lang="less" scoped>
.el-card {
  width: 500px;
  height: 440px;
  .title {
    width: 500px;
    display: flex;
    flex: 1;
    h3 {
      color: black;
      margin-right: 400px;
    }
    span {
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .music {
    width: 458px;
    height: 40px;
    border: 1px solid gainsboro;
    cursor: pointer;
    .haschoose {
      width: 458px;
      margin-left: 20px;
      display: flex;
      flex: 1;
      .img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        line-height: 40px;
        img {
          margin-top: 5px;
          width: 25px;
          height: 25px;
        }
      }
      .type {
        width: 40px;
        margin-top: 10px;
        margin-right: 5px;
      }
      .name {
        margin-top: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .iconfont {
      color: red;
      font-size: 25px;
      margin-right: 5px;
      margin-left: 20px;
    }
    .text {
      margin-right: 250px;
    }
    .el-icon-plus {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .el-button {
    margin-top: 10px;
    margin-left: 400px;
  }
  .el-button--danger {
    background-color: red;
    border-color: red;
  }
  .chooseSong {
    width: 500px;
    .el-input {
      width: 460px;
    }
    .recent-play {
      font-size: 13px;
      margin: 10px 0;
      color: gainsboro;
    }
    .recom-song {
      width: 500px;
      //   padding: ;
      .recom {
        width: 460px;
        height: 30px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        .iconfont {
          font-size: 14px;
          color: gainsboro;
          margin-right: 5px;
        }
        .name {
          font-size: 13px;
          margin-right: 20px;
        }
        .artist {
          font-size: 11px;
          color: gainsboro;
        }
      }
    }
  }
  .el-table {
    height: 190px;
    overflow: scroll;
  }
}
</style>