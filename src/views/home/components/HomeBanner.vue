<script setup lang="ts" name="HomeBanner">
import { reactive, ref, defineProps } from 'vue'
import useStore from '../../../store/index'
const { home } = useStore()
home.getBannerList()
</script>

<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <XtxCarousel :slides="home.bannerList" autoPlay :duration="3000" />
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  background-color: pink;
}
</style>
