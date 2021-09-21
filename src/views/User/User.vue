<template>
  <div class="user">
    <user-info :user-info="userInfo"></user-info>
    <div class="title"><h4>歌单({{playList.length}})</h4></div>
    <div class="playlist">
      <div class="playlist-item" v-for="item in playList" :key="item.id">
        <user-play-item :play-item="item"></user-play-item>
      </div>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          v-if="playList.length >= 30"
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
  </div>
</template>
<script>
import UserInfo from "@/views/User/UserInfo";
import UserPlayItem from "@/components/PlayListItem/UserPlayItem";
import {
  getUserDetail,
  getUserPlayList,
  getUserSubcount
} from "../../network/user";
export default {
  data() {
    return {
      userId: 0,
      userInfo: {},
      limit: 29,
      offset: 0,
      playList: [],
      playListCount: 0,
      total: 0,
      currentPage: 1,
      pageSize: 30
    };
  },
  methods: {
    //获取用户详细信息
    async getUserDetail(id) {
      const res = await getUserDetail(id);
      this.userInfo = res;
      this.total = res.profile.playlistCount;
    },
    //获取用户的歌单
    async UserPlayList(id, limit, offset) {
      const res = await getUserPlayList(id, limit, offset);
      this.playList = res.playlist;
    },
    async getUserSubcount() {
      const res = await getUserSubcount();
      // console.log(res);
    },
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.limit = 30;
      this.offset = (this.currentPage - 1) * this.limit;
      this.UserPlayList(this.userId, this.limit, this.offset);
    }
  },
  created() {
    this.userId = this.$route.query.id;
    this.getUserDetail(this.userId);
    this.UserPlayList(this.userId, this.limit, this.offset);
    this.getUserSubcount();
  },
  components: {
    UserInfo,
    UserPlayItem
  }
};
</script>
<style lang="less" scoped>
.user {
  width: 1260px;
  .title {
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 30px;
    color: black;
  }
  .playlist {
    width: 1260px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-left: 20px;
    .playlist-item {
      width: 180px;
      height: 230px;
      margin-right: 20px;
      margin-bottom: 30px;
    }
    .pagination {
      width: 554px;
      height: 32px;
      margin: 20px auto;
    }
  }
}
</style>