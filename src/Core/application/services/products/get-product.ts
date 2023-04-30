import { generateUniqueId } from 'core/application/utils'
import { Product } from 'core/domain/entities/product'

const defaultDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu erat ut arcu vestibulum dapibus. Nunc ipsum magna, convallis at ante vitae, tristique varius libero. Mauris tincidunt ligula non eros tincidunt pulvinar. In arcu tortor, vulputate at tristique et, aliquam at tortor. Proin placerat lorem ac finibus efficitur. Nam aliquam, enim vitae blandit suscipit, arcu nisl consequat dolor, a ullamcorper nibh arcu nec lectus. Curabitur at augue ut nunc vestibulum aliquam at nec urna. Vestibulum ultrices fermentum odio eu congue. Praesent eu urna ultricies, laoreet diam sit amet, placerat est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris scelerisque massa urna, ac ullamcorper velit vulputate sed. Aliquam pharetra lobortis augue quis eleifend. Quisque est ipsum, consectetur a nulla aliquam, sagittis dictum enim. Fusce quis sodales orci, eu laoreet massa.`

const delay = (duration = 500) =>
  new Promise((resolve) => setTimeout(resolve, duration))

export class GetProduct {
  async handle({ id }: GetProduct.Query): Promise<GetProduct.Output> {
    await delay(500)

    const product = {
      id,
      name: 'Custom Generated Product',
      price: 500,
      picture_url: '/img/hero-illustration.svg',
      description: defaultDescription
    }

    return Promise.resolve(product)
  }
}

export namespace GetProduct {
  export type Query = { id: string }
  export type Output = Product | undefined
}
