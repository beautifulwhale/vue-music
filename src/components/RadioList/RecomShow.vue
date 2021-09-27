<template>
  <div class="recomshow">
    <div class="title"><h3>本周上新</h3></div>
    <div class="show">
      <div class="showitem" v-for="item in recomShowList" :key="item.id">
        <show-item :show-item="item"></show-item>
      </div>
    </div>
  </div>
</template>
<script>
import ShowItem from "@/components/RadioList/ShowItem";
export default {
  props: {
    recomShowList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ShowItem
  }
};
</script>
<style lang="less" scoped>
.recomshow {
  width: 1200px;
  .title {
    margin-top: 20px;
    margin-bottom: 20px;
    color: black;
  }
  .show {
    width: 1200px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .showitem {
      width: 400px;
      height: 70px;
      margin-bottom: 20px;
    }
  }
}
</style>