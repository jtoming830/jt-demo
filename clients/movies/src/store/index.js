import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './movies'

const reducer = combineReducers({
  movies: moviesSlice.reducer
})

export const store = configureStore({ reducer })
