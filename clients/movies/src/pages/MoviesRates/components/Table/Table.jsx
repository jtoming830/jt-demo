import { Table as AntdTable } from 'antd'
import { getColumns } from './columns'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

const StyledAntdTable = styled(AntdTable)`
  tr:hover {
    cursor: pointer;
  }
`

export function Table({ movies, loading, onClick }) {
  const intl = useIntl()
  const columns = getColumns(intl)

  return (
    <StyledAntdTable
      columns={columns}
      dataSource={movies}
      loading={loading}
      rowKey="id"
      onRow={(record) => ({ onClick: () => onClick(record) })}
    />
  )
}
