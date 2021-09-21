<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane name="first">
      <span slot="label"
        ><el-button round size="mini" type="danger">新歌速递</el-button>
      </span>
      <div class="filter">
        <div class="tags" v-for="(item, index) in newSongTags" :key="index">
          <div
            class="tag"
            @click="changeTags(item)"
            :style="item === currentSongTag ? 'color:red' : ''"
          >
            {{ item }}
          </div>
        </div>
        <div class="button">
          <el-button
            type="danger"
            size="mini"
            round
            @click="playAll(songList[0].id)"
            ><i class="iconfont icon-wodetubiao-253"></i>播放全部</el-button
          >
          <el-button size="mini" round
            ><i class="el-icon-folder-opened"></i>收藏全部</el-button
          >
        </div>
      </div>
      <!-- 新歌内容 -->
      <el-table
        :data="songsList"
        stripe
        style="width: 100%"
        @row-click="getMusicPlay"
      >
        <el-table-column width="50">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column width="120">
          <template slot-scope="scope">
            <el-image
              style="width: 50px; height: 50px"
              :src="scope.row.album.picUrl"
            >
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" width="180"> </el-table-column>
        <el-table-column prop="artists[0].name"> </el-table-column>
        <el-table-column prop="album.name"> </el-table-column>
        <el-table-column prop="duration"> </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane name="second">
      <span slot="label"
        ><el-button round size="mini" type="danger">新碟上架</el-button>
      </span>
      <new-albums></new-albums>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { getNewSongs } from "../../network/song";
import { mapState } from "vuex";
import NewAlbums from "@/views/NewMusic/NewAlbums";
export default {
  data() {
    return {
      activeName: "first",
      newSongTags: ["全部", "华语", "欧美", "韩国", "日本"],
      currentSongTag: "全部",
      songType: 0,
      songsList: []
    };
  },
  computed: {
    ...mapState(["songList"])
  },
  methods: {
    async getNewSongs(type) {
      const res = await getNewSongs(type);
      this.songsList = res.data;
      this.$store.commit("getSongList", this.songsList);
    },
    changeTags(tag) {
      this.currentSongTag = tag;
      if (tag === "华语") {
        this.songType = 7;
        this.getNewSongs(this.songType);
      } else if (tag === "欧美") {
        this.songType = 96;
        this.getNewSongs(this.songType);
      } else if (tag === "韩国") {
        this.songType = 16;
        this.getNewSongs(this.songType);
      } else if (tag === "日本") {
        this.songType = 8;
        this.getNewSongs(this.songType);
      } else if (tag === "全部") {
        this.songType = 0;
        this.getNewSongs(this.songType);
      }
    },
    getMusicPlay(row) {
      this.$bus.$emit("getMusic", row.id);
    },
    playAll(id) {
      this.$bus.$emit("getMusic", id);
    },
    handleClick() {}
  },
  created() {
    this.getNewSongs(this.songType);
  },
  components: {
    NewAlbums
  }
};
</script>
<style lang="less" scoped>
.el-tabs {
  margin-top: 80px;
  width: 1100px;
  .filter {
    width: 1100px;
    display: flex;
    flex: 1;
    .tags {
      width: 70px;
    }
    .button {
      margin-left: 500px;
    }
  }
}
</style>