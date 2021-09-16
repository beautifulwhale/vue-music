<template>
  <div class="latest">
    <div class="filter">
      <div class="title" @click="getAllMv">
        <h3>最新MV</h3>
        <span class="el-icon-arrow-right"></span>
      </div>
      <div class="area">
        <div
          class="areaitem"
          v-for="(item, index) in area"
          :style="item === sellectArea ? 'color:red' : ''"
          :key="index"
          @click="changeArea(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="latestitem">
      <div class="lateitem" v-for="item in latestList" :key="item.id">
        <mv-item :mv-item="item"></mv-item>
      </div>
    </div>
  </div>
</template>
<script>
import MvItem from "@/components/MvCategoryList/MvItem";
export default {
  props: {
    latestList: {
      type: Array,
      default: () => []
    },
    area: {
      type: Array,
      default: () => []
    },
    sellectArea: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeArea(area) {
      this.$emit("changeArea", area);
    },
    getAllMv() {
      this.$router.push("/mv");
    }
  },
  components: {
    MvItem
  }
};
</script>
<style lang="less" scoped>
.latest {
  width: 1160px;
  height: 500px;
  .filter {
    width: 1160px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    .title {
      color: black;
      cursor: pointer;
      h3 {
        float: left;
        margin-right: 5px;
      }
      span {
        font-weight: bolder;
        font-size: 20px;
      }
      margin-right: 780px;
    }
    .area {
      width: 230px;
      height: 20px;
      display: flex;
      flex: 1;
      align-items: center;
      .areaitem {
        width: 30px;
        height: 10px;
        margin-right: 10px;
        font-size: 12px;
        color: gainsboro;
      }
    }
  }
  .latestitem {
    width: 1160px;
    height: 300px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    .lateitem {
      width: 250px;
      height: 200px;
      margin-right: 20px;
      margin-top: 20px;
    }
  }
}
</style>