import { Product } from 'core/domain/entities/product'
import { mockProducts } from '../../../../../tests/mocks'

const delay = (duration = 500) =>
  new Promise((resolve) => setTimeout(resolve, duration))

export class ListProducts {
  async load(params?: ListProducts.Query): Promise<ListProducts.Output> {
    await delay(500)

    let result = mockProducts

    if (params?.category_id?.length) {
      result = result.filter(
        (item) =>
          item.category_id && params.category_id?.includes(item.category_id)
      )
    }

    return Promise.resolve(result)
  }
}

export namespace ListProducts {
  export type Query = {
    id?: string[] | undefined
    type?: string[] | undefined
    category_id?: string[] | undefined
    company_id?: string[] | undefined
    suspended?: boolean
  }
  export type Output = Product[] | undefined
}
