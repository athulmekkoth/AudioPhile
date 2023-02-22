import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './authslice.js'

export default configureStore({
    reducer: {
        user: userReducer,
      },
})