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
    return {
      
    }
  },
  components: {
    HotSearchItem
  },
  methods: {
    searchHot(keywords) {
      this.$emit('searchHot',keywords);
    }
  }
};
</script>
<style lang="less" scoped>
.hot-search {
  width: 350px;
  height: 500px;
  background-color: #fff;
  z-index: 99;
  position: fixed;
  top: 70px;
  left: 320px;
  overflow: scroll;
  padding: 20px;
  .hot-search::-webkit-scrollbar {
    display: none;
    width: 0;
  }
}
</style>