import { styled } from 'styled-components'
import { Logo } from '../../../icons'
import { Icons } from './Icons'
import { Menu } from './Menu'
import { Copyright } from './Copyright'
import { Email } from './Email'

const Container = styled.div`
  height: 250px;
  background-color: var(--footer-bg);

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const MobileContainer = styled.div`
  background-color: var(--footer-bg);

  display: none;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 800px) {
    display: flex;
  }

  @media only screen and (max-width: 600px) {
    padding: 50px 24px 32px !important;
  }
`

const StyledLogo = styled(Logo)`
  color: var(--logo-light-color);
`

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export function BottomFooter() {
  return (
    <>
      <Container>
        <SocialsContainer>
          <StyledLogo />
          <Icons />
        </SocialsContainer>
        <Menu />
        <RightContainer>
          <Email />
          <Copyright />
        </RightContainer>
      </Container>
      <MobileContainer>
        <Email />
        <Menu />
        <Icons />
        <StyledLogo />
        <Copyright />
      </MobileContainer>
    </>
  )
}
