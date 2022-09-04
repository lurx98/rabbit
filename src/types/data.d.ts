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
// 商品项
export type GoodsItem = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}
export type HotGoods = {
  id: string
  picture: string
  title: string
  alt: string
}
export type BrandItem = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}
export type HomeProduct = {
  id: string
  name: string
  picture: string
  saleInfo: string
  children: {
    id: string
    name: string
  }[]
  goods: {
    id: string
    name: string
    desc: string
    price: string
    picture: string
    discount?: any
    orderNum: number
  }[]
}
