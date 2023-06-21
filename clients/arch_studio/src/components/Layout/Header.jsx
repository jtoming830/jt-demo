import styled from 'styled-components'
import { LINKS } from '../../router'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../../icons'
import { LinkMenu } from '../LinkMenu'

const Container = styled.div`
  padding: 56px 0;
  height: 40px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 32px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const StyledLogo = styled(Logo)`
  margin-right: 100px;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    height: 32px;
  }
`

export function Header() {
  const navigate = useNavigate()

  return (
    <Container className="fadeIn">
      <StyledLogo onClick={() => navigate(LINKS.HOME)} />
      <Menu>
        <LinkMenu />
      </Menu>
    </Container>
  )
}
