import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../../features/products/types/State';
import * as api from '../../features/products/api';

const initialState: ProductState = {
  products: [],
  error: null,
};

export const getProducts = createAsyncThunk(
  'products/load',
  (category: string) => api.fetchGetProducts(category)
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

export default productSlice.reducer;
