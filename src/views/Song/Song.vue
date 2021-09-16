<template>
  <div>
    <!-- 歌单分类 -->
    <song-filter
      :hot-song-categories="hotSongCategories"
      :song-categories="songCategories"
      @goSongChange="goSongChange"
    ></song-filter>
    <!-- 歌单 -->
    <song-list :song-list="allSongList"></song-list>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import SongFilter from "@/components/SongList/SongFilter";
import SongList from "@/components/SongList/SongList";
import { getAllSong, getSongCategories, getHotSong } from "../../network/song";
export default {
  data() {
    return {
      allSongList: [],
      songCategories: {},
      hotSongCategories: [],
      currentPage: 1,
      pageSize: 35,
      total: 0,
      queryInfo: {
        order: "hot",
        cat: "全部",
        limit: 30,
        offset: 0
      }
    };
  },
  methods: {
    async getAllSong(params) {
      const res = await getAllSong(
        params.order,
        params.cat,
        params.limit,
        params.offset
      );
      this.allSongList = res.playlists;
      this.total = res.total;
    },
    async getSongCategories() {
      const res = await getSongCategories();
      this.songCategories = res;
    },
    async getHotSong() {
      const res = await getHotSong();
      this.hotSongCategories = res.tags;
    },
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.queryInfo.offset = (this.currentPage - 1) * this.queryInfo.limit;
      this.getAllSong(this.queryInfo);
    },
    goSongChange(name) {
      this.queryInfo.cat = name;
      this.getAllSong(this.queryInfo)
    }
  },
  created() {
    //获取全部歌单
    this.getAllSong(this.queryInfo);
    this.getSongCategories();
    this.getHotSong();
  },
  components: {
    SongFilter,
    SongList
  }
};
</script>
<style lang="less" scoped>
.pagination {
  width: 554px;
  height: 32px;
  margin: 20px auto;
  ::v-deep {
  .el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #fff; // 进行修改未选中背景和字体
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: red; // 进行修改选中项背景和字体
    color: #fff;
  }
}
}
</style>