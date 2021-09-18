<template>
  <div class="event">
    <div class="title">热门动态</div>
    <div class="event-items">
      <div class="event-item" v-for="item in topicEventList" :key="item.id">
        <topic-event-item :event-item="item"></topic-event-item>
      </div>
    </div>
  </div>
</template>
<script>
import TopicEventItem from "@/views/Topic/TopicEventItem";
export default {
  props: {
    topicEventList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    TopicEventItem
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.event {
  width: 1060px;
  padding: 20px 0;
  border-top: 1px solid whitesmoke;
  .title {
    margin-bottom: 20px;
  }
  .event-items {
    width: 1040px;
    .event-item {
      width: 1040px;
    }
  }
}
</style>