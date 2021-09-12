<template>
  <div>
    <!-- 歌手分类 -->
    <singer-filter
      :language-filter="languageFilter"
      :singers-filter="singersFilter"
      :name-filter="nameFilter"
      :language-active="languageActive"
      :singers-active="singersActive"
      :name-active="nameActive"
      @changeSinger="changeSinger"
    ></singer-filter>
    <!-- 歌手详情 -->
    <singer-list :singer-list="singerList"></singer-list>
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
import SingerFilter from "@/components/SingerList/SingerFilter";
import SingerList from "@/components/SingerList/SingerList";
import { getSingerCat } from "../../network/singer";
export default {
  data() {
    return {
      queryInfo: {
        limit: 35,
        initial: "",
        offset: 0,
        type: -1,
        area: -1
      },
      languageFilter: [
        { label: "全部", value: -1 },
        { label: "华语", value: 7 },
        { label: "欧美", value: 96 },
        { label: "日本", value: 8 },
        { label: "韩国", value: 16 },
        { label: "其他", value: 0 }
      ],
      singersFilter: [
        { label: "全部", value: -1 },
        { label: "男歌手", value: 1 },
        { label: "女歌手", value: 2 },
        { label: "乐队", value: 3 }
      ],
      nameFilter: [],
      languageActive: "全部",
      singersActive: "全部",
      nameActive: "热门",
      singerList: []
    };
  },
  methods: {
    async getSingerCat(params) {
      const res = await getSingerCat(
        params.limit,
        params.initial,
        params.offset,
        params.type,
        params.area
      );
      this.singerList = res.artists;
    },
    getNameFilter() {
      let nameList = [];
      for (let i = 0; i < 26; i++) {
        nameList.push({
          label: String.fromCharCode(65 + i),
          value: String.fromCharCode(97 + i)
        });
      }
      nameList.unshift({ label: "热门", value: -1 });
      nameList.push({ label: "其他", value: 0 });
      this.nameFilter = nameList;
    },
    changeSinger(obj) {
      if (obj.type === "language") {
        this.languageActive = obj.label;
        this.queryInfo.area = obj.value;
      } else if (obj.type === "singers") {
        this.singersActive = obj.label;
        this.queryInfo.type = obj.value;
      } else {
        this.nameActive = obj.label;
        this.queryInfo.initial = obj.value;
      }
      this.queryInfo.offset = 0;
      this.getSingerCat(this.queryInfo);
    },
    pagePre() {
      this.queryInfo.offset -= 35;
      this.getSingerCat(this.queryInfo);
    },
    pageNext() {
      this.queryInfo.offset += 35;
      this.getSingerCat(this.queryInfo);
    }
  },
  computed: {
    pageUp() {
      return this.queryInfo.offset === 0 ? true : false;
    },
    pageDown() {
      return this.singerList.length < 35 ? true : false;
    }
  },
  components: {
    SingerFilter,
    SingerList
  },
  created() {
    this.getSingerCat(this.queryInfo);
    this.getNameFilter();
  }
};
</script>
<style lang="less" scoped>
.paging {
  width: 500px;
  height: 80px;
  margin: 10px auto;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>