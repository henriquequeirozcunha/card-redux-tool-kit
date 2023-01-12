import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AddProduct, ListProducts } from 'core/application/services/products'
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
  products: Product[] | undefined
  product: Product | null
  status: string
}

const initialState: ProductState = {
  products: [],
  product: null,
  status: 'idle'
}

export const listProductsAsync = createAsyncThunk<
  ListProducts.Output,
  ListProducts.Query
>('product/listProductsAsync', async ({ id, type } = {}) => {
  try {
    return await new ListProducts().load()
  } catch (error) {
    console.log('error', error)
  }
})

export const addProductAsync = createAsyncThunk<
  AddProduct.Output,
  AddProduct.Command
>('product/addProductAsync', async ({ produtct }) => {
  try {
    await new AddProduct().handle()
  } catch (error) {
    console.log('error', error)
  }
})

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
      state.products?.push(action.payload)
    },
    removeProduct: (state, action) => {
      const { id } = action.payload

      state.products = state.products?.filter((p) => p.id !== id)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(listProductsAsync.pending, (state) => {
      state.status = 'pendingListProducts'
    })
    builder.addCase(listProductsAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.products = action.payload
    })
    builder.addCase(listProductsAsync.rejected, (state) => {
      state.status = 'idle'
    })

    // builder.addCase(addProductAsync.pending, (state) => {
    //   state.status = 'pendingAddProducts'
    // })
    // builder.addCase(addProductAsync.fulfilled, (state) => {
    //   state.status = 'idle'
    // })
    // builder.addCase(addProductAsync.rejected, (state) => {
    //   state.status = 'idle'
    // })
  }
})

export const { setProduct, setProducts, addProduct, removeProduct } =
  productSlice.actions
