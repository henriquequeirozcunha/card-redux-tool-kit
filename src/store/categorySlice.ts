import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { ListCategories } from 'core/application/services/categories'
import { Category } from 'core/domain/entities'
import { RootState } from './configureStore'

const categoryAdapter = createEntityAdapter<Category>()

export const listCategoriesAsync = createAsyncThunk<
  ListCategories.Output,
  ListCategories.Query
>('category/listCategoriesAsync', async (__, thunkApi) => {
  try {
    return await new ListCategories().handle()
  } catch (error: any) {
    thunkApi.rejectWithValue({ error: error.data })
  }
})

export const categorySlice = createSlice({
  name: 'category',
  initialState: categoryAdapter.getInitialState({
    status: 'idle',
    categoriesLoaded: false
  }),
  reducers: {
    setCategory: categoryAdapter.updateOne
  },
  extraReducers: (builder) => {
    builder.addCase(listCategoriesAsync.pending, (state) => {
      state.status = 'pendingListCategories'
      state.categoriesLoaded = false
    })
    builder.addCase(listCategoriesAsync.fulfilled, (state, action) => {
      state.status = 'idle'

      if (action.payload?.length) {
        categoryAdapter.setAll(state, action.payload)
      }

      state.categoriesLoaded = true
    })
    builder.addCase(listCategoriesAsync.rejected, (state) => {
      state.status = 'idle'
      state.categoriesLoaded = false
    })
  }
})

export const { setCategory } = categorySlice.actions

export const categorySelectors = categoryAdapter.getSelectors(
  (state: RootState) => state.categories
)
