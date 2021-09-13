<template>
  <div class="title">
    <i class="iconfont icon-fenge"></i>
    <h2>{{ titleName }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    titleName: {
      type: String
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  cursor: pointer;
  i {
    font-size: 30px;
    font-weight: bolder;
    color: turquoise;
  }
  h2 {
    padding: 5px;
  }
}
</style>