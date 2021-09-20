<template>
  <div
    class="play"
    @click="playListClick(playItem.id)"
    v-if="playItem && Object.keys(playItem).length !== 0"
  >
    <div class="img" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <img :src="imageUrl" />
      <div class="playcount" v-if="playItem.playCount">
        <i class="iconfont icon-bofangliang"></i>{{ playCount }}
      </div>
      <transition name="fade">
        <div class="bofang" v-show="isShowPlay">
          <span class="iconfont icon-bofang1"></span>
        </div>
      </transition>
    </div>
    <div class="info">
      <div class="name">{{ playItem.name }}</div>
    </div>
  </div>
</template>
<script>
import { tranNumber } from "../../utils/utils";
export default {
  props: {
    playItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isShowPlay: false
    };
  },
  methods: {
    mouseEnter() {
      this.isShowPlay = true;
    },
    mouseLeave() {
      this.isShowPlay = false;
    },
    playListClick(id) {
      this.$router.push({ path: "/songdetails", query: { id: id } });
    }
  },
  computed: {
    playCount() {
      return tranNumber(this.playItem.playCount);
    },
    imageUrl() {
      return this.playItem.picUrl || this.playItem.coverImgUrl;
    }
  }
};
</script>
<style lang="less" scoped>
.play {
  width: 200px;
  height: 250px;
  .img {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
    img {
      width: 200px;
      height: 200px;
      border-radius: 5px;
    }
    .playcount {
      font-size: 12px;
      color: white;
      position: absolute;
      top: 5px;
      right: 8px;
      i {
        font-size: 13px;
        margin-right: 2px;
      }
    }
    .bofang {
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      bottom: 15px;
      right: 15px;
      span {
        font-size: 25px;
        line-height: 40px;
        margin-left: 9px;
        color: red;
      }
    }
  }
  .info {
    width: 180px;
    height: 50px;
    .name {
      font-size: 14px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
</style>