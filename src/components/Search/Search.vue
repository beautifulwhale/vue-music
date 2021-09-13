<template>
  <div class="search">
    <el-input
      :placeholder="defaultKeyWords"
      v-model="keywords"
      class="input-with-select"
      @focus="focusEvent"
      @blur="blurEvent"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="searchContent"
      ></el-button>
    </el-input>
    <hot-search :hot-search="hotSearch" v-show="isShowHotSearch"></hot-search>
  </div>
</template>
<script>
import HotSearch from "@/components/Search/HotSearch";
import { getDefaultKeyWords, getHotSearch } from "../../network/search";
export default {
  data() {
    return {
      keywords: "",
      defaultKeyWords: "",
      hotSearch: [],
      isShowHotSearch: false,
      searchList: [],
      searchTotal: 0
    };
  },
  methods: {
    //获取默认搜索关键字
    async getDefaultKeyWords() {
      const res = await getDefaultKeyWords();
      this.defaultKeyWords = res.data.showKeyword;
    },
    //获取热搜榜
    async getHotSearch() {
      const res = await getHotSearch();
      this.hotSearch = res.data;
      console.log(res)
    },
    searchContent() {
      this.$router.push({
        path: "/search",
        query: { keywords: this.keywords }
      });
    },
    focusEvent() {
      this.isShowHotSearch = true;
    },
    blurEvent() {
      this.isShowHotSearch = false;
    }
  },
  created() {
    this.getDefaultKeyWords();
    this.getHotSearch();
  },
  components: {
    HotSearch
  }
};
</script>
<style lang="less" scoped>
.el-input {
  width: 320px;
  margin-top: 20px;
  padding: 5px 5px;
}
</style>