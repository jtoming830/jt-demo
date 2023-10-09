import { Table as AntdTable } from 'antd'
import { getColumns } from './columns'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import type { Movie } from '../../../../types/movie'

const StyledAntdTable = styled(AntdTable<Movie>)`
  tr:hover {
    cursor: pointer;
  }
`

type TableProps = {
  movies: Movie[]
  loading: boolean
  onClick: (record: Movie) => void
}

export function Table({ movies, loading, onClick }: TableProps) {
  const intl = useIntl()
  const columns = getColumns(intl)

  return (
    <StyledAntdTable
      columns={columns}
      dataSource={movies}
      loading={loading}
      rowKey="id"
      onRow={(record: Movie) => ({ onClick: () => onClick(record) })}
    />
  )
}
