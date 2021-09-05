<template>
  <div class="avatar">
    <div class="like">
      <i class="iconfont icon-xihuan1"></i>
      <span>喜欢歌单的人</span>
    </div>
    <div class="avatarlist">
      <div class="avatar-item" v-for="(item, index) in likeList" :key="index">
        <img :src="item.avatarUrl" />
      </div>
      <!-- <div class="mark" v-show="isShowMark">{{ item.nickname }}</div> -->
    </div>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     isShowMark: false
  //   };
  // },
  props: {
    likeList: {
      type: Array,
      default: () => []
    }
  }
  // methods: {
  //   mouseenter() {
  //     this.isShowMark = true;
  //   },
  //   mouseleave() {
  //     this.isShowMark = false;
  //   }
  // }
};
</script>
<style lang="less" scoped>
.avatar {
  width: 380px;
  cursor: pointer;
  .like {
    font-size: 14px;
    span {
      margin-left: 3px;
    }
  }
  .avatarlist {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .avatar-item {
    width: 38px;
    height: 38px;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    img {
      width: 38px;
      height: 38px;
      border-radius: 7px;
    }
  }
  // .mark {
  //   height: 15px;
  //   // width: 100px;
  //   background-color: rgb(218, 216, 205);
  //   position: absolute;
  //   top: -20px;
  //   left: 19px;
  // }
}
</style>