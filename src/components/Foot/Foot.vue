<template>
  <div class="player-bar" v-if="music.length">
    <div class="content">
      <div class="music-img">
        <img :src="musicInfo.musicImg" />
      </div>
      <!-- 歌曲名字/作者 -->
      <div class="music-message">
        <div class="name">
          <h3>{{ musicInfo.musicName }}</h3>
        </div>
        <div class="art">{{ musicInfo.musicArtist }}</div>
      </div>
      <!-- 播放暂停 -->
      <div class="control">
        <span class="iconfont icon-prev"></span>
        <span
          class="iconfont icon-zanting"
          v-show="isShowPlay"
          @click="playMusic"
        ></span>
        <span
          class="iconfont icon-bofang"
          v-show="isShowPause"
          @click="pauseMusic"
        ></span>
        <span class="iconfont icon-xiayishou" @change="changeLong"></span>
      </div>
      <!-- 进度条 -->
      <div class="block">
        <el-slider v-model="progress"></el-slider>
      </div>
      <!-- 时长 -->
      <div class="playerTime">
        <span>
          <span>{{ toTime(currentTime) }}</span>
          <span class="line">|</span>
          <span>{{ playTime }}</span>
        </span>
      </div>
      <!-- 声音/播放顺序/列表 -->
      <div class="info">
        <span class="iconfont icon-shengyin"></span>
        <div class="voice-slider">
          <el-slider v-model="voice"></el-slider>
        </div>

        <span
          v-show="isShowOrder"
          class="iconfont icon-shunxubofang"
          @click="changeOrder"
        ></span>
        <span
          v-show="isShowORandom"
          class="iconfont icon-suiji"
          @click="changeRandom"
        ></span>
        <span
          v-show="isShowCycle"
          class="iconfont icon-xunhuanshunxubofangicon"
          @click="changeCycle"
        ></span>
        <span class="iconfont icon-shouye-bofangmoshi-shunxubofang"></span>
      </div>
    </div>
    <audio
      v-if="music.length"
      :src="musicUrl"
      @timeupdate="getCurrentTime"
      autoplay
      controls
      ref="audioRef"
    ></audio>
  </div>
</template>
<script>
import { getSongDetails, getMusicUrl } from "../../network/songdetails";
import { FormatTime } from "../../utils/utils";
export default {
  data() {
    return {
      musicInfo: {
        musicImg: "",
        musicName: "",
        musicArtist: "",
        musicPlayTime: 0
      },
      music: [],
      voice: 0,
      isShowOrder: true,
      isShowORandom: false,
      isShowCycle: false,
      musicUrl: "",
      isShowPlay: true,
      isShowPause: false,
      duration: 0,
      progress: 0,
      currentTime: 0
    };
  },
  methods: {
    async getSongDetails(id) {
      const res = await getSongDetails(id);
      console.log(res);
      this.music = res.songs;
      this.musicInfo.musicImg = res.songs[0].al.picUrl;
      this.musicInfo.musicName = res.songs[0].name;
      this.musicInfo.musicArtist = res.songs[0].ar[0].name;
      this.musicInfo.musicPlayTime = res.songs[0].dt;
    },
    //获取歌曲url
    async getMusicUrl(id) {
      const res = await getMusicUrl(id);
      this.musicUrl = res.data[0].url;
      console.log(res);
    },
    changeOrder() {
      this.isShowOrder = false;
      this.isShowORandom = true;
      this.isShowCycle = false;
    },
    changeRandom() {
      this.isShowOrder = false;
      this.isShowORandom = false;
      this.isShowCycle = true;
    },
    changeCycle() {
      this.isShowOrder = true;
      this.isShowORandom = false;
      this.isShowCycle = false;
    },
    //秒数转化为mm:ss形式
    toTime(sec) {
      let s = sec % 60 < 10 ? "0" + (sec % 60) : sec % 60;
      let min =
        Math.floor(sec / 60) < 10
          ? "0" + Math.floor(sec / 60)
          : Math.floor(sec / 60);
      return min + ":" + s;
    },
    //暂停歌曲
    pauseMusic() {
      this.isShowPause = false;
      this.isShowPlay = true;
      this.$refs.audioRef.play();
    },
    //播放歌曲
    playMusic() {
      this.isShowPause = true;
      this.isShowPlay = false;
      this.$refs.audioRef.pause();
    },
    //获取时长
    showLongTime() {
      this.duration = parseInt(this.$refs.audioRef.duration);
    },
    //音频进度改变时触发
    getCurrentTime() {
      this.currentTime = parseInt(this.$refs.audioRef.currentTime);
    //   this.currentTime = toTime(this.currentTime)
      this.progress = this.currentTime / this.duration * 100
    },
    //改变时长
    changeLong() {
      let ct = (this.progress * this.duration) / 100;
      if (!isNaN(ct)) {
        this.$refs.audioRef.currentTime = ct;
      }
    }
  },
  computed: {
    playTime() {
      return FormatTime(this.musicInfo.musicPlayTime / 1000);
    }
  },
  mounted() {
    this.$bus.$on("getMusic", data => {
      this.getSongDetails(data);
      this.getMusicUrl(data);
    });
  }
};
</script>
<style lang="less" scoped>
.player-bar {
  width: 1536px;
  height: 63px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 3px 0 2px rgba(0, 0, 0, 0.3);
  padding: 5px;
  .content {
    width: 1350px;
    height: 61.2px;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    .music-img {
      width: 51.2px;
      height: 51.2px;
      img {
        width: 51.2px;
        height: 51.2px;
      }
    }
    .music-message {
      width: 188px;
      height: 50px;
      padding: 3px;
      text-align: center;
      .name {
        margin-bottom: 10px;
        h3 {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
    .control {
      width: 135px;
      height: 51.2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-prev,
      .icon-xiayishou {
        color: gray;
        font-size: 25px;
      }
      .icon-bofang,
      .icon-zanting {
        font-weight: bolder;
        color: gray;
        font-size: 40px;
      }
    }
    .block {
      width: 480px;
      height: 4px;
      .el-slider {
        margin-top: 5px;
      }
    }
    .playerTime {
      width: 94px;
      height: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
    }
    .info {
      width: 230px;
      height: 23px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .voice-slider {
        height: 2px;
        width: 50px;
        margin-top: -10px;
        margin-left: -40px;
      }
    }
  }
}
</style>