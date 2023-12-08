import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartState } from '../../features/cart/types/State';
import * as api from '../../features/cart/api';

const initialState: CartState = {
  productsInCart: [],
  error: null,
};

export const addToCart = createAsyncThunk('cart/add', (id: number) =>
  api.fetchAddToCart(id)
);
export const deleteFromCart = createAsyncThunk('cart/delete', (id: number) =>
  api.fetchDeleteFromCart(id)
);
export const loadCart = createAsyncThunk('cart/load', () =>
  api.fetchLoadCart()
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.productsInCart = [...state.productsInCart, action.payload];
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.productsInCart = state.productsInCart.filter(
          (product) => product.id !== +action.payload.id
        );
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadCart.fulfilled, (state, action) => {
        state.productsInCart = action.payload;
      })
      .addCase(loadCart.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

export default cartSlice.reducer;
