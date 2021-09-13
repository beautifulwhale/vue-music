<template>
  <div>
    <mv-list :mv-list="mvs"></mv-list>
  </div>
</template>
<script>
import MvList from "@/components/MvList/MvList";
export default {
  props: {
    mvs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MvList
  }
};
</script>
<style lang="less" scoped>
</style>