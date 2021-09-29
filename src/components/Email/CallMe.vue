<template>
  <div class="callme">
    <div class="follow" v-for="item in callMeList" :key="item.id">
      <call-me-item :call-me-item="item"></call-me-item>
    </div>
  </div>
</template>
<script>
import CallMeItem from "@/components/Email/CallMeItem";
export default {
  props: {
    callMeList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CallMeItem
  }
};
</script>
<style lang="less" scoped>
.callme {
  width: 330px;
  height: 650px;
  overflow-y: scroll;
  .follow {
    width: 330px;
    height: 120px;
  }
}
</style>