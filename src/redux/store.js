import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { productsReducer } from './products/productsSlice';
import { persistedAuthReducer } from './auth/authPersistConfig';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
