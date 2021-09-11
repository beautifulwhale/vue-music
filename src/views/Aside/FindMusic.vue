<template>
  <!-- 分类 -->
  <div class="find-music">
    <div class="detailrouter">
      <router-link class="routers" active-class="activeClass" to="/recommend"
        >个性推荐</router-link
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
    <div class="content"><router-view></router-view></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.find-music {
  width: 1200px;
  height: 3000px;
  .detailrouter {
    width: 500px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    .routers {
      width: 80px;
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      color: black;
      text-align: center;
    }
    .activeClass {
      border-bottom: 4px solid red;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .content {
    width: 1200px;
    height: 3000px;
  }
}
</style>