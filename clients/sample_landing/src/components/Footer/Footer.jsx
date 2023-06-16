import { styled } from 'styled-components'
import { IconFacebook, IconInstagram, IconPinterest, IconTwitter, IconYoutube, Logo } from '../../icons'

const Container = styled.div`
  height: 128px;
  padding: 62px calc(50vw - 550px);
  background-color: var(--footer-bg);

  display: flex;
  justify-content: space-between;
`

const StyledLogo = styled(Logo)`
  color: var(--logo-light-color);
`

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const IconsContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;

  svg {
    color: var(--footer-text-color);
    cursor: pointer;

    &:hover {
      color: var(--footer-text-hovered-color);
    }
  }
`

const Menu = styled.div`
  display: flex;

  > div + div {
    margin-left: 30px;
  }
`

const MenuColumn = styled.div`
  width: 255px;
`

const Item = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  width: fit-content;

  color: var(--footer-text-color);
  cursor: pointer;

  &:hover {
    color: var(--footer-text-hovered-color);
  }
`

export function Footer() {
  return (
    <Container>
      <SocialsContainer>
        <StyledLogo />
        <IconsContainer>
          <IconFacebook />
          <IconYoutube />
          <IconTwitter />
          <IconPinterest />
          <IconInstagram />
        </IconsContainer>
      </SocialsContainer>
      <Menu>
        <MenuColumn>
          <Item>Home</Item>
          <Item>Pricing</Item>
          <Item>Products</Item>
          <Item>About Us</Item>
        </MenuColumn>
        <MenuColumn>
          <Item>Careers</Item>
          <Item>Community</Item>
          <Item>Privacy Policy</Item>
        </MenuColumn>
      </Menu>
    </Container>
  )
}
