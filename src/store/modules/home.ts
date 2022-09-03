import { ApiRes, BannerItem } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
export default defineStore('home', {
  state() {
    return {
      bannerList: [] as BannerItem[]
    }
  },
  actions: {
    async getBannerList() {
      const { data } = await request.get<ApiRes<BannerItem[]>>('/home/banner')
      this.bannerList = data.result
    }
  }
})
