import { Table as AntdTable } from 'antd'
import { columns } from './columns'

export function Table({ movies }) {
  return (
    <AntdTable
      columns={columns}
      dataSource={movies}
      loading={!movies}
      rowKey="id"
    />
  )
}
