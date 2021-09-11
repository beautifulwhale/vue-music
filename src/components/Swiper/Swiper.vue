<template>
    <el-carousel :interval="4000" type="card"  height="220px">
    <el-carousel-item v-for="(item,index) in banners" :key="index">
      <img :src="item.url">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      banners: [
       {
          url:
            "http://p1.music.126.net/ziYdNk4Xr-fFZEm42xHrTA==/109951166334929585.jpg"
        },
        {
          url:
            "http://p1.music.126.net/UDIrm1XsxyEs2xE2DP31Yw==/109951166334962959.jpg"
        },
        {
          url:
            "http://p1.music.126.net/kmQs7ld4yqzBKTrR81Lg-w==/109951166334927795.jpg"
        },
        {
          url:
            "http://p1.music.126.net/GxfrHVC0dv3XTD02Hycwpg==/109951166334628548.jpg"
        },
        {
          url:
            "http://p1.music.126.net/CMkhOwN-QnZ-zcF1lw-NLg==/109951166336988033.jpg"
        },
        {
          url:
            "http://p1.music.126.net/aKcWJF8njQH-wjnkkdkttg==/109951166334939208.jpg"
        },
        {
          url:
            "http://p1.music.126.net/mfzAhtIYESNWzMaEsfdyIA==/109951166334950351.jpg"
        },
        {
          url:
            "http://p1.music.126.net/29AzQlxdcAZSFhhCtuJQ9w==/109951166334962635.jpg"
        }
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.el-carousel{
  width: 1100px;
  height: 300px;
  margin-top: 20px;
  img{  
    width: 100%;
    height: 220px;
    border-radius: 10px;
  }
}
  .el-carousel__item  {
    color: #475669;
    font-size: 14px;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>