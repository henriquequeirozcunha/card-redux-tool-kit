import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { productSlice } from './productSlice'
import { basketSlice } from './basketSlice'

export const globalStore = configureStore({
  reducer: {
    products: productSlice.reducer,
    basketSlice: basketSlice.reducer
  }
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
