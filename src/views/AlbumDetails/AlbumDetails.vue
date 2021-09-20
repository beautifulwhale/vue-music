<template>
  <div>
    <album-top :album-top="albumTop"></album-top>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="first">
        <detail-list :song-list="albumSongs"></detail-list>
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">
        <comments
          :comment-list="commentList"
          :hot-comment-list="hotCommentList"
          :comment-total="commentTotal"
          :album-id="Number(albumId)"
        ></comments>
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
      <el-tab-pane label="专辑详情" name="third">
        {{ albumTop.description }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import AlbumTop from "@/views/AlbumDetails/AlbumTop";
import DetailList from "@/components/SongDetail/DetailList";
import Comments from "@/components/SongDetail/Comments";
import { getAlbumContent, getAlbumComment } from "../../network/album";
export default {
  data() {
    return {
      albumId: 0,
      activeName: "first",
      //专辑头部参数
      albumTop: {},
      //专辑的歌曲
      albumSongs: [],
      limit: 50,
      offset: 0,
      currentPage: 1,
      pageSize: 50,
      commentList: [],
      hotCommentList: [],
      commentTotal: 0
    };
  },
  methods: {
    async getAlbumContent(id) {
      const res = await getAlbumContent(id);
      this.albumTop = res.album;
      this.albumSongs = res.songs;
      this.$store.commit("getSongList", this.albumSongs);
      console.log(res);
    },
    async AlbumComment(id, limit, offset) {
      const res = await getAlbumComment(id, limit, offset);
      this.commentList = res.comments;
      this.hotCommentList = res.hotComments;
      this.commentTotal = res.total;
      console.log(res);
    },
    handleClick() {},
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.offset = (this.currentPage - 1) * this.limit;
      this.AlbumComment(this.albumId, this.limit, this.offset);
    }
  },
  created() {
    this.albumId = this.$route.query.id;
    this.getAlbumContent(this.albumId);
    this.AlbumComment(this.albumId, this.limit, this.offset);
  },
  components: {
    AlbumTop,
    DetailList,
    Comments
  }
};
</script>
<style lang="less" scoped>
</style>