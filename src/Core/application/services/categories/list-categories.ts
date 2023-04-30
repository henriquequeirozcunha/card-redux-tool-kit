import { delay } from 'core/application/utils'
import { Category } from 'core/domain/entities'
import { mockCategories } from '../../../../../tests/mocks'

export class ListCategories {
  async handle(params?: ListCategories.Query): Promise<ListCategories.Output> {
    await delay(500)

    return Promise.resolve(mockCategories)
  }
}

export namespace ListCategories {
  export type Query = void

  export type Output = Category[] | undefined
}
