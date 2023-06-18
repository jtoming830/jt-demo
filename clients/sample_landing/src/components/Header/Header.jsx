import { Logo } from '../../icons'
import styled from 'styled-components'
import { GetStarted } from '../GetStarted'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`

const StyledLogo = styled(Logo)`
  color: var(--logo-dark-color);
  margin-top: 15px;
`

const Menu = styled.div`
  align-self: center;

  span + span {
    margin-left: 32px;
  }
`

const Item = styled.span`
  font-size: 13px;
  color: var(--menu-item-color);

  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: var(--menu-item-hovered-color);
  }
`

export function Header() {
  return (
    <Container>
      <StyledLogo />
      <Menu>
        <Item>Pricing</Item>
        <Item>Product</Item>
        <Item>About Us</Item>
        <Item>Careers</Item>
        <Item>Community</Item>
      </Menu>
      <GetStarted />
    </Container>
  )
}
