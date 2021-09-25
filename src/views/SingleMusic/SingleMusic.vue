<template>
  <div>
    <div class="music">
      <!-- 图片 -->
      <div
        class="avatar"
        v-if="musicInfo.al && Object.keys(musicInfo.al).length !== 0"
      >
        <div class="background">
          <div class="img">
            <img class="Rotation " :src="musicInfo.al.picUrl" />
          </div>
        </div>
      </div>
      <!-- 歌词 -->
      <div class="lyrics">
        <div class="title" v-if="musicInfo.ar && musicInfo.ar.length !== 0">
          <div class="name">{{ musicInfo.name }}</div>
          <div class="art">
            <span class="artist">{{ musicInfo.ar[0].name }}</span>
            <span class="album">{{ musicInfo.al.name }}</span>
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
      <!-- 推荐 -->
      <div class="recommend">
        <h5>喜欢这首歌的人也听</h5>
        <div class="relate">
          <div
            class="relate-item"
            v-for="item in relateSongs"
            :key="item.id"
            @click="getRelateSong(item.id)"
          >
            <div class="img">
              <img :src="item.album.picUrl" />
            </div>
            <div class="musicname">
              <span>{{ item.name }}</span>
              <span>{{ item.artists[0].name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <div class="comment">
      <comments
        :comment-list="comments"
        :hot-comment-list="hotComment"
        :commentTotal="total"
        :music-id="Number(id)"
      ></comments>
    </div>
  </div>
</template>
<script>
import Foot from "@/components/Foot/Foot";
import {
  getMusicDetails,
  getLyric,
  getSimiMusic,
  getMusicComment
} from "../../network/singlemusic";
import Scroll from "@/views/SingleMusic/Scroll";
import Lyric from "lyric-parser";
import { mapState } from "vuex";
import Comments from "@/components/SongDetail/Comments";
export default {
  data() {
    return {
      id: 0,
      musicInfo: {},
      lyricStr: "",
      currentLyric: {},
      //当前行数
      currentLineNum: 0,
      songList: [],
      relateSongs: [],
      limit: 100,
      offset: 0,
      hotComment: [],
      comments: [],
      total: 0
    };
  },
  computed: {
    ...mapState(["isPlay"])
  },
  methods: {
    async getMusicDetails(id) {
      const res = await getMusicDetails(id);
      this.musicInfo = res.songs[0];
    },
    //获取歌词
    async getLyric(id) {
      const res = await getLyric(id);
      this.lyricStr = res.lrc.lyric;
      this.currentLyric = new Lyric(this.lyricStr, this.handleLyric);
      if (this.isPlay) {
        this.currentLyric.play();
      }
      console.log(this.currentLyric);
    },
    //获取相似歌曲
    async getSimiMusic(id) {
      const res = await getSimiMusic(id);
      this.relateSongs = res.songs;
    },
    //获取评论
    async getMusicComment(id, limit, offset) {
      const res = await getMusicComment(id, limit, offset);
      this.hotComment = res.hotComments;
      this.comments = res.comments;
      this.total = res.total;
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
    getRelateSong(id) {
      this.$bus.$emit("getMusic", id);
      this.getMusicDetails(id);
      this.getLyric(id);
      this.getSimiMusic(id);
      this.getMusicComment(id, this.limit, this.offset);
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getMusicDetails(this.id);
    this.getLyric(this.id);
    this.getSimiMusic(this.id);
    this.getMusicComment(this.id, this.limit, this.offset);
  },
  mounted() {
    this.$bus.$on("changeMusic", newId => {
      this.getMusicDetails(newId);
      this.getLyric(newId);
      this.getSimiMusic(newId);
    });
    this.$bus.$on("togglePlay", () => {
      this.currentLyric.togglePlay();
    });
    this.$bus.$on("loopPlay", () => {
      this.currentLyric.seek(0);
    });
    this.$bus.$on("changeTime", time => {
      this.currentLyric.seek(time * 1000);
    });
  },
  components: {
    Scroll,
    Foot,
    Comments
  }
};
</script>
<style lang="less" scoped>
.music {
  width: 1200px;
  display: flex;
  .avatar {
    width: 270px;
    height: 270px;
    border-radius: 50%;
    background-color: whitesmoke;
    margin-top: 150px;
    margin-left: 30px;
    position: relative;
    .background {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      background-color: black;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .img {
      width: 180px;
      height: 180px;
      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        position: absolute;
        top: 25px;
        left: 25px;
      }
      @-webkit-keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      .Rotation {
        -webkit-transform: rotate(360deg);
        animation: rotation 10s linear infinite;
        -moz-animation: rotation 10s linear infinite;
        -webkit-animation: rotation 10s linear infinite;
        -o-animation: rotation 10s linear infinite;
      }
    }
  }
  .lyrics {
    width: 600px;
    padding: 20px;
    .title {
      width: 560px;
      height: 50px;
      margin: 30px 0 50px;
      text-align: center;
      .name {
        color: black;
        font-size: 25px;
        margin-bottom: 10px;
      }
      .art {
        font-size: 14px;
        color: rgb(161, 161, 161);
        .artist {
          margin-right: 10px;
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
  .recommend {
    width: 300px;
    height: 450px;
    h5 {
      color: black;
      margin-top: 100px;
      margin-bottom: 20px;
    }
    .relate {
      width: 300px;
      height: 400px;
      padding: 10px;
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      .relate-item {
        width: 280px;
        height: 60px;
        padding: 5px;
        display: flex;
        cursor: pointer;
        .img {
          margin-right: 15px;
          width: 50px;
          height: 50px;
          img {
            width: 50px;
            height: 50px;
            border-radius: 5px;
          }
        }
        .musicname {
          font-size: 13px;
          line-height: 50px;
        }
      }
    }
  }
}
.comment {
  margin-top: 35px;
  margin-left: 20px;
}
</style>