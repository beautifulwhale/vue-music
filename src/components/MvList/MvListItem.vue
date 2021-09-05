<template>
  <div class="mv-list-item">
    <div class="img" @mouseenter="showIcon" @mouseleave="hiddenIcon">
      <img :src="mvListItem.cover" />
      <div class="smoke">
        <div class="artist">
          <span>{{ mvListItem.artistName }}</span>
        </div>
        <div class="play">
          <span>播放量:{{ mvListItem.playCount }}</span>
          <span>{{ mvListItem.duration }}</span>
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
  }
};
</script>
<style lang="less" scoped>
.mv-list-item {
  width: 310px;
  height: 230px;
  cursor: pointer;
  .img {
    width: 310px;
    height: 178px;
    position: relative;
    img {
      width: 310px;
      height: 178px;
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