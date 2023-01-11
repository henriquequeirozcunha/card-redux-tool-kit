import { createSlice } from '@reduxjs/toolkit'
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

type ProductState = {
  products: Product[]
  product: Product | null
}

const initialState: ProductState = {
  products: [],
  product: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
    setProducts: (state) => {
      state.products = mockProducts
    },
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    removeProduct: (state, action) => {
      const { id } = action.payload

      state.products = state.products.filter((p) => p.id !== id)
    }
  }
})

export const { setProduct, setProducts, addProduct, removeProduct } =
  productSlice.actions
