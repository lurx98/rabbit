<script setup lang="ts" name="HomeHot">
import { reactive, ref } from 'vue'
import useStore from '@/store/index'
import HomePanel from './HomePanel.vue'
import { useLazyData } from '@/utils/hooks'
const { home } = useStore()
const target = useLazyData(() => {
  home.getHotList()
})
</script>

<template>
  <HomePanel ref="target" title="人气推荐" sub-title="人气爆款 不容错过">
    <Transition name="fade">
      <ul ref="panel" class="goods-list" v-if="home.hotGoodList.length > 0">
        <li v-for="item in home.hotGoodList" :key="item.id">
          <RouterLink to="/">
            <img v-lazy="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
      <div class="home-skeleton" v-else>
        <div class="item" v-for="i in 4" :key="i" :style="{ backgroundColor: '#f0f9f4' }">
          <XtxSkeleton bg="#e4e4e4" :width="306" :height="306" />
          <XtxSkeleton bg="#e4e4e4" :width="160" :height="24" />
          <XtxSkeleton bg="#e4e4e4" :width="120" :height="24" />
        </div>
      </div>
    </Transition>
  </HomePanel>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .xtx-skeleton ~ .xtx-skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>
