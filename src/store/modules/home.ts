import { ApiRes, BannerItem, GoodsItem, HotGoods } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
export default defineStore('home', {
  state() {
    return {
      bannerList: [] as BannerItem[],
      goodsList: [] as GoodsItem[],
      hotGoodList: [] as HotGoods[]
    }
  },
  actions: {
    async getBannerList() {
      const { data } = await request.get<ApiRes<BannerItem[]>>('/home/banner')
      this.bannerList = data.result
    },
    async getGoodsList() {
      const { data } = await request.get<ApiRes<GoodsItem[]>>('/home/new')
      this.goodsList = data.result
    },
    async getHotList() {
      const res = await request.get<ApiRes<HotGoods[]>>('/home/hot')
      this.hotGoodList = res.data.result
    }
  }
})
