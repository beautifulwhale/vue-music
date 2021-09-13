<template>
  <div class="hot-search-item" @click="searchHot(hotSearchItem.searchWord)">
    <div
      class="number"
      :class="number === 1 || number === 2 || number === 3 ? 'active' : ''"
    >
      {{ number }}
    </div>
    <div class="info">
      <div class="search-info">
        <span class="keysword">{{ hotSearchItem.searchWord }}</span>
        <span class="img">
          <img :src="hotSearchItem.iconUrl" v-if="hotSearchItem.iconUrl" />
        </span>
        <span class="score">{{ hotSearchItem.score }}</span>
      </div>
      <div class="desc">{{ hotSearchItem.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hotSearchItem: {
      type: Object,
      default() {
        return {};
      }
    },
    number: {
      type: Number,
      default: 0
    }
  },
  methods: {
    searchHot(keywords) {
      this.$router.push({
        path: "/search",
        query: { keywords: keywords }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.hot-search-item {
  width: 350px;
  height: 50px;
  display: flex;
  flex: 1;
  align-items: center;
  .number {
    color: gainsboro;
    font-size: 15px;
    margin-right: 20px;
  }
  .active {
    color: red;
    font-weight: bold;
  }
  .info {
    width: 300px;
    height: 35px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .search-info {
      width: 300px;
      .keysword {
        font-size: 11px;
        font-weight: bold;
        margin-right: 5px;
      }
      .img {
        width: 30px;
        height: 10px;
        img {
          width: 25px;
          height: 15px;
          margin-right: 5px;
        }
      }
      .score {
        font-size: 11px;
        color: gainsboro;
      }
    }
    .desc {
      font-size: 10px;
      color: gainsboro;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>