<template>
  <div class="all-works">
    <div class="tags">
      <div
        class="tag"
        v-for="(item, index) in tagsList"
        :key="index"
        @click="tagClick(index)"
        :class="{ active: currentIndex === index }"
      >
        <span>{{ item }}</span>
      </div>
    </div>
    <div :style="isShowSong ? 'block' : 'none'">
      <detail-list :song-list="singerMusic"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailList from "@/components/SongDetail/DetailList";
export default {
  props: {
    tagsList: {
      type: Array,
      default: () => []
    },
    singerMusic: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0,
      isShowSong: false,
      isShowAlbum: false,
      isShowMv: false,
      isShowDesc: false
    };
  },
  methods: {
    tagClick(index) {
      this.currentIndex = index;
      switch (index) {
        case index === 0:
          this.isShowSong = !this.isShowSong;
          break;
        case index === 1:
          this.isShowAlbum = !this.isShowAlbum;
          break;
        case index === 2:
          this.isShowMv = !this.isShowMv;
          break;
        case index === 3:
          this.isShowDesc = !this.isShowDesc;
          break;
        default:
          break;
      }
    }
  },
  computed: {},
  components: {
    DetailList
  }
};
</script>
<style lang="less" scoped>
.all-works {
  width: 1040px;
  .tags {
    width: 1000px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .tag {
      width: 80px;
      height: 30px;
      text-align: center;
    }
    span {
      font-size: 18px;
    }
    .active {
      border-bottom: 2px solid tomato;
      font-weight: bold;
    }
  }
}
</style>