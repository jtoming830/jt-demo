import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { styled } from 'styled-components'

const Content = styled.div`
  margin: 0 80px;

  @media only screen and (max-width: 768px) {
    margin: 0 16px;
  }
`

export function Layout() {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  )
}
