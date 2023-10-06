import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './movies'
import { localizationSlice } from './localization'

const reducer = combineReducers({
  movies: moviesSlice.reducer,
  localization: localizationSlice.reducer
})

export const store = configureStore({ reducer })
