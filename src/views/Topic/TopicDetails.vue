<template>
  <div class="topdetails">
    <topic-desc :topic-desc="topicDesc"></topic-desc>
    <div class="recom">
      <recom-topic></recom-topic>
    </div>
    <topic-event></topic-event>
  </div>
</template>
<script>
import TopicDesc from "@/views/Topic/TopicDesc";
import RecomTopic from "@/views/Topic/RecomTopic";
import TopicEvent from "@/views/Topic/TopicEvent";
import { getTopicDetail, getTopicEvent } from "../../network/topic";
export default {
  data() {
    return {
      actId: 0,
      topicDesc: {},
      topicDynamic: []
    };
  },
  methods: {
    async getTopicDetail(id) {
      const res = await getTopicDetail(id);
      this.topicDesc = res.act;
    },
    async getTopicEvent(id) {
      const res = await getTopicEvent(id);
      console.log(res);
    }
  },
  mounted() {
    this.actId = this.$route.query.id;
    this.getTopicDetail(this.actId);
    this.getTopicEvent(this.actId);
    this.$bus.$on("changeTopic", id => {
      this.getTopicDetail(id);
    });
  },
  components: {
    TopicDesc,
    RecomTopic,
    TopicEvent
  }
};
</script>
<style lang="less" scoped>
.topdetails {
  width: 1060px;
  height: 680px;
  border-right: 1px solid gainsboro;
  padding: 15px 0px;
  position: relative;
  .recom {
    position: absolute;
    right: -200px;
    top: 0px;
  }
}
</style>