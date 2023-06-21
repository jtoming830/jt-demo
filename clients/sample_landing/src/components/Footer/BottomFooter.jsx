import { styled } from 'styled-components'
import { IconFacebook, IconInstagram, IconPinterest, IconTwitter, IconYoutube, Logo } from '../../icons'
import { Button } from '../Button'
import { EmailInput } from '../EmailInput'

const Container = styled.div`
  height: 250px;
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

    transition: 0.3s ease;
    &:hover {
      color: var(--footer-text-hovered-color);
    }
  }
`

const Menu = styled.div`
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 1200px) {
    gap: 100px;
  }

  @media only screen and (max-width: 900px) {
    gap: 40px;
  }
`

const MenuColumn = styled.div`
  width: 255px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (max-width: 1200px) {
    width: 100px;
  }
`

const Item = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  width: fit-content;

  color: var(--footer-text-color);
  cursor: pointer;

  transition: 0.3s ease;
  &:hover {
    color: var(--footer-text-hovered-color);
  }
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const EmailContainer = styled.div`
  display: flex;
  gap: 8px;
`

const StyledButton = styled(Button)`
  box-shadow: none;
`

const Copyright = styled.div`
  text-align: end;
  color: var(--copyright-text-color);
  letter-spacing: -0.2px;
  font-size: 13px;
  line-height: 19px;
`

export function BottomFooter() {
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
      <RightContainer>
        <EmailContainer>
          <EmailInput />
          <StyledButton>Go</StyledButton>
        </EmailContainer>
        <Copyright>Copyright 2020. All Rights Reserved</Copyright>
      </RightContainer>
    </Container>
  )
}
