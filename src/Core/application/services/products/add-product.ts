import { delay } from 'core/application/utils'
import { Product } from 'core/domain/entities/product'

export class AddProduct {
  async handle(params?: AddProduct.Command): Promise<AddProduct.Output> {
    await delay(500)

    return Promise.resolve()
  }
}

export namespace AddProduct {
  export type Command = { produtct: Product }
  export type Output = void
}
