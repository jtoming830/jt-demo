import { styled } from 'styled-components'
import { GetStarted } from '../../GetStarted'

const Container = styled.div`
  height: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--brand-color);

  @media only screen and (max-width: 800px) {
    height: unset;
    flex-direction: column;
    gap: 60px;
  }

  @media only screen and (max-width: 600px) {
    padding: 90px 32px !important;
  }
`

const SimplifyText = styled.div`
  height: 96px;
  line-height: 44px;
  width: 445px;
  letter-spacing: -0.7px;
  font-size: 40px;
  color: var(--footer-text-color);

  @media only screen and (max-width: 600px) {
    height: unset;
    width: unset;
    text-align: center;
  }
`

export function TopFooter() {
  return (
    <Container>
      <SimplifyText>Simplify how your team works today.</SimplifyText>
      <GetStarted className="invert" />
    </Container>
  )
}
