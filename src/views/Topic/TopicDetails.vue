<template>
  <div class="topdetails">
    <topic-desc :topic-desc="topicDesc"></topic-desc>
    <div class="recom">
      <recom-topic></recom-topic>
    </div>
    <hot-topic-event :topic-event-list="topicEventList"></hot-topic-event>
    <all-topic-event :all-event-list="allEventList"></all-topic-event>
  </div>
</template>
<script>
import TopicDesc from "@/views/Topic/TopicDesc";
import RecomTopic from "@/views/Topic/RecomTopic";
import HotTopicEvent from "@/views/Topic/HotTopicEvent";
import AllTopicEvent from "@/views/Topic/AllTopicEvent";
import {
  getTopicDetail,
  getTopicEvent,
  getAllEvent
} from "../../network/topic";
export default {
  data() {
    return {
      actId: 0,
      topicDesc: {},
      topicDynamic: [],
      topicEventList: [],
      eventInfo: {
        pagesize: 50,
        lasttime: -1
      },
      allEventList: []
    };
  },
  methods: {
    async getTopicDetail(id) {
      const res = await getTopicDetail(id);
      this.topicDesc = res.act;
    },
    async getTopicEvent(id) {
      const res = await getTopicEvent(id);
      this.topicEventList = res.events;
      // console.log(res)
    },
    async getAllEvent(params) {
      const res = await getAllEvent(params.pagesize, params.lasttime);
      this.allEventList = res.event;
    }
  },
  mounted() {
    this.actId = this.$route.query.id;
    this.getTopicDetail(this.actId);
    this.getTopicEvent(this.actId);
    this.getAllEvent(this.eventInfo);
    this.$bus.$on("changeTopic", id => {
      this.getTopicDetail(id);
      this.getTopicEvent(id);
      this.getAllEvent(id);
    });
  },
  components: {
    TopicDesc,
    RecomTopic,
    HotTopicEvent,
    AllTopicEvent
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