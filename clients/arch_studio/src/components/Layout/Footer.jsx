import { styled } from 'styled-components'
import { Logo } from '../../icons'
import { LinkMenu } from '../LinkMenu'
import { useNavigate } from 'react-router-dom'
import { LINKS } from '../../router'
import { LinkButton } from '../LinkButton'

const Container = styled.div`
  height: 200px;
  width: 984px;

  background-color: var(--very-light-grey);

  position: relative;

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
`

const StyledLogo = styled(Logo)`
  cursor: pointer;
`

const LinkButtonContainer = styled.div`
  position: absolute;
  right: -126px;
`

export function Footer() {
  const navigate = useNavigate()

  return (
    <Container>
      <LogoContainer>
        <StyledLogo onClick={() => navigate(LINKS.HOME)} />
      </LogoContainer>
      <LinkMenu />
      <LinkButtonContainer>
        <LinkButton to={LINKS.PORTFOLIO}>See Our Portfolio</LinkButton>
      </LinkButtonContainer>
    </Container>
  )
}
