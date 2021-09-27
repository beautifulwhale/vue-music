<template>
  <div class="user">
    <user-info :user-info="userInfo"></user-info>
    <div class="playlist">
      <!-- 个人创建歌单 -->
      <div class="title">
        <h4>歌单({{ personalList.length }})</h4>
      </div>
      <div class="personal">
        <div class="playlist-item" v-for="item in personalList" :key="item.id">
          <user-play-item :play-item="item"></user-play-item>
        </div>
      </div>
      <!-- 收藏的歌单 -->
      <div class="title">
        <h4>收藏({{ myCollectList.length }})</h4>
      </div>
      <div class="collect">
        <div class="playlist-item" v-for="item in myCollectList" :key="item.id">
          <user-play-item :play-item="item"></user-play-item>
        </div>
      </div>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          v-if="myCollectList.length >= 30"
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
      limit: 169,
      offset: 0,
      playList: [],
      playListCount: 0,
      total: 0,
      currentPage: 1,
      pageSize: 30,
      personalList: [],
      myCollectList: []
    };
  },
  methods: {
    //获取用户详细信息
    async getUserDetail(id) {
      const res = await getUserDetail(id);
      this.userInfo = res;
      this.total = res.profile.playlistCount;
      console.log(res)
    },
    //获取用户的歌单
    async UserPlayList(id, limit, offset) {
      const res = await getUserPlayList(id, limit, offset);
      this.playList = res.playlist;
      this.playList.filter(item => {
        if (item.userId === Number(this.$route.query.id)) {
          this.personalList.push(item);
        }
      });
      let playListSet = new Set(this.playList);
      let personalListSet = new Set(this.personalList);
      let diff = new Set(
        [...playListSet].filter(function(item) {
          return !personalListSet.has(item);
        })
      );
      this.myCollectList = [...diff];
    },
    async getUserSubcount() {
      const res = await getUserSubcount();
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
  .personal,
  .collect {
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