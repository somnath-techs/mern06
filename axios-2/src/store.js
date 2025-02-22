import { configureStore } from '@reduxjs/toolkit'
import Reducer from "./reducer/redux"
export const store = configureStore({
  reducer: {
    Reducer
  },
})