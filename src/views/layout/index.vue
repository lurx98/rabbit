<script setup lang="ts" name="Layout">
import { reactive, ref } from 'vue'
import AppTopnav from './components/AppTopnav.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeaderSticky from './components/AppHeaderSticky.vue'
</script>

<template>
  <AppTopnav />
  <AppHeader />
  <AppHeaderSticky />
  <main class="app-body">
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
