import styled from 'styled-components'
import { LINKS } from '../../router'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../../icons'
import { LinkMenu } from '../LinkMenu'

const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 56px;
  height: 40px;
  display: flex;
  align-items: center;
`

const StyledLogo = styled(Logo)`
  margin-right: 100px;
  cursor: pointer;
`

export function Header() {
  const navigate = useNavigate()

  return (
    <Container className="fadeIn">
      <StyledLogo onClick={() => navigate(LINKS.HOME)} />
      <LinkMenu />
    </Container>
  )
}
