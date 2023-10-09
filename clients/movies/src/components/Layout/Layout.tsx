import { Layout as AntdLayout } from 'antd'
import { styled } from 'styled-components'
import { Header } from './Header'
import { Footer } from './Footer'
import { ReactNode } from 'react'

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

// eslint-disable-next-line @typescript-eslint/ban-types
// type ReactFragment = {}
// type ReactNode = ReactElement | string | number | ReactPortal | boolean | null | undefined | ReactFragment

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Header />
      <ScrollableContainer>
        <Content>{children}</Content>
        <Footer />
      </ScrollableContainer>
    </StyledLayout>
  )
}
