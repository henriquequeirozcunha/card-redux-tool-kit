import { delay, generateUniqueId } from 'core/application/utils'

export class RemoveBasketItem {
  async handle(
    params?: RemoveBasketItem.Command
  ): Promise<RemoveBasketItem.Output> {
    await delay(500)

    return Promise.resolve({ id: generateUniqueId() })
  }
}

export namespace RemoveBasketItem {
  export type Command = { basketId: string; productId: string }
  export type Output = { id: string }
}
