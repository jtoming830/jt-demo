import { styled } from 'styled-components'
import { Logo } from '../../icons'
import { LinkMenu } from '../LinkMenu'
import { useNavigate } from 'react-router-dom'
import { LINKS } from '../../router'
import { LinkButton } from '../LinkButton'

const Container = styled.div`
  height: 200px;
  width: var(--content-width);

  @media only screen and (max-width: 1200px) {
    width: 100vw;
  }

  @media only screen and (max-width: 1000px) {
    height: 120px;
  }

  margin: auto;
  position: relative;

  padding-right: 126px;
  box-sizing: border-box;
`

const Content = styled.div`
  background-color: var(--very-light-grey);

  display: flex;
  align-items: center;
`

const LogoContainer = styled.div`
  width: 200px;
  height: 200px;

  background-color: var(--very-dark-blue);
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 85px;

  @media only screen and (max-width: 1000px) {
    height: 120px;
    width: 120px;

    margin-right: 40px;
  }
`

const StyledLogo = styled(Logo)`
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    height: 24px;
  }
`

const LinkButtonContainer = styled.div`
  position: absolute;
  top: 64px;
  right: 0;

  @media only screen and (max-width: 1000px) {
    top: 24px;
  }
`

export function Footer() {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <LogoContainer>
          <StyledLogo onClick={() => navigate(LINKS.HOME)} />
        </LogoContainer>
        <LinkMenu />
      </Content>
      <LinkButtonContainer>
        <LinkButton to={LINKS.PORTFOLIO}>See Our Portfolio</LinkButton>
      </LinkButtonContainer>
    </Container>
  )
}
