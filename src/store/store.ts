
import { FINGERPRINT_API_KEY } from '@/config';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import type { Transform, WebStorage } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import session from 'redux-persist/lib/storage/session';

interface PersitConfig {
  key: string;
  storage: WebStorage;
  transforms?: [Transform<any, any>]
}

const encryptStore = encryptTransform({
  secretKey: FINGERPRINT_API_KEY,
  onError: (error) => console.error(error)
})

export const persistConfig: PersitConfig = {
  key: 'root',
  storage: session,
  // blacklist: ['extras'],
  transforms: [encryptStore]
};

const rootReducer = combineReducers({
  // Add reducers
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getMiddlewares = (getDefaultMiddlewares: any) => {
  if (process.env.NODE_ENV !== 'development') return getDefaultMiddlewares();
  return [...getDefaultMiddlewares(), logger];
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getMiddlewares,
});
