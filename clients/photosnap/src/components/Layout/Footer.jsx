import { LinkButton } from 'components/LinkButton'
import { Facebook, Instagram, Logo, Pinterest, Twitter, Youtube } from 'icons'
import { Link } from 'react-router-dom'
import { LINKS, routes } from 'router'
import { styled } from 'styled-components'

const Container = styled.div`
  height: 250px;
  width: 100vw;

  background: var(--black);
  color: var(--white);
`

const Content = styled.div`
  padding: 64px 0;
  margin: auto;
  width: 1100px;

  display: flex;
  gap: 100px;

  height: -webkit-fill-available;
`

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  color: var(--white);
`

const Socials = styled.div`
  display: flex;
  gap: 15px;

  > * {
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`

const Menu = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const MenuLink = styled(Link)`
  color: var(--white);
  line-height: 16px;

  transition: 0.5s ease;
  &:hover {
    opacity: 0.3;
  }
`

const RightContainer = styled(SideContainer)`
  align-items: end;
`

const Copyright = styled.div`
  opacity: 0.5;
`

export function Footer() {
  return (
    <Container>
      <Content>
        <SideContainer>
          <StyledLink to={LINKS.HOME}>
            <Logo />
          </StyledLink>
          <Socials>
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </Socials>
        </SideContainer>
        <Menu>
          {routes.map(({ path, label, key }) => (
            <MenuLink
              key={key}
              to={path}
            >
              {label}
            </MenuLink>
          ))}
        </Menu>
        <RightContainer>
          <LinkButton light>Get an invite</LinkButton>
          <Copyright>Copyright 2019. All Rights Reserved</Copyright>
        </RightContainer>
      </Content>
    </Container>
  )
}
