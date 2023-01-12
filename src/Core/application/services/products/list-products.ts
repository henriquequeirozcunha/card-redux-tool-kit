import { Product } from 'core/domain/entities/product'
import { v4 as uuidv4 } from 'uuid'

export const mockProducts: Product[] = [
  {
    id: uuidv4(),
    name: 'New Product 1',
    price: 100,
    pictureUrl: '/img/logo.svg'
  },
  {
    id: uuidv4(),
    name: 'New Product 2',
    price: 200
  },
  {
    id: uuidv4(),
    name: 'New Product 3',
    price: 300,
    pictureUrl: '/img/logo.svg'
  },
  {
    id: uuidv4(),
    name: 'New Product 4',
    price: 400
  },
  {
    id: uuidv4(),
    name: 'New Product 5',
    price: 500
  }
]

const delay = (duration = 500) =>
  new Promise((resolve) => setTimeout(resolve, duration))

export class ListProducts {
  async load(params?: ListProducts.Query): Promise<ListProducts.Output> {
    await delay(500)

    return Promise.resolve(mockProducts)
  }
}

export namespace ListProducts {
  export type Query = { id?: string; type?: string }
  export type Output = Product[] | undefined
}
