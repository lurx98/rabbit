<script setup lang="ts" name="AppHeaderSticky">
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import AppHeaderNav from './AppHeaderNav.vue'
const { y } = useWindowScroll()
// const onScroll = () => {
//   y.value = document.documentElement.scrollTop
//   console.log(y.value)
// }

// onMounted(() => {
//   window.addEventListener('scroll', onScroll)
// })
// onBeforeUnmount(() => {
//   window.addEventListener('scroll', onScroll)
// })
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container" v-show="y >= 78">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/">εη</RouterLink>
        <RouterLink to="/">δΈι’</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  &.show {
    transition: all 0.3s linear;
    transform: translateY(0%);
  }

  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
