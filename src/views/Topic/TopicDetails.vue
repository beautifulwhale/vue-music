<template>
  <div class="topdetails">
    <topic-desc :topic-desc="topicDesc" @partTopic="partTopic"></topic-desc>
    <write-dynamic
      v-show="isWrite"
      class="write-content"
      :is-show="isWrite"
      @closeCard="closeCard"
    ></write-dynamic>
    <div class="recom">
      <recom-topic></recom-topic>
    </div>
    <hot-topic-event :topic-event-list="topicEventList"></hot-topic-event>
  </div>
</template>
<script>
import TopicDesc from "@/views/Topic/TopicDesc";
import RecomTopic from "@/views/Topic/RecomTopic";
import HotTopicEvent from "@/views/Topic/HotTopicEvent";
import WriteDynamic from "@/components/WriteDynamic/WriteDynamic";
import { getTopicDetail, getTopicEvent } from "../../network/topic";
export default {
  data() {
    return {
      actId: 0,
      topicDesc: {},
      topicDynamic: [],
      topicEventList: [],
      isWrite: false
    };
  },
  methods: {
    async getTopicDetail(id) {
      const res = await getTopicDetail(id);
      this.topicDesc = res.act;
    },
    //获取话题动态
    async getTopicEvent(id) {
      const res = await getTopicEvent(id);
      this.topicEventList = res.events;
      // console.log(res)
    },
    closeCard() {
      this.isWrite = false;
    },
    partTopic() {
      this.isWrite = true;
    }
  },
  mounted() {
    this.actId = this.$route.query.id;
    this.getTopicDetail(this.actId);
    this.getTopicEvent(this.actId);
    this.$bus.$on("changeTopic", id => {
      this.getTopicDetail(id);
      this.getTopicEvent(id);
    });
  },
  components: {
    TopicDesc,
    RecomTopic,
    HotTopicEvent,
    WriteDynamic
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
  .write-content {
    position: absolute;
    top: 70px;
    left: 250px;
    z-index: 9;
  }
  .recom {
    position: absolute;
    right: -200px;
    top: 0px;
  }
}
</style>