<script setup lang="ts" name="Home">
import { reactive, ref } from 'vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeBrand from './components/HomeBrand.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
        <!-- 面板组件 -->
        <HomeNew />
        <!-- 人气推荐 -->
        <HomeHot />
        <!-- 热门品牌 -->
        <HomeBrand />
        <!-- 商品区域 -->
        <HomeProduct />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
