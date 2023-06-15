import { useEffect, useState } from 'react'
import { EditModal, Table } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, moviesSelector } from '../../store/movies'
import { Button } from 'antd'
import styled from 'styled-components'

const ToolPanel = styled.div`
  margin-bottom: 12px;
`

export default function MoviesRates() {
  const dispatch = useDispatch()
  const { loading, data: movies } = useSelector(moviesSelector)

  const [open, setOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState()

  useEffect(() => {
    if (!movies.length) {
      dispatch(getMovies())
    }
  }, [dispatch, movies])

  const onClose = () => {
    setSelectedMovie(null)
    setOpen(false)
  }

  return (
    <>
      <ToolPanel>
        <Button onClick={() => setOpen(true)}>Add</Button>
      </ToolPanel>
      <Table
        movies={movies}
        loading={loading}
        onClick={(movie) => {
          setSelectedMovie(movie)
          setOpen(true)
        }}
      />
      <EditModal
        open={open}
        onClose={onClose}
        movie={selectedMovie}
      />
    </>
  )
}
