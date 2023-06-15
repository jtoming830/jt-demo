import { Table as AntdTable } from 'antd'
import { columns } from './columns'

export function Table() {
  return (
    <AntdTable
      columns={columns}
      dataSource={[]}
    />
  )
}
