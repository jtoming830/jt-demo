import { Layout as AntdLayout } from 'antd'
import { styled } from 'styled-components'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

const StyledLayout = styled(AntdLayout)`
  height: 100vh;
`

const ScrollableContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const Content = styled.div`
  flex: 1;
  padding: 20px 50px 0;
`

export function Layout() {
  return (
    <StyledLayout>
      <Header />
      <ScrollableContainer>
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </ScrollableContainer>
    </StyledLayout>
  )
}
