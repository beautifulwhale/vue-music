<template>
  <div class="mvcategory">
    <!-- 最新mv -->
    <latest
      :latest-list="latestList"
      :sellect-area="sellectArea"
      :area="area"
      @changeArea="changeArea"
    ></latest>
    <!-- 热播MV -->
    <hit-play :hot-list="HotList"></hit-play>
    <!-- 网易出品mv -->
    <cloud-play :cloud-list="cloudList"></cloud-play>
    <!-- 排行榜 -->
    <mv-rank
      :mv-rank-list="mvRankList"
      :area="area"
      @changeArea="changeArea"
      :sellect-area="sellectArea"
    ></mv-rank>
    <!-- 排行榜详情 -->
    <!-- <mv-rank-detail :mv-rank-list="mvRankList"></mv-rank-detail> -->
  </div>
</template>
<script>
import Latest from "@/components/MvCategoryList/Latest";
import HitPlay from "@/components/MvCategoryList/HitPlay";
import CloudPlay from "@/components/MvCategoryList/CloudPlay";
import MvRank from "@/components/MvCategoryList/MvRank";
// import MvRankDetail from '@/views/MvCategory/MvRankDetail'
import {
  getLatest,
  getHotMv,
  getCloudMv,
  getMvRank
} from "../../network/mvcategory";
export default {
  data() {
    return {
      queryInfo: {
        limit: 8,
        area: "内地"
      },
      area: ["内地", "港台", "欧美", "日本", "韩国"],
      sellectArea: "内地",
      latestList: [],
      HotList: [],
      cloudList: [],
      mvRankList: []
    };
  },
  methods: {
    //最新mv
    async getLatest(params) {
      const res = await getLatest(params.limit, params.area);
      this.latestList = res.data;
    },
    changeArea(area) {
      this.queryInfo.area = area;
      this.sellectArea = area;
      this.getLatest(this.queryInfo);
      this.getMvRank(this.queryInfo);
    },
    //获取热播mv
    async getHotMv() {
      const res = await getHotMv();
      this.HotList = res.result;
    },
    //获取网易出品mv
    async getCloudMv(limit) {
      const res = await getCloudMv(limit);
      this.cloudList = res.data;
    },
    //mv排行榜
    async getMvRank(params) {
      const res = await getMvRank(params.limit, params.area);
      this.mvRankList = res.data;
    },
  },
  created() {
    this.getLatest(this.queryInfo);
    this.getHotMv();
    this.getCloudMv(this.queryInfo.limit);
    this.getMvRank(this.queryInfo);
  },
  components: {
    Latest,
    HitPlay,
    CloudPlay,
    MvRank,
  }
};
</script>
<style lang="less" scoped>
.mvcategory {
  width: 1160px;
  margin-top: 70px;
  margin-left: 40px;
}
</style>