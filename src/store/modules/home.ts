import { ApiRes, BannerItem, BrandItem, GoodsItem, HomeProduct, HotGoods } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
export default defineStore('home', {
  state() {
    return {
      bannerList: [] as BannerItem[],
      goodsList: [] as GoodsItem[],
      hotGoodList: [] as HotGoods[],
      brandList: [] as BrandItem[],
      productList: [] as HomeProduct[]
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
    },
    async getBrandList() {
      const { data } = await request.get<ApiRes<BrandItem[]>>('/home/brand')
      this.brandList = data.result
    },
    async getProductList() {
      const { data } = await request.get<ApiRes<HomeProduct[]>>('/home/goods')
      this.productList = data.result
    }
  }
})
