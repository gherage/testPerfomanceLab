/* eslint-disable @typescript-eslint/default-param-last */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../features/auth/api';
import type { UserWithoutId } from '../../features/auth/types/User';
import type { AuthState } from '../../features/auth/types/State';

const initialState: AuthState = {
  user: undefined,
  error: null,
};

export const checkUser = createAsyncThunk('auth/check', () =>
  api.fetchCheckUser()
);

export const signIn = createAsyncThunk('auth/signin', (user: UserWithoutId) =>
  api.fetchSignIn(user)
);
export const logout = createAsyncThunk('auth/logout', () => api.fetchLogOut());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

export default authSlice.reducer;
