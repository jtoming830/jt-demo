import { useEffect, useState } from 'react'
import { Table } from './components'
import { makeRequest } from '../../api/makeRequest'

export default function MoviesRates() {
  const [movies, setMovies] = useState()

  useEffect(() => {
    makeRequest('/movies', { method: 'GET' })
      .then((response) => response.json())
      .then(setMovies)
  }, [])

  return <Table movies={movies} />
}
