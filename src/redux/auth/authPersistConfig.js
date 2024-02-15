import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';

const persistConfig = {
  key: 'user',
  storage,
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
