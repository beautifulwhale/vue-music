<template>
  <div>
    <!-- 头部 -->
    <div class="playlist-info">
      <detail-top
        :song-details-top="songDetailList"
        :creator="creator"
        @toggleDescClick="toggleDescClick"
        :content-toggle="contentToggle"
      ></detail-top>
      <!-- 文字遮罩层 -->
      <transition>
        <div class="smoke-mark" v-show="isShowDesc">
          <p>{{ songDetailList.description }}</p>
        </div>
      </transition>
    </div>
    <!-- 导航栏 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="first">
        <detail-list :song-list="songList"></detail-list>
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">
        <comments
          :comment-list="commentList"
          :hot-comment-list="hotCommentList"
          :comment-total='commentTotal'
          :play-list-id='Number(id)'
        ></comments>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="commentTotal"
            background
          >
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏者" name="third">
        <collect-list :like-list="likeList"></collect-list>
      </el-tab-pane>
      <el-tab-pane label="推荐歌单" name="fourth">
        <related :related-play-list="relatedPlayList"></related>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import DetailTop from "@/components/SongDetail/DetailTop";
import DetailList from "@/components/SongDetail/DetailList";
import CollectList from "@/components/SongDetail/CollectList";
import Related from "@/components/SongDetail/Related";
import Comments from "@/components/SongDetail/Comments";
import {
  getPlayListDetails,
  getSongDetails,
  getPlayListCollect,
  getRelated,
  getComment
} from "../../network/songdetails";
import { getMvCat } from "../../network/mv";
export default {
  data() {
    return {
      id: 0,
      songDetailList: {},
      songList: [],
      songId: [],
      creator: {},
      likeList: [],
      relatedPlayList: [],
      commentList: [],
      //精彩评论
      hotCommentList: [],
      contentToggle: "全部",
      isShowDesc: false,
      activeName: "first",
      //分页
      currentPage: 1,
      pageSize: 50,
      commentTotal: 0,
      commentInfo: {
        limit: 50,
        offset: 0,
        commentId: 0
      }
    };
  },
  methods: {
    //获取歌单
    async getPlayListDetails(id) {
      const res = await getPlayListDetails(id);
      this.songDetailList = res.playlist;
      this.creator = res.playlist.creator;
      const str = [];
      this.songDetailList.trackIds.forEach(item => {
        str.push(item.id);
      });
      this.songId = str.join(",");
      this.getSongDetails(this.songId);
    },
    //获取歌曲
    async getSongDetails(id) {
      const result = await getSongDetails(id);
      console.log(result)
      this.songList = result.songs;
      this.$store.commit("getSongList", this.songList);
    },
    //获取收藏者
    async getPlayListCollect(id) {
      const res = await getPlayListCollect(id);
      this.likeList = res.subscribers;
    },
    //获取相关视频
    async getRelated(id) {
      const res = await getRelated(id);
      this.relatedPlayList = res.playlists;
    },
    //获取评论
    async getComment(params) {
      const res = await getComment(
        params.commentId,
        params.offset,
        params.limit
      );
      this.commentList = res.comments;
      this.hotCommentList = res.hotComments;
      this.commentTotal = res.total;
    },
    toggleDescClick() {
      this.isShowDesc = !this.isShowDesc;
      this.contentToggle = "收起";
      if (!this.isShowDesc) {
        this.contentToggle = "全部";
      }
    },
    handleClick(tab, event) {},
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.commentInfo.offset = (this.currentPage - 1) * this.commentInfo.limit;
      this.getComment(this.commentInfo);
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.commentInfo.commentId = this.$route.query.id;
    this.getPlayListDetails(this.id);
    this.getPlayListCollect(this.id);
    this.getRelated(this.id);
    this.getComment(this.commentInfo);
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getPlayListDetails(to.query.id);
    this.getPlayListCollect(to.query.id);
    this.getRelated(to.query.id);
    this.getComment(to.query.id);
  },
  components: {
    DetailTop,
    DetailList,
    CollectList,
    Related,
    Comments
  }
};
</script>
<style lang="less" scoped>
.playlist-info {
  width: 1160px;
  margin-top: 90px;
  position: relative;
  .smoke-mark {
    position: absolute;
    width: 683px;
    padding: 10px;
    background-color: #fff;
    top: 160px;
    left: 270px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }
}
.v-enter,
.v-leave-to {
  opacity: 0; /*透明度*/
  transform: translateY(150px);
}
/*入场(离场)动画的时间段   */
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}

.my-enter,
.my-leave-to {
  opacity: 0; /*透明度*/
  transform: translateX(70px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.8s ease;
}
.pagination {
  width: 554px;
  height: 32px;
  margin: 20px auto;
  text-align: center;
}
</style>