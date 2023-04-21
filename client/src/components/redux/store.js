
import userReducer  from './authslice.js'
import adminReducer from "./Adminslice.js"
import cartReducer  from './cartslice'
import storage from 'redux-persist/lib/storage';

import { PersistGate } from 'redux-persist/integration/react'

import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { adminSlice } from './Adminslice.js';


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }




  const rootReducer = combineReducers({ user: userReducer,
  cart: cartReducer,admin:adminReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)