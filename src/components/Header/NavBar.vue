<template>
  <div class="header_title">
    <img src="../../assets/image/logo.jpg" />
    <!-- 搜索 -->
    <search></search>
  </div>
</template>
<script>
import Search from "@/components/Header/Search";
export default {
  components: {
    Search
  }
};
</script>
<style lang="less" scoped>
.header_title {
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 0 1px rgba(0, 0, 0, 0.8);
  img {
    padding: 4px 20px;
  }
 
}
</style>