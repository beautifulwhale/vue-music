<template>
  <div class="event">
    <div class="title">所有动态</div>
    <div class="event-items">
      <div class="event-item" v-for="item in allEventList" :key="item.id">
        <topic-event-item :event-item="item"></topic-event-item>
      </div>
    </div>
  </div>
</template>
<script>
import TopicEventItem from "@/views/Topic/TopicEventItem";
export default {
  props: {
    allEventList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    TopicEventItem
  }
};
</script>
<style lang="less" scoped>
.event {
  width: 1060px;
  padding: 10px 0;
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