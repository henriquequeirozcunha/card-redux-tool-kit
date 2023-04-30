import { Category } from './category'
import { Tag } from './tag'

export type Product = {
  id: string
  name: string
  price: number
  picture_url?: string
  wishList?: boolean
  description?: string
  quantity?: number
  category_id?: string
  category?: Category
  suspended?: boolean
  tags?: Tag[]
}
