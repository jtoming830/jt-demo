import { createSlice } from '@reduxjs/toolkit'
import { getCountries } from './actions'

const initialState = {
  loading: true,
  countries: [],
  regions: []
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload
      state.regions = [...new Set(action.payload.map((country) => country.region))]
      state.loading = false
    })
  }
})
