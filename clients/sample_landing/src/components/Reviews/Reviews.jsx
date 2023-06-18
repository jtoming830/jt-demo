import { styled } from 'styled-components'
import { GetStarted } from '../GetStarted'
import { Carousel } from '../Carousel'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 180px;
`

const Title = styled.div`
  height: 58px;
  line-height: 44px;
  font-size: 40px;
  letter-spacing: -0.71px;
  margin-bottom: 64px;
`

const StyledGetStarted = styled(GetStarted)`
  margin-top: 48px;
`

export function Reviews() {
  return (
    <Container>
      <Title>What they’ve said</Title>
      <Carousel />
      <StyledGetStarted />
    </Container>
  )
}
