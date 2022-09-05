<script setup lang="ts" name="TopCategory">
import { computed, reactive, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import useStore from '../../store/index'
import { CategoryItem } from '@/types/data'
import GoodsItem from './components/GoodsItem.vue'
const route = useRoute()
const { category, home } = useStore()
category.getTopCategory(route.params.id as string)
home.getBannerList()
//#region
// watch(
//   () => route.params.id,
//   value => {
//     category.getTopCategory(value as string)
//   },
//   {
//     immediate: true
//   }
// )
//#endregion
watchEffect(() => {
  const id = route.params.id as string
  if (route.fullPath === `/category/${id}`) {
    category.getTopCategory(id)
  }
})
const bread = computed(() => {
  console.log('111')
  const id = route.params.id as string
  const obj = {
    top: {} as CategoryItem
  }
  category?.list.forEach(item => {
    if (item.id === id) {
      obj.top = item
    }
  })
  return obj
})
</script>

<template>
  <div class="top-category">
    <div class="container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>{{ bread.top.name }}</XtxBreadItem>
      </XtxBread>
      <XtxCarousel :slides="home.bannerList" style="height: 500px" auto-play />
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in category.topCategory.children" :key="i.id">
            <a href="javascript:;">
              <img v-lazy="i.picture" />
              <p>{{ i.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 分类关联商品 -->
      <div class="ref-goods" v-for="item in category.topCategory.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <XtxMore />
        </div>
        <div class="body">
          <GoodsItem v-for="i in item.goods" :key="i.id" :goods="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
}
</style>
