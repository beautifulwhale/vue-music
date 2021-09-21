<template>
  <div class="recentplay">
    <div class="title">
      <h3>最近播放</h3>
      <span class="number">共{{ dailySongs.length }}首</span>
      <span class="clear" @click="clearSongs">清空列表</span>
    </div>
    <el-button
      type="danger"
      size="mini"
      round
      @click="playAll(songList[0].id)"
      ><i class="iconfont icon-bofang"></i>播放全部<i class="el-icon-plus"></i
    ></el-button>
    <div class="songs" v-show="isShow">
      <detail-list :song-list="dailySongs"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailList from "@/components/SongDetail/DetailList";
import { getEverySongs } from "../../network/recentplay";
import { mapState } from "vuex";
export default {
  data() {
    return {
      dailySongs: [],
      isShow: false
    };
  },
  methods: {
    async getDailySongs() {
      const res = await getEverySongs();
      this.dailySongs = res.data.dailySongs;
      this.$store.commit("getSongList", this.dailySongs);
    },
    playAll(id) {
      this.$bus.$emit("getMusic", id);
    },
    clearSongs() {
      this.isShow = false;
    }
  },
  computed: {
    ...mapState(["songList"])
  },
  created() {
    if (!this.isShow) {
      this.getDailySongs();
      this.isShow = !this.isShow;
    }
  },
  components: {
    DetailList
  }
};
</script>
<style lang="less">
.recentplay {
  margin-top: 20px;
  .title {
    width: 1100px;
    margin-bottom: 40px;
    display: flex;
    flex: 1;
    h3 {
      color: black;
      margin-right: 15px;
    }
    .number {
      color: gray;
      margin-top: 5px;
      font-size: 13px;
      margin-right: 900px;
    }
    .clear {
      color: tomato;
    }
  }
  .el-button--danger {
    background-color: red;
    border-color: red;
  }
  .el-button {
    i {
      margin: 0 5px;
    }
  }
}
</style>