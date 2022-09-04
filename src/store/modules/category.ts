import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, CategoryItem, TopCategory } from '@/types/data'
import { topCategory } from '../constants'
const defaultCategory = topCategory.map(item => {
  return {
    name: item
  }
})
const useCategoryStore = defineStore('category', {
  state() {
    return {
      list: defaultCategory as CategoryItem[],
      topCategory: {} as TopCategory
    }
  },
  actions: {
    async getAllCategory() {
      const { data } = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      data.result.forEach(item => {
        item.open = false
      })
      this.list = data.result
    },
    show(id: string) {
      const category = this.list.find(item => (item.id = id))
      category!.open = true
    },
    hidden(id: string) {
      const category = this.list.find(item => (item.id = id))
      category!.open = false
    },
    async getTopCategory(id: string) {
      const { data } = await request.get<ApiRes<TopCategory>>('/category', {
        params: {
          id
        }
      })
      this.topCategory = data.result
    }
  }
})
export default useCategoryStore
