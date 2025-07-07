import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/couterSlice.js'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
