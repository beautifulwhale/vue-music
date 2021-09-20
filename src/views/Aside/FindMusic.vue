<template>
  <!-- 分类 -->
  <div class="find-music">
    <div class="detailrouter">
      <router-link class="routers" active-class="activeClass" to="/recommend"
        >个性推荐</router-link
      >
      <router-link class="routers" active-class="activeClass" to="/mycustom"
        >专属定制</router-link
      >
      <router-link class="routers" active-class="activeClass" to="/song"
        >歌单</router-link
      >
      <router-link class="routers" active-class="activeClass" to="/rank"
        >排行榜</router-link
      >
      <router-link class="routers" active-class="activeClass" to="/singer"
        >歌手</router-link
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
  width: 1300px;
  position: relative;
  .detailrouter {
    width: 1300px;
    height: 70px;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    top: 70px;
    left: 200px;
    z-index: 3;
    .routers {
      width: 80px;
      height: 30px;
      margin-left: 20px;
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
    // height: 3000px;
  }
}
</style>