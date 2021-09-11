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
        <comments :comment-list="commentList" :hot-comment-list='hotCommentList'></comments>
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
      hotCommentList:[],
      contentToggle: "全部",
      isShowDesc: false,
      activeName: "first"
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
      this.songList = result.songs;
      console.log(result)
      this.$store.commit('getSongList',this.songList)
    },
    async getPlayListCollect(id) {
      const res = await getPlayListCollect(id);
      this.likeList = res.subscribers;
    },
    async getRelated(id) {
      const res = await getRelated(id);
      this.relatedPlayList = res.playlists;
    },
    async getComment(id) {
      const res = await getComment(id);
      this.commentList = res.comments;
      this.hotCommentList = res.hotComments
    },
    toggleDescClick() {
      this.isShowDesc = !this.isShowDesc;
      this.contentToggle = "收起";
      if (!this.isShowDesc) {
        this.contentToggle = "全部";
      }
    },
    handleClick(tab, event) {
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getPlayListDetails(this.id);
    this.getPlayListCollect(this.id);
    this.getRelated(this.id);
    this.getComment(this.id);
  },
  mounted() {},
  // watch: {
  //   $route: {
  //     handler(to) {
  //       //to: 目标路由对象
  //       //刷新歌单
  //       this.getPlayListDetails(to.query.id);
  //       this.getPlayListCollect(to.query.id);
  //       this.getRelated(to.query.id);
  //       this.getComment(to.query.id);
  //     }
  //   }
  // },

  beforeRouteUpdate(to, from, next) {
    // to：目标路由对象
    // from：原路由对象
    // next：可指定路由进行跳转
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
  width: 1200px;
  margin-top: 90px;
  position: relative;
  .smoke-mark {
    position: absolute;
    width: 683px;
    padding: 10px;
    background-color: #fff;
    top: 140px;
    left: 270px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }
}

// .like-card {
//   width: 380px;
//   border-radius: 10px;
//   box-shadow: 0 0 5px gray;
// }
// .related-card {
//   width: 380px;
//   border-radius: 10px;
//   box-shadow: 0 0 5px gray;
//   margin-top: 20px;
// }
// .comment-card {
//   margin-top: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 5px gray;
//   margin-top: 20px;
// }

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
</style>