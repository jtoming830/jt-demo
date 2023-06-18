import { styled } from 'styled-components'
import { BottomFooter } from './BottomFooter'
import { TopFooter } from './TopFooter'

const Container = styled.div`
  > div {
    box-sizing: border-box;
    padding: 62px calc(50vw - 550px);
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
