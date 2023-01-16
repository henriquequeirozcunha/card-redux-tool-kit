import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { Basket } from 'core/domain/entities/basket'
import { CreateBasketPaymentIntent } from '../core/application/services/basket/create-basket-payment-intent'
import { RootState } from './configureStore'

const basketAdapter = createEntityAdapter<Basket>()

export const createBasketPaymentIntentAsync = createAsyncThunk<
  CreateBasketPaymentIntent.Output | undefined,
  CreateBasketPaymentIntent.Command
>('basket/createBasketPaymentIntentAsync', async ({ products, totalPrice }) => {
  try {
    return await new CreateBasketPaymentIntent().handle({
      products,
      totalPrice
    })
  } catch (error) {
    console.log('error', error)
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
  }
})

export const basketSelectors = basketAdapter.getSelectors(
  (state: RootState) => state.basket
)

export const { setProductQuantity, setConfirmed } = basketSlice.actions
