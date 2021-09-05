<template>
  <div class="header_title">
    <img src="../../assets/image/logo.jpg" />

    <!-- 分类 -->
    <div class="detailrouter">
      <router-link class="routers" active-class="activeClass" to="/recommend"
        >发现音乐</router-link
      >
      <router-link class="routers" active-class="activeClass" to="/rank"
        >排行榜</router-link
      >
      <router-link class="routers" active-class="activeClass" to="/song"
        >歌单</router-link
      >
      <router-link class="routers" active-class="activeClass" to="/singer"
        >歌手</router-link
      >
      <router-link class="routers" active-class="activeClass" to="/mv"
        >MV</router-link
      >
    </div>
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
  .detailrouter {
    display: flex;
    justify-content: space-between;
    .routers {
      width: 120px;
      height: 70px;
      line-height: 70px;
      font-size: 17px;
      color: rgb(153, 153, 153);
      font-weight: bold;
      text-align: center;
    }
    .activeClass {
      border-bottom: 4px solid rgb(248, 107, 107);
    }
  }
}
</style>