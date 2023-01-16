import { Product } from './product'

export type Basket = {
  id: string
  products: Product[]
  totalPrice: number
}
