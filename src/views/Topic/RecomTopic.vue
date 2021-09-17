<template>
  <div class="recom-topic">
    <div class="title">
      推荐话题
    </div>
    <div class="topic-item" v-for="item in TopicList" :key="item.actId">
      <hot-topic-item :hot-topic-item="item"></hot-topic-item>
    </div>
  </div>
</template>
<script>
import HotTopicItem from "@/views/Topic/HotTopicItem";
import { getHotTopic } from "../../network/topic";
export default {
  data() {
    return {
      TopicInfo: {
        limit: 10,
        offset: 3
      },
      TopicList: []
    };
  },
  methods: {
    async getTopicRank(params) {
      const res = await getHotTopic(params.limit, params.offset);
      this.TopicList = res.hot;
    }
  },
  created() {
    this.getTopicRank(this.TopicInfo);
  },
  components: {
    HotTopicItem
  }
};
</script>
<style lang="less" scoped>
.recom-topic {
  width: 200px;
  height: 500px;
  padding: 20px 15px;
  .title {
    width: 230px;
    height: 20px;
    font-size: 13px;
    color: black;
  }
}
</style>