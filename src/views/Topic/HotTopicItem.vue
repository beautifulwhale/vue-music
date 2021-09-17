<template>
  <div class="hot-topic-item" @click="getTopicDetail(hotTopicItem.actId)">
    <div class="img">
      <img :src="hotTopicItem.sharePicUrl" alt="" />
    </div>
    <div class="message-info">
      <div class="title">#{{ hotTopicItem.title }}</div>
      <div class="person">{{ hotTopicItem.participateCount }}人参加</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hotTopicItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    getTopicDetail(id) {
      this.$router.push({ path: "/topicdetails", query: { id: id } });
      this.$bus.$emit("changeTopic", id);
    }
  }
};
</script>
<style lang="less" scoped>
.hot-topic-item {
  width: 230px;
  height: 40px;
  display: flex;
  flex: 1;
  cursor: pointer;
  margin-bottom: 5px;
  .img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    img {
      width: 35px;
      border-radius: 5px;
      height: 35px;
    }
  }
  .message-info {
    width: 230px;
    .title {
      font-size: 12px;
      margin-bottom: 5px;
    }
    .person {
      font-size: 12px;
      color: gainsboro;
    }
  }
}
</style>