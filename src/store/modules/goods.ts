import { defineStore } from 'pinia'
import { ApiRes, GoodsInfo } from '@/types/data'
import request from '@/utils/request'
export const useGoodsStore = defineStore('goods', {
  state() {
    return {
      info: {} as GoodsInfo
    }
  },
  actions: {
    async getGoodsInfo(id: string) {
      const { data } = await request.get<ApiRes<GoodsInfo>>('/goods', {
        params: { id }
      })
      this.info = data.result
    }
  }
})
