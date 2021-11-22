import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from '../app/coins/coinsSlice';

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
})