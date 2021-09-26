<template>
  <el-table
    :data="songList"
    style="width: 100%"
    stripe
    @row-click="getMusic"
    class="resetTab"
  >
    <el-table-column width="45" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <span
          v-if="isPlaying && currentId === scope.row.id"
          class="iconfont icon-shengyin1"
          style="color:red;fontSize:20px"
        ></span>
        <span v-else>{{ scope.$index + 1 }}</span>
      </template>
    </el-table-column>
    <el-table-column width="40" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <span
          class="iconfont icon-heart"
          @click="loveMusic(scope.row.id)"
          :style="isLove && currentId === scope.row.id ? 'color:red' : ''"
        ></span>
      </template>
    </el-table-column>
    <!-- prop="name" -->
    <el-table-column label="音乐标题" width="400" :show-overflow-tooltip="true">
      <template slot-scope="scope" class="title">
        <span class="name">{{ scope.row.name }}</span>
        <span
          v-if="scope.row.copyright === 0"
          style="color:red;border:1px solid red;width:20px;height:8px;fontSize:10px;marginLeft:5px"
          >SQ</span
        >
        <span
          @click="getMvPlay(scope.row.mv)"
          v-if="scope.row.mv !== 0"
          style="color:red;border:1px solid red;width:20px;height:8px;fontSize:10px;marginLeft:5px"
          >MV<i class="el-icon-caret-right"></i
        ></span>
      </template>
    </el-table-column>
    <el-table-column
      prop="ar[0].name"
      label="歌手"
      :show-overflow-tooltip="true"
    >
    </el-table-column>
    <el-table-column prop="al.name" label="专辑" :show-overflow-tooltip="true">
    </el-table-column>
    <el-table-column prop="dt" label="时长" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        {{ getTime(scope.row.dt / 1000) }}
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { FormatTime } from "../../utils/utils";
import { likeMusic } from "../../network/fm";
export default {
  data() {
    return {
      isPlaying: false,
      isLove: false,
      like: true,
      currentId: 0
    };
  },
  props: {
    songList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getTime(dt) {
      return FormatTime(dt);
    },
    getMusic(row, event, column) {
      this.isPlaying = true;
      this.currentId = row.id;
      this.$bus.$emit("getMusic", row.id);
      this.$store.commit("getSongList", this.songList);
    },
    async likeMusic(id, like) {
      const res = await likeMusic(id, like);
    },
    loveMusic(id) {
      this.isLove = true;
      this.currentId = id;
      this.likeMusic(id, this.like);
      this.$message({
        message: "已添加到我喜欢的音乐",
        type: "success"
      });
    },
    getMvPlay(id) {
      this.$router.push({
        path: "/videodetails",
        query: { id: id }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 14px;
  /deep/ th {
    padding: 0;
    height: 35px;
  }
  /deep/ td {
    padding: 0;
    height: 35px;
  }
}
</style>