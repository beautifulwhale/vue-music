<template>
  <div class="notice">
    <div class="notice-item" v-for="item in noticeList" :key="item.id">
      <notice-item :notice-item="item"></notice-item>
    </div>
  </div>
</template>
<script>
import NoticeItem from "@/components/Email/NoticeItem";
export default {
  props: {
    noticeList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    NoticeItem
  }
};
</script>
<style lang="less" scoped>
.notice {
  width: 330px;
  height: 680px;
  overflow-y: scroll;
  padding: 10px 10px 0 0;
  .notice-item {
    width: 300px;
    height: 50px;
  }
}
</style>