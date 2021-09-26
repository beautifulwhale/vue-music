<template>
  <div class="personfm">
    <div class="info">
      <div class="cover">
        <div
          class="img"
          v-if="currentFm.album && Object.keys(currentFm.album).length !== 0"
        >
          <img :src="currentFm.album.picUrl" />
        </div>
        <div class="opertion">
          <div class="like" @click="loveMusic">
            <span
              class="iconfont icon-heart"
              :style="isLove ? 'color:red' : ''"
            >
            </span>
          </div>
          <div class="delete"><span class="el-icon-delete"></span></div>
          <div class="next" @click="nextPlay">
            <span class="iconfont icon-xiayigexiayishou"></span>
          </div>
        </div>
      </div>
      <!-- 歌词 -->
      <div class="lyric">
        <div
          class="title"
          v-if="currentFm.album && currentFm.album.length !== 0"
        >
          <div class="name">{{ currentFm.name }}</div>
          <div class="art">
            <span class="album" @click="getAlbum(currentFm.album.id)"
              >专辑:{{ currentFm.album.name }}</span
            >
            <span class="artist" @click="getArtist(currentFm.artists[0].id)"
              >歌手:{{ currentFm.artists[0].name }}</span
            >
          </div>
        </div>
        <div class="lyric-content">
          <scroll
            class="lyric-wrapper"
            ref="lyricList"
            :data="currentLyric && currentLyric.lines"
          >
            <div>
              <div class="lyric">
                <div
                  v-for="(item, index) in currentLyric.lines"
                  ref="lyricLine"
                  :class="{ current: currentLineNum === index }"
                  class="text"
                  :key="index"
                >
                  {{ item.txt }}
                </div>
              </div>
            </div>
          </scroll>
        </div>
      </div>
    </div>
    <div class="comment"></div>
  </div>
</template>
<script>
import { getPersonalFm, likeMusic } from "../../network/fm";
import Scroll from "@/views/SingleMusic/Scroll";
import Lyric from "lyric-parser";
import { mapState } from "vuex";
import {
  getMusicDetails,
  getLyric,
  getMusicComment
} from "../../network/singlemusic";
export default {
  data() {
    return {
      personList: [],
      currentIndex: 0,
      currentFm: {},
      fmId: 0,
      lyricStr: "",
      currentLyric: {},
      currentLineNum: 0,
      like: true,
      isLove: false
    };
  },
  created() {
    this.getPersonalFm();
  },
  methods: {
    //获取个人FM
    async getPersonalFm() {
      const res = await getPersonalFm();
      this.personList = res.data;
      this.currentFm = this.personList[this.currentIndex];
      this.fmId = this.currentFm.id;
      this.getLyrics(this.fmId);
      this.$bus.$emit("getMusic", this.fmId);
      this.$store.commit("getSongList", this.personList);
      console.log(res);
    },
    //获取歌词
    async getLyrics(id) {
      const res = await getLyric(id);
      this.lyricStr = res.lrc.lyric;
      this.currentLyric = new Lyric(this.lyricStr, this.handleLyric);
      if (this.isPlay) {
        this.currentLyric.play();
      }
    },
    async likeMusic(id, like) {
      const res = await likeMusic(id, like);
    },
    handleLyric({ lineNum, txt }) {
      this.currentLineNum = lineNum;
      // 若当前行大于5,开始滚动,以保歌词显示于中间位置
      if (lineNum > 5) {
        let lineEl = this.$refs.lyricLine[lineNum - 5];
        // 结合better-scroll，滚动歌词
        this.$refs.lyricList.scrollToElement(lineEl, 500);
      } else {
        this.$refs.lyricList.scrollToElement(0, 0, 1000);
      }
    },
    nextPlay() {
      if (this.currentIndex < this.personList.length) {
        this.currentIndex += 1;
        this.currentFm = this.personList[this.currentIndex];
        this.fmId = this.currentFm.id;
        this.$bus.$emit("getMusic", this.fmId);
      } else {
        return;
      }
    },
    getAlbum(id) {
      this.$router.push({ path: "/ablumdetails", query: { id: id } });
    },
    getArtist(id) {
      this.$router.push({ path: "/singerdetails", query: { id: id } });
    },
    loveMusic() {
      this.isLove = true;
      this.likeMusic(this.fmId, this.like);
      this.$message({
        message: "已添加到我喜欢的音乐",
        type: "success"
      });
    }
  },
  components: {
    Scroll
  },
  computed: {
    ...mapState(["isPlay"])
  },
  mounted() {
    this.$bus.$on("changeMusic", newId => {
      this.getLyrics(newId);
    });
    this.$bus.$on("togglePlay", () => {
      this.currentLyric.togglePlay();
    });
    this.$bus.$on("changeTime", time => {
      this.currentLyric.seek(time * 1000);
    });
    this.$bus.$on("nextFmPlay", () => {
      this.nextPlay();
    });
  }
};
</script>
<style lang="less" scoped>
.personfm {
  width: 1100px;
  .info {
    width: 700px;
    height: 500px;
    margin: 30px auto;
    display: flex;
    flex: 1;
    .cover {
      width: 300px;
      height: 500px;
      margin-right: 30px;
      margin-top: 40px;
      .img {
        width: 300px;
        height: 300px;
        img {
          width: 300px;
          height: 300px;
          border-radius: 10px;
        }
      }
      .opertion {
        width: 300px;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .like,
        .delete,
        .next {
          width: 45px;
          height: 45px;
          cursor: pointer;
          border-radius: 50%;
          border: 1px solid gainsboro;
          text-align: center;
          line-height: 45px;
          span {
            font-size: 23px;
          }
        }
      }
    }
    .lyric {
      width: 400px;
      .title {
        width: 400px;
        height: 50px;
        margin: 0 0 30px 0;
        text-align: center;
        .name {
          color: black;
          font-size: 25px;
          margin-bottom: 10px;
        }
        .art {
          font-size: 10px;
          color: rgb(161, 161, 161);
          .album {
            margin-right: 20px;
            color: tomato;
            cursor: pointer;
          }
          .artist {
            margin-right: 10px;
            color: tomato;
            cursor: pointer;
          }
        }
      }
      .lyric-content {
        width: 560px;
        text-align: center;
        .lyric-wrapper {
          overflow-y: scroll;
          height: 400px;
          .lyric {
            .text {
              margin-bottom: 10px;
            }
            .current {
              font-weight: bolder;
              color: black;
            }
          }
        }
        /*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
          background-color: #f5f5f5;
        }
        /*定义滚动条轨道
 内阴影+圆角*/
        ::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          background-color: #f5f5f5;
        }
        /*定义滑块
 内阴影+圆角*/
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(228, 218, 218, 0.3);
          background-color: whitesmoke;
        }
      }
    }
  }
}
</style>