<template>
  <div class="mvrank">
    <div class="filter">
      <div class="title">
        <h3>MV排行榜</h3>
      </div>
      <div class="area">
        <div
          class="areaitem"
          v-for="(item, index) in area"
          :style="item === sellectArea ? 'color:red' : ''"
          :key="index"
          @click="changeArea(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="rankitem">
      <div
        class="mvrankitem"
        v-for="(item, index) in mvRankList"
        :key="item.id"
      >
        <mv-rank-item :mv-rank-item="item" :number="index + 1"></mv-rank-item>
      </div>
    </div>
  </div>
</template>
<script>
import MvRankItem from "@/components/MvCategoryList/MvRankItem";
import { getMvRank } from "../../network/mvcategory";
export default {
  data() {
    return {
      queryInfo: {
        limit: 50,
        area: "内地"
      },
      area: ["内地", "港台", "欧美", "日本", "韩国"],
      sellectArea: "内地",
      mvRankList: []
    };
  },
  methods: {
    changeArea(area) {
      this.queryInfo.area = area;
      this.sellectArea = area;
      this.getMvRank(this.queryInfo);
    },
    //mv排行榜
    async getMvRank(params) {
      const res = await getMvRank(params.limit, params.area);
      this.mvRankList = res.data;
    }
  },
  created() {
    this.getMvRank(this.queryInfo);
  },
  components: {
    MvRankItem
  }
};
</script>
<style lang="less" scoped>
.mvrank {
  margin-top: 80px;
  width: 1160px;
  height: 3300px;
  margin-left: 30px;
  .filter {
    width: 1160px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    .title {
      color: black;
      margin-right: 760px;
    }
    .area {
      width: 230px;
      height: 20px;
      display: flex;
      flex: 1;
      align-items: center;
      .areaitem {
        width: 30px;
        height: 10px;
        margin-right: 10px;
        font-size: 12px;
        color: gainsboro;
      }
    }
  }
  .rankitem {
    width: 1160px;
    height: 300px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-top: 10px;
    .mvrankitem {
      width: 550px;
      height: 120px;
      margin-top: 10px;
    }
  }
}
</style>
