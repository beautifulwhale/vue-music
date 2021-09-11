<template>
  <div class="mv-filter">
    <div class="region">
      <div
        class="region-item"
        v-for="(item, index) in region"
        :key="index"
        :class="item === regionActive ? 'active' : ''"
        @click="changeRegion(item)"
      >
        {{ item }}
      </div>
    </div>
    <div class="type">
      <div
        class="type-item"
        v-for="(item, index) in type"
        :key="index"
        :class="item === typeActive ? 'active' : ''"
        @click="changeType(item)"
      >
        {{ item }}
      </div>
    </div>
    <div class="order">
      <div
        class="order-item"
        v-for="(item, index) in order"
        :key="index"
        :class="item === orderActive ? 'active' : ''"
        @click="changeOrder(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    region: {
      type: Array,
      default() {
        return [];
      }
    },
    type: {
      type: Array,
      default() {
        return [];
      }
    },
    order: {
      type: Array,
      default() {
        return [];
      }
    },
    regionActive: {
      type: String,
      default: ""
    },
    typeActive: {
      type: String,
      default: ""
    },
    orderActive: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeRegion(item) {
      this.$emit("changeMv", { type: "region", item });
    },
    changeType(item) {
      this.$emit("changeMv", { type: "type", item });
    },
    changeOrder(item) {
      this.$emit("changeMv", { type: "order", item });
    }
  }
};
</script>
<style lang="less" scoped>
.mv-filter {
  width: 1200px;
  height: 170px;
  margin-top: 20px;
  .region {
    width: 1200px;
    height: 50px;
    display: flex;
    flex: 1;
    align-items: center;
    margin: 10px 0;
    .region-item {
      width: 60px;
      height: 30px;
      font-size: 14px;
      margin-right: 20px;
      line-height: 30px;
      text-align: center;
    }
  }
  .type {
    width: 1200px;
    height: 50px;
    display: flex;
    flex: 1;
    align-items: center;
    margin: 10px 0;
    .type-item {
      width: 60px;
      height: 30px;
      font-size: 14px;

      margin-right: 20px;
      line-height: 30px;
      text-align: center;
    }
  }
  .order {
    width:1200px;
    height: 50px;
    display: flex;
    flex: 1;
    align-items: center;
    margin: 10px 0;
    .order-item {
      width: 60px;
      height: 30px;
      font-size: 14px;
      margin-right: 20px;
      line-height: 30px;
      text-align: center;
    }
  }
}
.active {
  background-color: rgb(248, 100, 100);
  color: #fff;
  border-radius: 10px;
}
</style>