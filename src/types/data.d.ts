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
export type Special = {
  creator: string
  isDelete: number
  createTime: string
  updateTime: string
  id: string
  classificationId: string
  title: string
  summary: string
  lowestPrice: number
  cover: string
  detailsUrl: string
  collectNum: number
  viewNum: number
  replyNum: number
}
// 顶级分类类型
export type TopCategory = {
  id: string
  name: string
  picture: string
  children: CategoryItem[]
}
export type SaleProperty = {
  id: string
  name: string
  properties: {
    id: string
    name: string
  }[]
}
export type SubCategory = {
  id: string
  name: string
  picture?: any
  parentId: string
  parentName: string
  goods: GoodsItem[]
  brands: {
    id: string
    name: string
    nameEn: string
    logo: string
    picture: string
    type?: any
    desc: string
    place: string
  }[]
  saleProperties: SaleProperty[]
}
