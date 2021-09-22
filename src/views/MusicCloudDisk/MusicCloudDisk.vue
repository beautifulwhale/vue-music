<template>
  <div class="cloud">
    <div class="title">
      <h3>我的音乐网盘</h3>
    </div>
    <div class="button">
      <el-button
        type="danger"
        size="mini"
        round
        @click="playAll(songList[0].id)"
        ><i class="iconfont icon-bofang"></i>播放全部<i class="el-icon-plus"></i
      ></el-button>
      <input
        id="file"
        type="file"
        multiple
        name="file"
        ref="fileRef"
        @change="changeFile($event)"
      />
    </div>
    <div class="table">
      <el-table :data="cloudDiskList" style="width: 100%" @row-click="getMusic">
        <el-table-column>
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="songName" label="音乐标题"></el-table-column>
        <el-table-column prop="artist" label="歌手"> </el-table-column>
        <el-table-column prop="album" label="专辑"> </el-table-column>
        <el-table-column prop="fileSize" label="大小">
          <template slot-scope="scope">
            {{ formatSize(scope.row.fileSize) }}
          </template>
        </el-table-column>
        <el-table-column prop="addTime" label="上传时间">
          <template slot-scope="scope">
            {{ formatTime(scope.row.addTime) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getUserCloud, uploadMusicCloud } from "../../network/clouddisk";
import { dateFormat } from "../../utils/utils";
import { mapState } from "vuex";
import Cookies from "js-cookie";
var cookie = Cookies.get("userCookie");
import axios from "axios";
export default {
  data() {
    return {
      cloudDiskList: [],
      file: {}
    };
  },
  methods: {
    async getUserCloud() {
      const res = await getUserCloud();
      this.cloudDiskList = res.data;
      this.$store.commit("getSongList", this.cloudDiskList);
    },
    async uploadMusicCloud(file) {
      const res = await uploadMusicCloud(formData);
    },
    formatTime(time) {
      return dateFormat(time);
    },
    formatSize(size) {
      return (size / 1024 / 1024).toFixed(1) + "MB";
    },
    getMusic(row) {
      this.$bus.$emit("getMusic", row.songId);
    },
    playAll(id) {
      this.$bus.$emit("getMusic", id);
    },
    changeFile(e) {
      this.file = e.target.files[0];
      this.upload(this.file);
      this.$router.go(0);
    },
    upload(file) {
      var formData = new FormData();
      formData.append("songFile", file);
      axios({
        method: "post",
        url: `http://localhost:3000/cloud?time=${Date.now()}&cookie=${cookie}`,
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: formData,
        withCredentials: true
      }).then(res => {
        console.log(`${file.name} 上传成功`);
        console.log(res);
      });
    }
  },
  created() {
    this.getUserCloud();
  },
  computed: {
    ...mapState(["songList"])
  }
};
</script>
<style lang="less" scoped>
.cloud {
  width: 1100px;
  margin-top: 20px;
  margin-left: 20px;
  position: relative;
  .title {
    margin-bottom: 20px;
    color: black;
  }
  .el-button--danger {
    background-color: red;
    border-color: red;
  }
  input {
    color: #fff;
  }
}
</style>