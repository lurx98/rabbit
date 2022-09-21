<script setup lang="ts" name="Goods">
import { reactive, ref, watchEffect } from 'vue'
import useStore from '../../store/index'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import GoodsImages from './components/GoodsImages.vue'
import GoodsSales from './components/GoodsSales.vue'
import GoodsName from './components/GoodsName.vue'
import GoodsSku from './components/GoodsSku.vue'
import GoodsDetail from './components/GoodsDetail.vue'
import GoodsHot from './components/GoodsHot.vue'
const route = useRoute()
const { goods } = useStore()
watchEffect(() => {
  const id = route.params.id as string
  goods.getGoodsInfo(id)
})
const { info } = storeToRefs(goods)
const changeSku = (skuId: string) => {
  // console.log(skuId)
  console.log(skuId)
  const sku = info.value.skus.find(item => item.id === skuId)
  if (sku) {
    info.value.inventory = sku.inventory
    info.value.price = sku.price
    info.value.oldPrice = sku.oldPrice
  }
}
const count = ref(1)
</script>

<template>
  <div class="xtx-goods-page" v-if="info.categories">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${info.categories[1].id}`">{{ info.categories[1].name }}</XtxBreadItem>
        <XtxBreadItem :to="`/category/sub/${info.categories[0].id}`">
          {{ info.categories[0].name }}
        </XtxBreadItem>
        <XtxBreadItem>{{ info.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImages :images="info.mainPictures" />
          <GoodsSales />
        </div>
        <div class="spec">
          <GoodsName ref="target" :goods="info" />
          <GoodsSku :goods="info" skuId="1369155864430120962" @changeSku="changeSku" />
          <XtxNumbox :max="info.inventory" isLabel v-model:modelValue="count" />
          <XtxButton type="primary" style="margin-top: 20px">加入购物车</XtxButton>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs">
            <GoodsDetail :goods="info" />
          </div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">
          <GoodsHot :type="1" />
          <GoodsHot :type="2" />
          <GoodsHot :type="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
