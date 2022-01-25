import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from '../components/coins/coinsSlice';


export const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
})