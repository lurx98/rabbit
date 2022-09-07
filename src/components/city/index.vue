<script setup lang="ts" name="XtxCity">
import { reactive, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ApiRes, AreaList, CityResult } from '@/types/data'
import axios from 'axios'
defineProps<{ userAddress: string }>()
const emit = defineEmits<{
  (e: 'changeCity', value: CityResult): void
}>()

const active = ref(false)
const toggle = () => {
  active.value = !active.value
}
const target = ref(null)
onClickOutside(target, () => {
  active.value = false
})
const cityList = ref<AreaList[]>([])
const getCityList = async () => {
  const { data } = await axios.get<AreaList[]>(
    'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
  )
  cityList.value = data
}
getCityList()
const changeResult = reactive({
  provinceCode: '',
  provinceName: '',
  cityCode: '',
  cityName: '',
  countyCode: '',
  countyName: ''
})

const selectCity = (city: AreaList) => {
  console.log(city)
  if (city.level === 0) {
    changeResult.provinceName = city.name
    changeResult.provinceCode = city.code
    cityList.value = city.areaList
  }
  if (city.level === 1) {
    changeResult.cityName = city.name
    changeResult.cityCode = city.code
    cityList.value = city.areaList
  }
  if (city.level === 2) {
    changeResult.countyName = city.name
    changeResult.countyCode = city.code
    active.value = false
    emit('changeCity', changeResult)
  }
}
watch(active, val => {
  if (!val) {
    getCityList()
  }
})
</script>

<template>
  <div class="xtx-city" ref="target">
    <div class="select" :class="{ active: active }" @click="toggle">
      <span class="placeholder" v-if="!userAddress">请选择配送地址</span>
      <span class="value" v-else>{{ userAddress }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-show="active">
      <span class="ellipsis" v-for="i in cityList" :key="i.code" @click="selectCity(i)">{{ i.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
