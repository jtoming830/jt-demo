import { styled } from 'styled-components'
import { routes } from '../../router'
import { Link, useLocation } from 'react-router-dom'
import { Home, Mail } from '../icons'
import { Button } from '../Button'
import { Socials } from '../Socials'
import { MobileMenu } from './MobileMenu'

const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: var(--bg-color);
  border-radius: 10px;
  box-shadow: var(--shadow);
  position: relative;
  z-index: 1;
`

const Menu = styled.div`
  margin-left: 20px;

  a + a {
    margin-left: 20px;
  }

  @media only screen and (max-width: 499px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  line-height: 70px;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--primary-text-color);
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover,
  &.selected {
    color: var(--brand-color);
  }
`

const LeftContainer = styled.div`
  display: flex;
`

const RightContainer = styled.div`
  display: flex;

  @media only screen and (min-width: 500px) {
    margin-right: 20px;
  }
`

const HomeContainer = styled(Link)`
  background-color: var(--brand-color);
  color: var(--primary-text-color);
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;

  transition: background-color 0.5s ease;
  &:hover {
    background-color: var(--brand-dark-color);
  }
`

const MailContainer = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  margin: auto;
  background: var(--bg-color);
  border-radius: 50%;
  margin-left: 10px;
  margin-right: -10px;

  svg {
    display: block;
    margin: auto;
  }
`

const MailLink = styled.a`
  text-decoration: none;
  margin: auto;

  @media only screen and (max-width: 400px) {
    display: none;
  }
`

const SocialsContainer = styled.div`
  display: flex;
  transition: visibility 0.5s, opacity 0.5s linear;
  @media only screen and (min-width: 500px) and (max-width: 1200px) {
    visibility: hidden;
    opacity: 0;
  }

  @media only screen and (min-width: 500px) and (max-width: 1080px) {
    display: none;
  }
`

export function Header() {
  const location = useLocation()

  const homeRoute = routes.find((route) => route.home)

  return (
    <Container className="fadeIn">
      <LeftContainer>
        <HomeContainer to={homeRoute.fullPath}>
          <Home
            width={15}
            height={15}
          />
        </HomeContainer>
        <Menu>
          {routes.map(({ key, fullPath, label, home }) => {
            const selected = fullPath === location.pathname

            return !home ? (
              <StyledLink
                key={key}
                className={selected ? 'selected' : ''}
                to={selected ? null : fullPath}
              >
                {label}
              </StyledLink>
            ) : null
          })}
        </Menu>
      </LeftContainer>
      <RightContainer>
        <SocialsContainer>
          <Socials />
        </SocialsContainer>
        <MailLink href="mailto:jtoming@gmail.com">
          <Button>
            Mail Me
            <MailContainer>
              <Mail
                width={15}
                height={15}
              />
            </MailContainer>
          </Button>
        </MailLink>
      </RightContainer>
      <MobileMenu />
    </Container>
  )
}
