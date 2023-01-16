import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import {
  AddProduct,
  GetProduct,
  ListProducts
} from 'core/application/services/products'
import { Product } from 'core/domain/entities/product'
import { RootState } from './configureStore'

export const createNewEmptyProduct = (): Product => {
  const productToAdd: Product = {
    id: '',
    name: 'New Product',
    price: 0,
    pictureUrl: '/img/hero-illustration.svg'
  }

  return productToAdd
}

const productAdapter = createEntityAdapter<Product>()

export const getProductAsync = createAsyncThunk<
  GetProduct.Output,
  GetProduct.Query
>('product/getProductAsync', async ({ id }, thunkApi) => {
  try {
    return await new GetProduct().handle({ id })
  } catch (error: any) {
    thunkApi.rejectWithValue({ error: error.data })
  }
})

export const listProductsAsync = createAsyncThunk<
  ListProducts.Output,
  ListProducts.Query
>('product/listProductsAsync', async ({ id, type } = {}, thunkApi) => {
  try {
    return await new ListProducts().load()
  } catch (error: any) {
    thunkApi.rejectWithValue({ error: error.data })
  }
})

export const addProductAsync = createAsyncThunk<
  AddProduct.Output,
  AddProduct.Command
>('product/addProductAsync', async ({ produtct }, thunkApi) => {
  try {
    await new AddProduct().handle()
  } catch (error: any) {
    thunkApi.rejectWithValue({ error: error.data })
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState: productAdapter.getInitialState({
    status: 'idle'
  }),
  reducers: {
    setWishlist: (state, action) => {
      const productToUpdate = state.entities[action.payload.productId]

      if (productToUpdate) {
        productToUpdate.wishList = !productToUpdate.wishList
      }
    },
    getProduct: (state, action) => {
      const { id } = action.payload
    },
    setProduct: productAdapter.updateOne,
    addProduct: productAdapter.addOne,
    removeProduct: productAdapter.removeOne
  },
  extraReducers: (builder) => {
    builder.addCase(listProductsAsync.pending, (state) => {
      state.status = 'pendingListProducts'
    })
    builder.addCase(listProductsAsync.fulfilled, (state, action) => {
      state.status = 'idle'

      if (action.payload?.length) {
        productAdapter.setAll(state, action.payload)
      }
    })
    builder.addCase(listProductsAsync.rejected, (state) => {
      state.status = 'idle'
    })

    builder.addCase(getProductAsync.pending, (state) => {
      state.status = 'pendinggetProduct'
    })
    builder.addCase(getProductAsync.fulfilled, (state, action) => {
      state.status = 'idle'

      if (action.payload) {
        productAdapter.upsertOne(state, action.payload)
      }
    })
    builder.addCase(getProductAsync.rejected, (state) => {
      state.status = 'idle'
    })
  }
})

export const { setWishlist, setProduct, addProduct, removeProduct } =
  productSlice.actions

export const productSelectors = productAdapter.getSelectors(
  (state: RootState) => state.products
)
