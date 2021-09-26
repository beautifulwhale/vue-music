<template>
  <div class="player-bar" v-if="music.length">
    <div class="content">
      <div
        class="music-img"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        @click="getMusicDetail(currentId)"
      >
        <img :src="musicInfo.al.picUrl" />
        <span class="el-icon-arrow-up" v-if="isShowFold"></span>
        <span class="el-icon-arrow-down" v-else></span>
        <div class="smoker" v-show="isActive"></div>
      </div>
      <!-- 歌曲名字/作者 -->
      <div class="music-message">
        <div class="name">
          <h3>{{ musicInfo.name }}</h3>
        </div>
        <div class="art">{{ musicInfo.ar[0].name }}</div>
      </div>
      <!-- 播放暂停 -->
      <div class="control">
        <span class="iconfont icon-prev" @click="changeSong('up')"></span>
        <span
          class="iconfont icon-zanting"
          v-if="isPlay"
          @click="isPlayMusic"
        ></span>
        <span class="iconfont icon-bofang" v-else @click="isPlayMusic"></span>
        <span
          class="iconfont icon-xiayishou"
          @click="changeSong('down')"
        ></span>
      </div>
      <!-- 进度条 -->
      <div class="block">
        <el-slider
          v-model="progress"
          @change="changeLong"
          :show-tooltip="false"
        ></el-slider>
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
          <el-slider
            v-model="volume"
            @change="changVolume"
            :show-tooltip="false"
          ></el-slider>
        </div>
        <span
          class="iconfont icon-shunxubofang"
          v-if="playMode === 0"
          @click="changePlayMode(2)"
        ></span>
        <span
          class="iconfont icon-suiji"
          v-else-if="playMode === 1"
          @click="changePlayMode(0)"
        ></span>
        <span
          class="iconfont icon-xunhuanshunxubofangicon"
          v-else
          @click="changePlayMode(1)"
        ></span>
        <span
          class="iconfont icon-shouye-bofangmoshi-shunxubofang"
          @click="currentPlayClick"
        ></span>
      </div>
    </div>
    <!-- 当前播放列表 -->
    <current-play-list
      v-show="isShowCurrentPlay"
      class="current-play"
      @clearPlay="clearPlay"
    ></current-play-list>
    <audio
      v-if="music.length"
      :src="musicUrl"
      @timeupdate="getCurrentTime"
      @loadedmetadata="onLoadMetaData"
      autoplay
      ref="audioRef"
    ></audio>
  </div>
</template>
<script>
import CurrentPlayList from "@/components/Foot/CurrentPlayList";
import { getSongDetails, getMusicUrl } from "../../network/songdetails";
import { FormatTime } from "../../utils/utils";
import { mapState } from "vuex";
export default {
  data() {
    return {
      musicInfo: {},
      music: [],
      musicUrl: "",
      duration: 0,
      progress: 0,
      currentTime: 0,
      volume: 20,
      isShowCurrentPlay: false,
      //当前歌曲下标
      currentId: null,
      currentIndex: null,
      isShowFold: false,
      isActive: false
    };
  },
  methods: {
    //获取当前歌曲信息
    async getSongDetails(id) {
      const res = await getSongDetails(id);
      this.music = res.songs;
      this.musicInfo = res.songs[0];
    },
    //获取歌曲url
    async getMusicUrl(id) {
      const res = await getMusicUrl(id);
      this.musicUrl = res.data[0].url;
      this.$store.commit("isPlay", true);
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
    //是否播放
    isPlayMusic() {
      if (!this.songList.length) {
        this.$store.commit("isPlay", false);
      }
      this.isPlay ? this.$refs.audioRef.pause() : this.$refs.audioRef.play();
      this.$store.commit("isPlay", !this.$refs.audioRef.paused);
      this.$bus.$emit("togglePlay");
    },
    //获取时长
    onLoadMetaData(res) {
      this.duration = parseInt(res.target.duration);
    },
    //音频进度改变时触发
    getCurrentTime() {
      this.currentTime = parseInt(this.$refs.audioRef.currentTime);
      this.progress = parseInt((this.currentTime / this.duration) * 100);
      if (this.currentTime === this.duration) {
        if (this.playMode === 0) {
          this.currentIndex--;
          this.changeSong("down");
        } else {
          this.changeSong();
        }
      }
    },
    //改变时长
    changeLong() {
      let ct = (this.progress * this.duration) / 100;
      if (!isNaN(ct)) {
        this.$refs.audioRef.currentTime = ct;
        this.$store.commit("isPlay", true);
        this.$refs.audioRef.play();
        this.$bus.$emit("changeTime", this.$refs.audioRef.currentTime);
      }
    },
    //控制声音
    changVolume(val) {
      this.volume = val;
      this.$refs.audioRef.volume = val / 100;
    },
    //更改播放模式
    changePlayMode(num) {
      this.$store.commit({ type: "changePlayMode", num });
    },
    currentPlayClick() {
      this.isShowCurrentPlay = !this.isShowCurrentPlay;
    },
    //切换上一曲下一曲
    changeSong(type) {
      for (let i = 0; i <= this.songList.length; i++) {
        if (this.currentId === this.songList[i].id) {
          this.currentIndex = i;
          break;
        }
      }
      var index = 0;
      //顺序播放
      if (this.playMode === 0) {
        if (type === "up") {
          if (this.currentIndex === 0) {
            return;
          }
          index = this.currentIndex - 1;
          this.currentId = this.songList[index].id;
        } else if (type === "down") {
          if (this.currentIndex === this.songList.length) return;
          index = this.currentIndex + 1;
          this.currentId = this.songList[index].id;
        }
        this.getSongDetails(this.songList[index].id);
        this.getMusicUrl(this.songList[index].id);
        //随机播放
      } else if (this.playMode === 1) {
        this.currentIndex = Math.floor(Math.random() * this.songList.length);
        this.getSongDetails(this.songList[this.currentIndex].id);
        this.getMusicUrl(this.songList[this.currentIndex].id);
      } else if (this.playMode === 2) {
        this.$refs.audioRef.load();
        this.$bus.$emit("loopPlay");
      }
      this.$store.commit("isPlay", true);
      this.$bus.$emit('nextFmPlay')
    },
    //清空列表
    clearPlay() {
      this.$store.state.isPlay = false;
      this.$refs.audioRef.pause();
    },
    mouseEnter() {
      this.isShowFold = true;
      this.isActive = true;
    },
    mouseLeave() {
      this.isShowFold = false;
      this.isActive = false;
    },
    getMusicDetail(id) {
      if (this.isShowFold) {
        this.$router.push({ path: "/singlemusic", query: { id } });
        this.isShowFold = false;
      } else {
        this.$router.back();
      }
    }
  },
  computed: {
    ...mapState(["playMode", "songList", "isPlay"]),
    playTime() {
      return FormatTime(this.musicInfo.dt / 1000);
    }
  },
  mounted() {
    this.$bus.$on("getMusic", data => {
      this.currentId = data;
      this.getSongDetails(data);
      this.getMusicUrl(data);
    });
  },
  components: {
    CurrentPlayList
  },
  watch: {
    currentId(newId, oldId) {
      if (newId === oldId) {
        return;
      }
      this.$bus.$emit("changeMusic", newId);
    }
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
      width: 50px;
      height: 50px;
      position: relative;
      img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
      }
      .el-icon-arrow-up {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 30px;
        color: white;
        z-index: 9;
      }
      .smoker {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.5;
        border-radius: 5px;
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
        color: black;
        font-size: 25px;
      }
      .icon-bofang,
      .icon-zanting {
        font-weight: bolder;
        color: black;
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
  .current-play {
    width: 450px;
    height: 500px;
    position: absolute;
    right: 0;
    bottom: 63px;
  }
}
// 控制滑块的默认颜色
/deep/ .el-slider__bar {
  background: tomato;
}
.el-slider__button {
  width: 8px;
  height: 8px;
  border: 2px solid tomato !important;
  background-color: #fff;
  border-radius: 50%;
}
</style>