<script setup lang="ts" name="GoodsItem">
import { reactive, ref, PropType } from 'vue'
import { GoodsItem } from '@/types/data'
defineProps({
  goods: {
    type: Object as PropType<GoodsItem>,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="`/goods/${goods.id}`" class="goods-item">
    <img v-lazy="goods.picture" alt="" />
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>

<style scoped lang="less">
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  .hoverShadow();
  img {
    width: 160px;
    height: 160px;
  }
  p {
    padding-top: 10px;
  }
  .name {
    font-size: 16px;
  }
  .desc {
    color: #999;
    height: 29px;
  }
  .price {
    color: @priceColor;
    font-size: 20px;
  }
}
</style>
