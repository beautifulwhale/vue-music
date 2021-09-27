<template>
  <div class="hotradio">
    <div class="title">
      <h3>本周热门</h3>
    </div>
    <div class="hot-radio">
      <div class="hot-item" v-for="item in hotRadio" :key="item.id">
        <radio-item :radio-item="item"></radio-item>
      </div>
    </div>
  </div>
</template>
<script>
import RadioItem from "@/components/RadioList/RadioItem";
export default {
  props: {
    hotRadio: {
      type: Array,
      default: () => []
    }
  },
  components: {
    RadioItem
  }
};
</script>
<style lang="less" scoped>
.hotradio {
  width: 1200px;
  .title {
    width: 1200px;
    color: black;
    margin: 20px 0;
  }
  .hot-radio {
    width: 1200px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .hot-item {
      width: 180px;
      height: 250px;
      margin-right: 20px;
    }
  }
}
</style>