import { configureStore } from '@reduxjs/toolkit'
import dataSclice from "./reducer/redux"
export const store = configureStore({
  reducer: {
    Reducer1:dataSclice
  },
})