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
    <hit-play :hot-list='HotList'></hit-play>
    <!-- 网易出品mv -->
    <cloud-play :cloud-list='cloudList'></cloud-play>
  </div>
</template>
<script>
import Latest from "@/components/MvCategoryList/Latest";
import HitPlay from '@/components/MvCategoryList/HitPlay'
import CloudPlay from '@/components/MvCategoryList/CloudPlay'
import { getLatest, getHotMv ,getCloudMv} from "../../network/mvcategory";
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
      HotList:[],
      cloudList:[]
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
    },
    //获取热播mv
    async getHotMv() {
      const res = await getHotMv();
      this.HotList = res.result
    },
    //获取网易出品mv
    async getCloudMv(limit) {
      const res = await getCloudMv(limit);
      this.cloudList = res.data
      console.log(res);
    }
  },
  created() {
    this.getLatest(this.queryInfo);
    this.getHotMv()
    this.getCloudMv(this.queryInfo.limit)

  },
  components: {
    Latest,
    HitPlay,
    CloudPlay
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