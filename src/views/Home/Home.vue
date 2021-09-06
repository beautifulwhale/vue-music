<template>
  <div>
    <nav-bar></nav-bar>
    <div class="main">
      <router-view></router-view>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import NavBar from "@/components/Header/NavBar";
import Foot from '@/components/Foot/Foot'
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Foot
  }
};
</script>
<style lang='less' scoped>
</style>

