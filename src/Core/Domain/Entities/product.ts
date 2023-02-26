import { Category } from './category'
import { Tag } from './tag'

export type Product = {
  id: string
  name: string
  price: number
  pictureUrl?: string
  wishList?: boolean
  description?: string
  quantity?: number
  categoryId?: string
  category?: Category
  suspended?: boolean
  tags?: Tag[]
}
