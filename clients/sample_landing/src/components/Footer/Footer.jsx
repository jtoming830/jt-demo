import { styled } from 'styled-components'
import { BottomFooter, TopFooter } from './components'

const Container = styled.div`
  > div {
    box-sizing: border-box;
    padding: 62px calc(50vw - 550px);

    @media only screen and (max-width: 1200px) {
      padding: 62px 32px;
    }
  }
`

export function Footer() {
  return (
    <Container>
      <TopFooter />
      <BottomFooter />
    </Container>
  )
}
