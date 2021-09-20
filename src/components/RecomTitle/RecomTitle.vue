<template>
  <div class="title">
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
  margin-left: 20px;
  h2 {
    padding: 5px;
  }
}
</style>