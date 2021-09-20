<template>
  <div class="artist">
    <div class="artist-item" v-for="(item, index) in artists" :key="index">
      <singer-item :singer-item="item" class="item"></singer-item>
    </div>
  </div>
</template>
<script>
import SingerItem from "@/components/SingerItem/SingerItem";
export default {
  props: {
    artists: {
      type: Array,
      default: () => []
    }
  },
  components: {
    SingerItem
  }
};
</script>
<style lang="less" scoped>
.artist {
  width: 1200px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  .artist-item {
    width: 170px;
    height: 190px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>