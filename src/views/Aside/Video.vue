<template>
  <div class="video">
    <div class="videoclass">
      <!-- 全部视频 -->
      <router-link class="routers" active-class="activeClass" to="/mv"
        >视频</router-link
      >
      <!-- 分类MV -->
      <router-link class="routers" active-class="activeClass" to="/detailmv"
        >MV</router-link
      >
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.video {
  width: 1300px;
  position: relative;
  overflow: hidden;
  .videoclass {
    width: 1300px;
    height: 70px;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    top: 70px;
    left: 200px;
    z-index: 999;
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
}
</style>