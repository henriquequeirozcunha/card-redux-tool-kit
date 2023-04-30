import { Product } from './product'

export type Basket = {
  id: string
  products: Product[]
  total_price: number
}
