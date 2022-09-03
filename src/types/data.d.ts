export interface ApiRes<T> {
  code: string
  msg: string
  result: T
}
export type CategoryItem = {
  id: string
  name: string
  picture: string
  open: Boolean
  children: CategoryItem[]
}
