<template>
  <div>
    <mv-filter
      :region="region"
      :type="type"
      :order="order"
      :region-active="regionActive"
      :type-active="typeActive"
      :order-active="orderActive"
      @changeMv="changeMv"
    ></mv-filter>
    <!-- mv列表 -->
    <mv-list :mv-list="mvList"></mv-list>
    <!-- 分页 -->
    <!-- 分页 -->
    <div class="paging">
      <el-button type="info" plain :disabled="pageUp" @click="pagePre"
        >上一页</el-button
      >
      <el-button type="info" plain :disabled="pageDown" @click="pageNext"
        >下一页</el-button
      >
    </div>
  </div>
</template>
<script>
import MvFilter from "@/components/MvList/MvFilter";
import MvList from "@/components/MvList/MvList";
import { getMvCat } from "../../network/mv";
export default {
  data() {
    return {
      queryInfo: {
        limit: 16,
        offset: 0,
        type: "全部",
        area: "全部",
        order: "上升最快"
      },
      region: ["全部", "内地", "港台", "欧美", "日本", "韩国"],
      type: ["全部", "官方版", "原生", "现场版", "网易出品"],
      order: ["上升最快", "最热", "最新"],
      regionActive: "全部",
      typeActive: "全部",
      orderActive: "上升最快",
      mvList: []
    };
  },
  computed: {
    pageUp() {
      return this.queryInfo.offset === 0 ? true : false;
    },
    pageDown() {
      return this.mvList.length < 16 ? true : false;
    }
  },
  methods: {
    async getMvCat(params) {
      const res = await getMvCat(
        params.limit,
        params.order,
        params.offset,
        params.type,
        params.area
      );
      this.mvList = res.data;
    },
    changeMv(obj) {
      if (obj.type === "region") {
        this.queryInfo.area = obj.item;
        this.regionActive = obj.item;
      } else if (obj.type === "type") {
        this.queryInfo.type = obj.item;
        this.typeActive = obj.item;
      } else if (obj.type === "order") {
        this.queryInfo.order = obj.item;
        this.orderActive = obj.item;
      } else {
        return null;
      }
      this.getMvCat(this.queryInfo);
    },
    pagePre() {
      this.queryInfo.offset -= 16;
      this.getMvCat(this.queryInfo);
    },
    pageNext() {
      this.queryInfo.offset += 16;
      this.getMvCat(this.queryInfo);
    }
  },
  created() {
    this.getMvCat(this.queryInfo);
  },
  components: {
    MvFilter,
    MvList
  }
};
</script>
<style lang="less" scoped>
.paging {
  width: 500px;
  height: 80px;
  margin: 50px auto;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>