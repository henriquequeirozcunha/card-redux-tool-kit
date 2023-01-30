import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { Basket } from 'core/domain/entities/basket'
import {
  CreateBasketPaymentIntent,
  RemoveBasketItem
} from '../core/application/services/basket'
import { RootState } from './configureStore'

const basketAdapter = createEntityAdapter<Basket>()

export const createBasketPaymentIntentAsync = createAsyncThunk<
  CreateBasketPaymentIntent.Output | undefined,
  CreateBasketPaymentIntent.Command
>(
  'basket/createBasketPaymentIntentAsync',
  async ({ products, totalPrice }, thunkAPI) => {
    try {
      return await new CreateBasketPaymentIntent().handle({
        products,
        totalPrice
      })
    } catch (error: any) {
      console.log('error', error)
      return thunkAPI.rejectWithValue({ error: error.data })
    }
  }
)

export const removeBasketItemAsync = createAsyncThunk<
  RemoveBasketItem.Output | undefined,
  RemoveBasketItem.Command
>('basket/RemoveBasketItemAsync', async ({ basketId, productId }, thunkAPI) => {
  try {
    return await new RemoveBasketItem().handle({
      basketId,
      productId
    })
  } catch (error: any) {
    console.log('error', error)
    return thunkAPI.rejectWithValue({ error: error.data })
  }
})

export const basketSlice = createSlice({
  name: 'basket',
  initialState: basketAdapter.getInitialState({
    basketLoaded: false,
    status: 'idle'
  }),
  reducers: {
    setConfirmed: (state, action) => {
      console.log('setConfirmed')
    },
    setProductQuantity: (state, action) => {
      const { basketId, productId } = action.payload

      const basketToUpdate = state.entities[basketId]

      if (basketToUpdate) {
        const productToUpdate = basketToUpdate.products.find(
          (p) => p.id === productId
        )

        if (productToUpdate) {
          productToUpdate.quantity = (productToUpdate.quantity || 1) + 1
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createBasketPaymentIntentAsync.pending, (state) => {
      state.status = 'pendingCreateBasketPaymentIntent'
    })
    builder.addCase(
      createBasketPaymentIntentAsync.fulfilled,
      (state, action) => {
        state.status = 'idle'

        if (!action.payload?.id) return

        const basketAdded: Basket = {
          id: action.payload!.id,
          products: action.meta.arg.products,
          totalPrice: action.meta.arg.totalPrice
        }
        console.log('basketAdded', basketAdded)
        basketAdapter.addOne(state, basketAdded)
      }
    )
    builder.addCase(createBasketPaymentIntentAsync.rejected, (state) => {
      state.status = 'idle'
    })
    builder.addCase(removeBasketItemAsync.pending, (state, action) => {
      state.status = `pendingRemoveBasketItem_${action.meta.arg.productId}`
    })
    builder.addCase(removeBasketItemAsync.fulfilled, (state, action) => {
      state.status = 'idle'

      const basketToUpdate = state.entities[action.meta.arg.basketId]

      console.log('basketToUpdate', basketToUpdate)

      if (basketToUpdate) {
        basketToUpdate.products = basketToUpdate.products.filter(
          (product) => product.id !== action.meta.arg.productId
        )
      }
    })
    builder.addCase(removeBasketItemAsync.rejected, (state) => {
      state.status = 'idle'
    })
  }
})

export const basketSelectors = basketAdapter.getSelectors(
  (state: RootState) => state.basket
)

export const { setProductQuantity, setConfirmed } = basketSlice.actions
