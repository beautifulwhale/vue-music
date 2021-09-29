<template>
  <div>
    <el-table
      :data="programList"
      stripe
      style="width: 100%"
      @row-click="getRadioPlay"
    >
      <el-table-column width="45" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <!-- <span
            v-if="isPlaying && currentId === scope.row.id"
            class="iconfont icon-shengyin1"
            style="color:red;fontSize:20px"
          ></span> -->
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column width="80">
        <template slot-scope="scope">
          <div class="img">
            <img :src="scope.row.coverUrl" />
            <div class="play">
              <span class="iconfont icon-bofang1"></span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" width="450"> </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="iconfont icon-bofang"></span>
          <span class="count">{{ formatCount(scope.row.listenerCount) }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="iconfont icon-zan"></span>
          <span class="count">{{ scope.row.likedCount }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="count">{{ formatTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span class="count">{{ FormatTime(scope.row.duration / 1000) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { tranNumber, getYMDHMS, FormatTime } from "../../utils/utils";
export default {
  props: {
    programList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatCount(count) {
      return tranNumber(count);
    },
    formatTime(time) {
      return getYMDHMS(time);
    },
    FormatTime(time) {
      return FormatTime(time);
    },
    getRadioPlay(row) {
      this.$bus.$emit("getMusic", row.mainSong.id);
      this.$bus.$emit("getDjShowInfo", row.id);
      this.$store.commit("getSongList", this.programList);
    }
  }
};
</script>
<style lang="less" scoped>
.img {
  width: 50px;
  height: 50px;
  position: relative;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  .play {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 15px;
    right: 15px;
    opacity: 0.8;
    .iconfont {
      margin-left: 5px;
      color: red;
    }
  }
}
.count,
.iconfont {
  font-size: 12px;
  color: rgb(182, 182, 182);
}
</style>