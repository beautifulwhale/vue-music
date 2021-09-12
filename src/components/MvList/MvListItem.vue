<template>
  <div class="mv-list-item">
    <div class="img" @mouseenter="showIcon" @mouseleave="hiddenIcon">
      <img :src="imgUrl" />
      <div class="smoke">
        <div class="artist">
          <span>{{ mvListItem.artistName }}</span>
        </div>
        <div class="play">
          <span>播放量:{{ playCount }}</span>
          <span>{{ duration }}</span>
        </div>
      </div>
      <div class="smokeIcon" v-show="isShowIcon">
        <i class="iconfont icon-wodetubiao-253"></i>
      </div>
    </div>
    <div class="info">
      <span>{{ mvListItem.name }}</span>
    </div>
  </div>
</template>
<script>
import { FormatTime, tranNumber } from "../../utils/utils";
export default {
  props: {
    mvListItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isShowIcon: false
    };
  },
  methods: {
    showIcon() {
      this.isShowIcon = true;
    },
    hiddenIcon() {
      this.isShowIcon = false;
    }
  },
  computed: {
    imgUrl() {
      return this.mvListItem.imgurl || this.mvListItem.cover;
    },
    duration() {
      return FormatTime(this.mvListItem.duration / 1000);
    },
    playCount() {
      return tranNumber(this.mvListItem.playCount,0);
    }
  }
};
</script>
<style lang="less" scoped>
.mv-list-item {
  width: 310px;
  height: 210px;
  margin-right: 70px;
  margin-bottom: 20px;
  cursor: pointer;
  .img {
    width: 310px;
    height: 180px;
    position: relative;
    img {
      width: 100%;
      height: 180px;
      border-radius: 10px;
    }
    .smoke {
      width: 310px;
      height: 22px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 3px;
      .artist {
        font-size: 14px;
        padding-left: 5px;
        color: #ffffff;
      }
      .play {
        color: white;
        font-size: 13px;
        padding-right: 5px;
      }
    }
    .smokeIcon {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .iconfont {
        font-size: 50px;
        color: #ffffff;
      }
    }
  }
  .info {
    margin-top: 10px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>