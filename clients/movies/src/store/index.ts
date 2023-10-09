import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './movies'
import { localizationSlice } from './localization'
import { useDispatch as useReduxDispatch } from 'react-redux'

const reducer = combineReducers({
  movies: moviesSlice.reducer,
  localization: localizationSlice.reducer
})

export const store = configureStore({ reducer })

export type RootState = ReturnType<typeof store.getState>

type TDispatch = typeof store.dispatch
export const useDispatch = (): TDispatch => useReduxDispatch<TDispatch>()
