import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'

import { productApi } from '../api/productApi'
import rootReducer, { RootState } from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
})
const persistor = persistStore(store)

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export { persistor, store }
