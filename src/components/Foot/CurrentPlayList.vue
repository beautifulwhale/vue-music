<template>
  <div class="player">
    <div class="info">
      <h2>当前播放</h2>
      <!-- 收藏/清空 -->
      <div class="operation">
        <!-- -->
        <div class="total">
          <span v-if="songListLength">共{{ songListLength }}首</span>
          <span v-else>共0首</span>
        </div>
        <div class="collect">
          <span class="el-icon-folder-add"></span>
          <span>收藏全部</span>
        </div>
        <div class="clear" @click="clearSongList">
          <span>清空列表</span>
        </div>
      </div>
    </div>
    <el-table
      :data="songList"
      style="width: 450px"
      stripe
      @row-click="getMusic"
      class="current-play"
    >
      <el-table-column prop="name" label="歌曲" :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="ar[0].name"
        label="歌手"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column prop="dt" label="时长" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{ getTime(scope.row.dt / 1000) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { FormatTime } from "../../utils/utils";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["songList"]),
    ...mapGetters(["songListLength"])
  },
  methods: {
    getTime(dt) {
      return FormatTime(dt);
    },
    getMusic(row, event, column) {
      this.$bus.$emit("getMusic", row.id);
      this.$store.commit("getSongList", this.songList);
    },
    clearSongList() {
      this.$store.dispatch("clearSongList");
      this.$emit("clearPlay");
    }
  }
};
</script>
<style lang="less" scoped>
.player {
  width: 450px;
  height: 500px;
  padding: 10px;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 999;
  background-color: #fff;
  .info {
    width: 450px;
    height: 80px;
    h2 {
      margin-bottom: 20px;
    }
    .operation {
      width: 450px;
      display: flex;
      flex: 1;
      .total {
        font-size: 13px;
        color: gray;
        margin-right: 200px;
      }
      .collect {
        margin-right: 20px;
        cursor: pointer;
      }
      .clear {
        cursor: pointer;
        color: rgb(132, 157, 238);
      }
    }
  }
}
</style>