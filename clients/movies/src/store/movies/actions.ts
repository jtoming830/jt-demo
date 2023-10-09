import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeRequest } from '../../api/makeRequest'
import { Movie } from '../../types/movie'

export const getMovies = createAsyncThunk('movies/getMovies', () => makeRequest<Movie[]>('/movies/api', { method: 'GET' }))

export const createMovie = createAsyncThunk('movies/createMovie', (movie: Partial<Movie>) =>
  makeRequest<Movie>('/movies/api', { method: 'POST', body: JSON.stringify(movie) })
)

export const removeMovie = createAsyncThunk('movies/removeMovie', (id: string) =>
  makeRequest(`/movies/api/${id}`, { method: 'DELETE' })
)

export const updateMovie = createAsyncThunk('movies/updateMovie', (movie: Partial<Movie> & { id: string }) =>
  makeRequest<Movie>(`/movies/api/${movie.id}`, { method: 'PATCH', body: JSON.stringify(movie) })
)
