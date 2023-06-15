import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeRequest } from '../../api/makeRequest'

export const getMovies = createAsyncThunk('movies/getMovies', () => makeRequest('/movies', { method: 'GET' }))

export const createMovie = createAsyncThunk('movies/createMovie', (movie) =>
  makeRequest('/movies', { method: 'POST', body: JSON.stringify(movie) })
)

export const removeMovie = createAsyncThunk('movies/removeMovie', (id) => makeRequest(`/movies/${id}`, { method: 'DELETE' }))

export const updateMovie = createAsyncThunk('movies/updateMovie', (movie) =>
  makeRequest(`/movies/${movie.id}`, { method: 'PATCH', body: JSON.stringify(movie) })
)
