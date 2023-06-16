import { Table as AntdTable } from 'antd'
import { columns } from './columns'

export function Table({ movies, loading, onClick }) {
  return (
    <AntdTable
      columns={columns}
      dataSource={movies}
      loading={loading}
      rowKey="id"
      onRow={(record) => ({ onClick: () => onClick(record) })}
    />
  )
}
