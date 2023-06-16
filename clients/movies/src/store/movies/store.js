import { createSlice } from '@reduxjs/toolkit'
import { createMovie, getMovies, removeMovie, updateMovie } from './actions'

const initialState = {
  data: [],
  loading: true,
  error: null
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(getMovies.rejected, (state) => {
      state.error = true
      state.loading = false
    })

    builder.addCase(updateMovie.fulfilled, (state, action) => {
      const updatedMovie = action.payload

      state.data = state.data.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie))
    })

    builder.addCase(createMovie.fulfilled, (state, action) => {
      const movie = action.payload

      state.data = [movie, ...state.data]
    })

    builder.addCase(removeMovie.fulfilled, (state, action) => {
      const id = action.meta.arg

      state.data = state.data.filter((movie) => movie.id !== id)
    })
  }
})
