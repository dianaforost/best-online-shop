import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import { productsReducer } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
