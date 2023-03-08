import { Product } from 'core/domain/entities/product'
import { mockProducts } from '../../../../../tests/mocks'

const delay = (duration = 500) =>
  new Promise((resolve) => setTimeout(resolve, duration))

export class ListProducts {
  async load(params?: ListProducts.Query): Promise<ListProducts.Output> {
    await delay(500)

    return Promise.resolve(mockProducts)
  }
}

export namespace ListProducts {
  export type Query = {
    id?: string
    type?: string
    category_id?: string
    suspended?: boolean
  }
  export type Output = Product[] | undefined
}
