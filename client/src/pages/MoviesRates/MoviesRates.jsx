import { useEffect } from 'react'
import { Table } from './components'
import { makeRequest } from '../../api/makeRequest'

export default function MoviesRates() {
  useEffect(() => {
    makeRequest('/test', { method: 'POST' }).then(console.log).catch(console.log)
  }, [])

  return <Table />
}
