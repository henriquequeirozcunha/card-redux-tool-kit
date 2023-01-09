import { Product } from 'Core/Domain/Entities/product'
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

export const createNewEmptyProduct = (): Product => {
  const productToAdd: Product = {
    id: uuidv4(),
    name: 'New Product',
    price: 0
  }

  return productToAdd
}

export const generateUUID = () => {
  return uuidv4()
}
