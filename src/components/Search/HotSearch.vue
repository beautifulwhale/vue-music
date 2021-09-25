<template>
  <div class="hot-search">
    <div class="title">热搜榜</div>
    <div class="hotsearch-item">
      <div class="search-item" v-for="(item, index) in hotSearch" :key="index">
        <hot-search-item
          @click.native="searchHot(item.searchWord)"
          :hot-search-item="item"
          :number="index + 1"
        ></hot-search-item>
      </div>
    </div>
  </div>
</template>
<script>
import HotSearchItem from "@/components/Search/HotSearchItem";
export default {
  props: {
    hotSearch: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {
    HotSearchItem
  },
  methods: {
    searchHot(keywords) {
      this.$emit("searchHot", keywords);
    }
  }
};
</script>
<style lang="less" scoped>
.hot-search {
  width: 390px;
  height: 500px;
  background-color: #fff;
  z-index: 99;
  position: fixed;
  top: 70px;
  left: 320px;
  overflow-y: scroll;
  padding: 20px;
}
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(252, 252, 252, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(247, 247, 247, 0.3);
  background-color: gainsboro;
}
</style>