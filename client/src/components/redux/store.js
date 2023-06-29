
import userReducer  from './authslice.js'
import adminReducer from "./Adminslice.js"
import cartReducer  from './cartslice'
import  UserlistSlice  from './Userlist.js';
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
    timeout: 24 * 60 * 60 * 1000,
  }




  const rootReducer = combineReducers({ user: userReducer,
  cart: cartReducer,admin:adminReducer,ulist:UserlistSlice});
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