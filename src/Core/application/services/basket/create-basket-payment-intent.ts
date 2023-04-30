import { delay, generateUniqueId } from 'core/application/utils'
import { Basket } from 'core/domain/entities/basket'

export class CreateBasketPaymentIntent {
  async handle(
    params?: CreateBasketPaymentIntent.Command
  ): Promise<CreateBasketPaymentIntent.Output> {
    await delay(500)

    return Promise.resolve({ id: generateUniqueId() })
  }
}

export namespace CreateBasketPaymentIntent {
  export type Command = Omit<Basket, 'id'>
  export type Output = { id: string }
}
