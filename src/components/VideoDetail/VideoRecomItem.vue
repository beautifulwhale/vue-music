<template>
  <div class="videoitem">
    <div class="img">
      <img :src="videoItem.coverUrl" />
      <span class="time">{{ playTime }}</span>
      <span class="durationms">{{ durationms }}</span>
    </div>
    <div class="info">
      <div class="title">{{ videoItem.title }}</div>
      <div class="creator">{{ videoItem.creator[0].userName }}</div>
    </div>
  </div>
</template>
<script>
import { FormatTime, tranNumber } from "../../utils/utils";
export default {
  props: {
    videoItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    playTime() {
      return tranNumber(this.videoItem.playTime, 0);
    },
    durationms() {
      return FormatTime(this.videoItem.durationms / 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.videoitem {
  width: 350px;
  height: 120px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .img {
    width: 175px;
    height: 120px;
    margin-bottom: 20px;
    position: relative;
    img {
      border-radius: 10px;
      width: 175px;
      height: 120px;
    }
    .time {
      position: absolute;
      top: 5px;
      right: 5px;
      color: whitesmoke;
    }
    .durationms {
      position: absolute;
      bottom: 5px;
      right: 5px;
      color: whitesmoke;
    }
  }
  .info {
    width: 175px;
    height: 120px;
    margin-left: 20px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    .title {
      font-size: 14px;
      font-weight: bold;
    }
    .creator {
      font-size: 13px;
      color: gainsboro;
    }
  }
}
</style>