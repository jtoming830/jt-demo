import { configureStore } from '@reduxjs/toolkit'
import { mainSlice } from './main'

export const store = configureStore({
  reducer: {
    main: mainSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
