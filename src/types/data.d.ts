export interface ApiRes<T> {
  code: string
  msg: string
  result: T
}
// 分类项
export type CategoryItem = {
  id: string
  name: string
  picture: string
  open: Boolean
  children: CategoryItem[]
  goods: CategoryGoods[]
}
// 分类商品
export type CategoryGoods = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}
// 轮播图
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}
