import { Logo } from '../../icons'
import styled from 'styled-components'
import { GetStarted } from '../GetStarted'
import { DropdownMenu } from './DropdownMenu'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 800px) {
    margin: 0;
  }
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

  @media only screen and (max-width: 800px) {
    display: none;
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

const StyledGetStarted = styled(GetStarted)`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const items = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']

export function Header() {
  return (
    <Container>
      <StyledLogo />
      <Menu>
        {items.map((text) => (
          <Item key={text}>{text}</Item>
        ))}
      </Menu>
      <StyledGetStarted />
      <DropdownMenu items={items} />
    </Container>
  )
}
