<template>
  <div class="recomsongitem" @click="playListClick(recomSongItem.id)">
    <div class="image">
      <img :src="imageUrl" />
      <div class="playnumber">
        <div class="playnum" v-if="recomSongItem.playCount">
          <i class="el-icon-service"></i>
          <span>{{ listenNumber }}</span>
        </div>
        <a
          @mouseenter="mouseEnter"
          @mouseleave="mouseLeave"
          class="iconfont icon-wodetubiao-253"
          :class="{ activeClass: isActive }"
        ></a>
      </div>
    </div>
    <div class="title">
      {{ recomSongItem.name }}
    </div>
    <div class="publish-time" v-if="recomSongItem.publishTime">
      {{publishTime}}
    </div>
  </div>
</template>
<script>
import { tranNumber,dateFormat } from "../../utils/utils";
export default {
  props: {
    recomSongItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    listenNumber() {
      if(this.recomSongItem.playCount){
        return tranNumber(this.recomSongItem.playCount, 0);
      }
    },
    imageUrl() {
      return this.recomSongItem.picUrl || this.recomSongItem.coverImgUrl;
    },
    publishTime(){
       if(this.recomSongItem.publishTime){
        return dateFormat(this.recomSongItem.publishTime);
      }
    }
  },
  methods: {
    mouseEnter() {
      this.isActive = true;
    },
    mouseLeave() {
      this.isActive = false;
    },
    playListClick(id) {
      this.$router.push({ path: "/songdetails", query: { id: id } });
    }
  }
};
</script>
<style lang="less" scoped>
.recomsongitem {
  width: 174px;
  height: 208px;
  padding: 0 8px 30px 5px;
  cursor: pointer;
  .image {
    img {
      border-radius: 10px;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      width: 130px;
      height: 130px;
      position: relative;
    }
    .playnumber {
      width: 130px;
      height: 30px;
      position: absolute;
      margin-top: -32px;
      background-color: black;
      opacity: 0.5;
      border-radius: 5px;
      padding: 0 5px;
      display: flex;
      justify-content: space-between;
      i {
        color: white;
      }
      span {
        line-height: 30px;
        color: white;
      }
      a {
        width: 25px;
        height: 25px;
        line-height: 30px;
        padding-left: 10px;
        color: whitesmoke;
      }
      .activeClass {
        color: red;
      }
    }
  }
  .title {
    font-size: 13px;
    color: gray;
    margin: 5px 0;
    font-weight: bold;
  }
  .publish-time{
    font-size: 12px;
    color: gray;
  }
}
</style>

