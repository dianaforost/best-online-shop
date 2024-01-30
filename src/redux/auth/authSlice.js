import { createSlice } from '@reduxjs/toolkit';
import { registration, login, logOut } from './operations';

const initialState = {
  user: null,
  isLoggedIn: false,
  accessToken: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.accessToken = action.payload.jwtToken;
      })
      .addCase(registration.rejected, state => {
        state.user = {};
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.accessToken = action.payload.jwtToken;
      })
      .addCase(login.rejected, state => {
        state.user = {};
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.isLoggedIn = false;
        state.accessToken = null;
      })
      .addCase(logOut.rejected, state => {
        state.user = {};
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
