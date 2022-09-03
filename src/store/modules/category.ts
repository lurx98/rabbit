import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, CategoryItem } from '@/types/data'
import { topCategory } from '../constants'
const defaultCategory = topCategory.map(item => {
  return {
    name: item
  }
})
console.log(defaultCategory)
const useCategoryStore = defineStore('category', {
  state() {
    return {
      list: defaultCategory as CategoryItem[]
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
    }
  }
})
export default useCategoryStore
