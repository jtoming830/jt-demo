import { useEffect, useMemo, useState } from 'react'
import { EditModal, Table } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, moviesSelector } from '../../store/movies'
import { Button, Input } from 'antd'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import { messages } from '../../messages'

const ToolPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  button + button {
    margin-left: 8px;
  }
`

const SearchInput = styled(Input)`
  width: 400px;
`

export default function MoviesRates() {
  const dispatch = useDispatch()
  const { loading, data: movies } = useSelector(moviesSelector)

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState()
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (!movies.length) {
      dispatch(getMovies())
    }
  }, [dispatch, movies])

  const onClose = () => {
    setSelectedMovie(null)
    setModalOpen(false)
  }

  const filteredMovies = useMemo(
    () => movies.filter(({ title = '' }) => title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())),
    [movies, searchValue]
  )

  const intl = useIntl()

  return (
    <>
      <ToolPanel>
        <SearchInput
          placeholder={intl.formatMessage(messages.searchPlaceholder)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div>
          <Button onClick={() => setModalOpen(true)}>{intl.formatMessage(messages.add)}</Button>
        </div>
      </ToolPanel>
      <Table
        movies={filteredMovies}
        loading={loading}
        onClick={(movie) => {
          setSelectedMovie(movie)
          setModalOpen(true)
        }}
      />
      <EditModal
        open={modalOpen}
        onClose={onClose}
        movie={selectedMovie}
      />
    </>
  )
}
