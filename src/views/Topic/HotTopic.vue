<template>
  <div class="hot-topic">
    <div class="title">
      <span class="hot-title">热门话题</span>
      <span class="more" @click="getMoreTopic"
        >更多<i class="el-icon-arrow-right"></i
      ></span>
    </div>
    <div class="topic-item" v-for="item in hotTopic" :key="item.actId">
      <hot-topic-item :hot-topic-item="item"></hot-topic-item>
    </div>
  </div>
</template>
<script>
import HotTopicItem from "@/views/Topic/HotTopicItem";
export default {
  props: {
    hotTopic: {
      type: Array,
      default: () => []
    }
  },
  components: {
    HotTopicItem
  },
  methods: {
    getMoreTopic() {
      this.$router.push("/topicrank");
    }
  }
};
</script>
<style lang="less" scoped>
.hot-topic {
  width: 250px;
  height: 500px;
  padding: 20px 15px;
  .title {
    width: 230px;
    height: 20px;
    margin-bottom: 10px;
    .hot-title {
      font-size: 12px;
      color: black;
      margin-right: 130px;
    }
    .more {
      font-size: 12px;
      color: gray;
      cursor: pointer;
    }
  }
}
</style>