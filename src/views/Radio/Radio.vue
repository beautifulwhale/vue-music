<template>
  <div>
    <cate-list :cate-list="cateList"></cate-list>
    <charact :charact-list="charactList"></charact>
    <!-- 本周上新 -->
    <recom-show :recom-show-list="recomShowList"></recom-show>
    <hot-radio :hot-radio="hotRadio"></hot-radio>
    <radio-banner :banner-list="bannerList"></radio-banner>
    <electronic></electronic>
    <create-cover></create-cover>
    <star></star>
    <life></life>
    <old-music-recom></old-music-recom>
    <secondary></secondary>
    <emotional></emotional>
    <knowledge></knowledge>
  </div>
</template>
<script>
import {
  getRadioCharact,
  getRadioHot,
  getRadioCate,
  getRadioBanner,
  recomShow
} from "../../network/radio";
import CateList from "@/components/RadioList/CateList";
import Charact from "@/components/RadioList/Charact";
import HotRadio from "@/components/RadioList/HotRadio";
import RecomShow from "@/components/RadioList/RecomShow";
import Electronic from "@/components/RadioMain/Electronic";
import CreateCover from "@/components/RadioMain/CreateCover";
import Star from "@/components/RadioMain/Star";
import OldMusicRecom from "@/components/RadioMain/OldMusicRecom";
import Life from "@/components/RadioMain/Life";
import Secondary from "@/components/RadioMain/Secondary";
import Emotional from "@/components/RadioMain/Emotional";
import Knowledge from "@/components/RadioMain/Knowledge";
import RadioBanner from "@/components/RadioList/RadioBanner";
export default {
  data() {
    return {
      charactList: [],
      hotRadio: [],
      limit: 12,
      offset: 0,
      cateList: [],
      recomShowList: [],
      bannerList: []
    };
  },
  created() {
    this.getRadioCharact();
    this.getRadioCate();
    this.getRadioHot(this.limit, this.offset);
    this.recomShow();
    this.getBanner();
  },
  methods: {
    //猜你喜欢推荐
    async getRadioCharact() {
      const res = await getRadioCharact();
      this.charactList = res.data;
    },
    //获取分类
    async getRadioCate() {
      const res = await getRadioCate();
      this.cateList = res.categories;
    },
    //获取热门电台
    async getRadioHot(limit, offset) {
      const res = await getRadioHot(limit, offset);
      this.hotRadio = res.djRadios;
    },
    //获取推荐节目
    async recomShow() {
      const res = await recomShow();
      this.recomShowList = res.programs;
    },
    //获取电台Banner
    async getBanner() {
      const res = await getRadioBanner();
      this.bannerList = res.data;
    }
  },
  components: {
    CateList,
    Charact,
    HotRadio,
    RecomShow,
    Electronic,
    CreateCover,
    Star,
    OldMusicRecom,
    Life,
    Secondary,
    Emotional,
    Knowledge,
    RadioBanner
  }
};
</script>
<style lang="less" scoped>
</style>