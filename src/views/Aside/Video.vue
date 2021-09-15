<template>
  <div class="video">
    <div class="videoclass">
      <!-- 视频分类 -->
      <router-link class="routers" active-class="activeClass" to="/videoinfo"
        >视频</router-link
      >
      <!-- 分类MV -->
      <router-link class="routers" active-class="activeClass" to="/mvcategory"
        >MV</router-link
      >
      <!-- 全部视频 -->
      <router-link class="routers" active-class="activeClass" to="/mv"
        >全部视频</router-link
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
  width: 1100px;
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
  .content{
    width: 1200px;
  }
}
</style>