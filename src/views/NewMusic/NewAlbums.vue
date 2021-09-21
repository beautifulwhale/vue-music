<template>
  <div class="new-album">
    <div class="filter">
      <div class="tags" v-for="(item, index) in areas" :key="index">
        <div
          class="tag"
          @click="changeTags(item)"
          :style="item === currentAlbumArea ? 'color:red' : ''"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="albums">
      <div
        class="album-item"
        v-for="item in albumList"
        :key="item.id"
        @click="getAlbums(item.id)"
      >
        <div class="img">
          <img :src="item.picUrl" alt="" />
          <transition name="fade">
            <div class="bofang" v-show="isShowPlay">
              <span class="iconfont icon-bofang1"></span>
            </div>
          </transition>
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="artist">{{ item.artist.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getNewAlbums } from "../../network/song";
export default {
  data() {
    return {
      areas: ["全部", "华语", "欧美", "韩国", "日本"],
      currentAlbumArea: "全部",
      area: -1,
      limit: 50,
      offset: 0,
      albumList: []
    };
  },
  methods: {
    async getNewAlbums(limit, offset, area) {
      const res = await getNewAlbums(limit, offset, area);
      this.albumList = res.monthData;
      console.log(res);
    },
    changeTags(area) {
      this.currentAlbumArea = area;
      if (area === "全部") {
        this.area = -1;
        this.getNewAlbums(this.limit, this.offset, this.area);
      } else if (area === "欧美") {
        this.area = 96;
        this.getNewAlbums(this.limit, this.offset, this.area);
      } else if (area === "韩国") {
        this.area = 16;
        this.getNewAlbums(this.limit, this.offset, this.area);
      } else if (area === "日本") {
        this.area = 8;
        this.getNewAlbums(this.limit, this.offset, this.area);
      } else if (area === "华语") {
        this.area = 7;
        this.getNewAlbums(this.limit, this.offset, this.area);
      }
    },
    getAlbums(id) {
      this.$router.push({ path: "/ablumdetails", query: { id: id } });
    }
  },
  created() {
    this.getNewAlbums(this.limit, this.offset, this.area);
  }
};
</script>
<style lang="less" scoped>
.new-album {
  width: 1100px;
  .filter {
    width: 400px;
    display: flex;
    margin-left: 20px;
    flex: 1;
    .tags {
      width: 70px;
    }
  }
  .albums {
    width: 1100px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-top: 20px;
    .album-item {
      width: 200px;
      height: 300px;
      margin-right: 20px;
      .img {
        width: 200px;
        height: 200px;
        position: relative;
        img {
          width: 200px;
          height: 200px;
          border-radius: 10px;
        }
        .bofang {
          width: 40px;
          height: 40px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          bottom: 50%;
          right: 50%;
          transform: translateX(-50%), translateY(-50%);
          span {
            font-size: 25px;
            line-height: 40px;
            margin-left: 9px;
            color: red;
          }
        }
      }
      .name {
        margin: 10px 0;
      }
      .artist {
        font-size: 12px;
        color: gainsboro;
      }
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