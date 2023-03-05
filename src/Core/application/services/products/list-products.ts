import { generateUniqueId } from 'core/application/utils'
import { Product } from 'core/domain/entities/product'

const defaultDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu erat ut arcu vestibulum dapibus. Nunc ipsum magna, convallis at ante vitae, tristique varius libero. Mauris tincidunt ligula non eros tincidunt pulvinar. In arcu tortor, vulputate at tristique et, aliquam at tortor. Proin placerat lorem ac finibus efficitur. Nam aliquam, enim vitae blandit suscipit, arcu nisl consequat dolor, a ullamcorper nibh arcu nec lectus. Curabitur at augue ut nunc vestibulum aliquam at nec urna. Vestibulum ultrices fermentum odio eu congue. Praesent eu urna ultricies, laoreet diam sit amet, placerat est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris scelerisque massa urna, ac ullamcorper velit vulputate sed. Aliquam pharetra lobortis augue quis eleifend. Quisque est ipsum, consectetur a nulla aliquam, sagittis dictum enim. Fusce quis sodales orci, eu laoreet massa.`

export const mockProducts: Product[] = [
  {
    id: generateUniqueId(),
    name: 'New Product 1',
    price: 100,
    picture_url: '/img/logo.svg',
    description: defaultDescription
  },
  {
    id: generateUniqueId(),
    name: 'New Product 2',
    price: 200,
    picture_url: '/img/hero-illustration.svg',
    description: defaultDescription
  },
  {
    id: generateUniqueId(),
    name: 'New Product 3',
    price: 300,
    picture_url: '/img/logo.svg',
    description: defaultDescription
  },
  {
    id: generateUniqueId(),
    name: 'New Product 4',
    price: 400,
    picture_url: '/img/hero-illustration.svg',
    description: defaultDescription
  },
  {
    id: generateUniqueId(),
    name: 'New Product 5',
    price: 500,
    picture_url: '/img/hero-illustration.svg',
    description: defaultDescription
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
