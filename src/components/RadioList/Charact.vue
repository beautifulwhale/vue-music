<template>
  <div class="charact">
    <div class="title">
      <h3>猜你喜欢</h3>
    </div>
    <div class="mycharact">
      <div class="radio-item" v-for="item in charactList" :key="item.id">
        <radio-item :radio-item="item"></radio-item>
      </div>
    </div>
  </div>
</template>
<script>
import RadioItem from "@/components/RadioList/RadioItem";
export default {
  props: {
    charactList: {
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
.charact {
  width: 1200px;
  .title {
    width: 1200px;
    color: black;
    margin: 20px 0;
  }
  .mycharact {
    width: 1200px;
    display: flex;
    flex: 1;
    .radio-item {
      width: 180px;
      height: 220px;
      margin-right: 20px;
    }
  }
}
</style>