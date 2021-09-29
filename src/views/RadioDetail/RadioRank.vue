<template>
  <div>
    <el-tabs>
      <el-tab-pane>
        <span slot="label">
          <el-button round size="mini">声音榜</el-button>
        </span>
        <el-table
          :data="showList"
          stripe
          style="width: 100%"
          @row-click="getRadioPlay"
        >
          <el-table-column width="45" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span
                v-if="isPlaying && currentId === scope.row.id"
                class="iconfont icon-shengyin1"
                style="color:red;fontSize:20px"
              ></span>
              <span>{{ scope.$index + 1 }}</span>
            </template>
          </el-table-column>
          <el-table-column width="80">
            <template slot-scope="scope">
              <div class="img">
                <img :src="scope.row.program.coverUrl" />
                <div class="play">
                  <span class="iconfont icon-bofang1"></span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="program.name" width="450"> </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span
                class="album"
                @click="RadioDetail(scope.row.program.radio.id)"
                >{{ scope.row.program.radio.name }}</span
              >
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span class="album">{{ scope.row.program.radio.category }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <el-button round size="mini">新晋播客榜</el-button>
        </span>
        <el-table
          :data="newDjList"
          stripe
          style="width: 100%"
          @row-click="getRadioDetail"
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
                <img :src="scope.row.picUrl" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" width="450"> </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span class="album">{{ scope.row.creatorName }}</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span class="album">{{ scope.row.category }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <el-button round size="mini">热门播客榜</el-button>
        </span>
        <el-table
          :data="hotDjList"
          stripe
          style="width: 100%"
          @row-click="getRadioDetail"
        >
          <el-table-column width="45" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span>{{ scope.$index + 1 }}</span>
            </template>
          </el-table-column>
          <el-table-column width="80">
            <template slot-scope="scope">
              <div class="img">
                <img :src="scope.row.picUrl" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" width="450"> </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span class="album">{{ scope.row.creatorName }}</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span class="album">{{ scope.row.category }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getShowRank, getDjRank } from "../../network/radio";
export default {
  data() {
    return {
      showList: [],
      newDjList: [],
      hotDjList: [],
      type: "new",
      currentId: 0,
      isPlaying: false
    };
  },
  methods: {
    async getShowRank() {
      const res = await getShowRank();
      this.showList = res.toplist;
    },
    async getDjRank(type) {
      const res = await getDjRank(type);
      this.newDjList = res.toplist;
      this.hotDjList = res.toplist;
      // console.log(res);
    },
    getRadioPlay(row) {
      this.isPlaying = true;
      this.currentId = row.id;
      this.$bus.$emit("getMusic", row.program.mainSong.id);
      this.$bus.$emit("getDjShowInfo", row.program.id);
      this.$store.commit("getSongList", this.showList);
    },
    getRadioDetail(row) {
      this.$router.push({ path: "/radiodetail", query: { id: row.id } });
    },
    RadioDetail(id) {
      this.$router.push({ path: "/radiodetail", query: { id } });
    },
    getHotDj() {
      (this.type = "hot"), this.getDjRank(this.type);
    }
  },
  created() {
    this.getShowRank();
    this.getDjRank(this.type);
    this.getHotDj();
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
.album {
  font-size: 12px;
  cursor: pointer;
  color: rgb(182, 182, 182);
}
</style>