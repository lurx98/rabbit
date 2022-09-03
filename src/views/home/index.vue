<script setup lang="ts" name="Home">
import { reactive, ref } from 'vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
        <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
          <template #right>
            <XtxMore to="/" />
          </template>
        </HomePanel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
