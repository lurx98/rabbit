<script setup lang="ts" name="XtxBread">
import { reactive, ref, provide } from 'vue'
const props = defineProps({
  separator: {
    type: String,
    default: ''
  }
})
provide('separator', props.separator)
</script>

<template>
  <div class="xtx-bread">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.xtx-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
