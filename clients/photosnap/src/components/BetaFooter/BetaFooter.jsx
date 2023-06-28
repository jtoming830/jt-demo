import img from 'assets/shared/desktop/bg-beta.jpg'
import { Accent } from '../Accent'
import { styled } from 'styled-components'
import { LinkButton } from '../LinkButton'

const Container = styled.div`
  width: 100vw;
  height: calc(280 / 1440 * 100vw);

  background: url(${img}) no-repeat;
  background-size: contain;

  display: flex;
`

const Content = styled.div`
  width: 1100px;
  margin: 68px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  width: 400px;
  color: var(--white);
`

const StyledLinkButton = styled(LinkButton)`
  height: fit-content;
`

export function BetaFooter() {
  return (
    <Container>
      <Accent vertical />
      <Content>
        <Title>We’re in beta. Get your invite today!</Title>
        <StyledLinkButton light>Get an invite</StyledLinkButton>
      </Content>
    </Container>
  )
}
