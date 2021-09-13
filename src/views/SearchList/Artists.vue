<template>
  <div>
    <recom-singer :recomSinger="artists"></recom-singer>
  </div>
</template>
<script>
import RecomSinger from "@/components/RecomSinger/RecomSinger";
export default {
  props: {
    artists: {
      type: Array,
      default: () => []
    }
  },
  components: {
    RecomSinger
  }
};
</script>
<style lang="less" scoped>
</style>