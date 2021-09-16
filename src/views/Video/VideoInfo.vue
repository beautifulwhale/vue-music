<template>
  <div class="videoinfo">
    <video-filter
      :video-label="videoLabel"
      :video-cate="videoCate"
      @getManyVideo="getManyVideo"
    ></video-filter>
    <video-list :video-list="videoList"></video-list>
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
import VideoFilter from "@/components/VideoList/VideoFilter";
import VideoList from "@/components/VideoList/VideoList";
import {
  getAllVideo,
  getVideoLabel,
  getVideoCate,
  getVideo
} from "../../network/video";
export default {
  data() {
    return {
      offset: 0,
      videoLabel: [],
      videoCate: [],
      queryInfo: {
        id: 58100,
        offset: 0
      },
      videoList: [],
      currentPage: 1,
      pageSize: 8,
      total: 3000
    };
  },
  created() {
    this.getAllVideo(this.offset);
    this.getVideoLabel();
    this.getVideoCate();
    this.getVideo(this.queryInfo);
  },
  methods: {
    async getAllVideo(params) {
      const res = await getAllVideo(params);
    },
    //获取全部视频标签列表
    async getVideoLabel() {
      const res = await getVideoLabel();
      this.videoLabel = res.data;
    },
    //获取全部视频分类列表
    async getVideoCate() {
      const res = await getVideoCate();
      this.videoCate = res.data;
    },
    //获取视频标签/分类下的视频
    async getVideo(params) {
      const res = await getVideo(params.id, params.offset);
      this.videoList = res.datas;
    },
    getManyVideo(id) {
      this.queryInfo.id = id;
      this.getVideo(this.queryInfo);
    },
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.queryInfo.offset = (this.currentPage - 1) * 8;
      this.getVideo(this.queryInfo);
    }
  },
  components: { VideoFilter, VideoList }
};
</script>
<style lang="less" scoped>
.videoinfo {
  width: 1160px;
  height: 700px;
  margin-top: 80px;
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
}
</style>