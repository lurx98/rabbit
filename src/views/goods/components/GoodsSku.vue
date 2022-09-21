<script setup lang="ts" name="GoodsSku">
import { reactive, ref } from 'vue'
import { GoodsInfo, Spec, SpecValue } from '../../../types/data'
import bwPowerSet from '@/utils/power-set'
const props = defineProps<{ goods: GoodsInfo; skuId?: string }>()
const emit = defineEmits<{ (e: 'changeSku', skuId: string): void }>()

const changeSelected = (item: Spec, sub: SpecValue) => {
  if (sub.disabled) return
  if (sub.selected) {
    sub.selected = false
  } else {
    item.values.forEach(v => {
      v.selected = false
    })
    sub.selected = true
  }
  updateDisabledStatus(props.goods.specs, pathMap)
  const selected = getSelectedSpec(props.goods.specs).filter(v => v)
  if (selected.length === props.goods.specs.length) {
    // 说明全部选中
    // 2. 去pathMap找到对应的skuid
    const key = selected.join('★')
    const [skuId] = pathMap[key]
    // 3. 子传父，给父组件
    emit('changeSku', skuId)
  }
}
const getPathMap = () => {
  const pathMap: any = {}
  // 1. 过滤掉库存为0的sku
  const skus = props.goods.skus.filter(item => item.inventory > 0)
  // console.log(skus)
  // 2. 遍历有效的sku,获取sku的幂集
  skus.forEach(item => {
    const arr = item.specs.map(sub => sub.valueName)
    // console.log(arr)
    // 3. 调用powerSet获取幂集
    const powerSet = bwPowerSet(arr)
    // 4. 把这些powerSet合并到一个路径字典中
    powerSet.forEach(sub => {
      const key = sub.join('★')
      // 5. 判断pathMap中有没有key
      if (key in pathMap) {
        // 6. 存在
        pathMap[key].push(item.id)
      } else {
        // 7. 不存在
        pathMap[key] = [item.id]
      }
    })
  })

  return pathMap
}
const pathMap = reactive(getPathMap())
const getSelectedSpec = (specs: Spec[]) => {
  const arr: string[] = []
  specs.forEach(item => {
    const temp = item.values.find(sub => sub.selected)
    arr.push(temp ? temp.name : '')
  })
  return arr
}
const updateDisabledStatus = (specs: Spec[], pathMap: any) => {
  specs.forEach((spec, index) => {
    spec.values.forEach(v => {
      const selectedSpec = getSelectedSpec(specs)
      selectedSpec[index] = v.name
      // console.log('selectedSpec', selectedSpec)
      const key = selectedSpec.filter(item => item).join('★')
      // 不能简单的判断当前规格在pathMap中是否存在
      if (key in pathMap) {
        // 能找到
        v.disabled = false
      } else {
        // 找不到
        v.disabled = true
      }
    })
  })
}
const initSelectedSpec = () => {
  console.log(props.skuId)
  const sku = props.goods.skus.find(item => item.id === props.skuId)
  // console.log(sku)
  if (sku) {
    // 如果根据父组件传递的skuId找到了对应的sku,设置默认选中
    props.goods.specs.forEach((item, index) => {
      // 获取到sku中选中的规格
      const value = sku.specs[index].valueName
      console.log(value)
      // 让value对应的规格选中
      const spec = item.values.find(item => item.name === value)
      spec!.selected = true
    })
  }
}
initSelectedSpec()
updateDisabledStatus(props.goods.specs, pathMap)
</script>

<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.name">
      <dt>{{ item.name }}</dt>
      <dd v-for="sub in item.values">
        <img
          v-if="sub.picture"
          :src="sub.picture"
          alt=""
          :title="sub.name"
          :class="{ selected: sub.selected, disabled: sub.disabled }"
          @click="changeSelected(item, sub)"
        />
        <span
          v-else
          :class="{ selected: sub.selected, disabled: sub.disabled }"
          @click="changeSelected(item, sub)"
        >
          {{ sub.name }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      /*  flex: 1; */
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
