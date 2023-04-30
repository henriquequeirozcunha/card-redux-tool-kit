import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { productSlice } from './productSlice'
import { basketSlice } from './basketSlice'
import { categorySlice } from './categorySlice'
import { socketSlice } from './socketSlice'

export const globalStore = configureStore({
  reducer: {
    products: productSlice.reducer,
    basket: basketSlice.reducer,
    categories: categorySlice.reducer,
    socket: socketSlice.reducer
  }
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
