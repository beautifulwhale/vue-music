<template>
  <div class="song" @mouseenter="enter" @mouseleave="leave" :class="{active:isShow}">
    <img :src="songItem.picUrl" />
    <div class="name">{{ songItem.name }}</div>
    <div class="album">{{ songItem.song.album.name }}</div>
    <div class="artists">{{ songItem.song.artists[0].name }}</div>
  </div>
</template>
<script>
export default {
  props: {
    songItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    enter(){
      this.isShow = true
    },
    leave(){
      this.isShow = false
    }
  },
};
</script>
<style lang="less" scoped>
.song {
  width: 500px;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1px 2px #000, 0 0 1px #000, 0 0 1px #000;
  border-radius: 5px;
  cursor: pointer;
img {
  width: 35px;
  height: 35px;
}
.name {
  line-height: 75px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.album {
  line-height: 75px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.artists {
  line-height: 75px;
  font-weight: bold;
}
}
.active{
  background-color: gainsboro;
  color: white;
}
</style>