import { styled } from 'styled-components'
import linkedinImg from '../../images/linkedin.png'
import githubImg from '../../images/github.png'
import tgImg from '../../images/telegram.png'
import { routes } from '../../router'
import { Link, useLocation } from 'react-router-dom'
import { Home, Mail } from '../icons'
import { Button } from '../Button'

const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  background: white;
  border-radius: 10px;
  box-shadow: var(--shadow);
`

const Menu = styled.div`
  margin-left: 20px;

  a + a {
    margin-left: 20px;
  }
`

const StyledLink = styled(Link)`
  line-height: 70px;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover,
  &.selected {
    color: var(--brand-color);
  }
`

const Socials = styled.div`
  margin: auto 10px auto 0;
  display: flex;
`

const SocialLink = styled.a`
  display: block;
  height: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  & + & {
    margin-left: 10px;
  }
`

const LeftContainer = styled.div`
  display: flex;
`

const RightContainer = styled.div`
  display: flex;
  margin-right: 20px;
`

const HomeContainer = styled(Link)`
  background-color: var(--brand-color);
  color: black;
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;

  transition: background-color 0.5s ease;

  &:hover {
    background-color: var(--brand-color-2);
  }
`

const MailContainer = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  margin: auto;
  background: white;
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
`

const socials = [
  {
    link: 'https://jtoming830.t.me/',
    img: tgImg
  },
  {
    link: 'https://github.com/jtoming830/jt-demo',
    img: githubImg
  },
  {
    link: 'https://www.linkedin.com/in/jtoming',
    img: linkedinImg
  }
]

export function Header() {
  const location = useLocation()

  const homeRoute = routes.find((route) => route.home)

  return (
    <Container className="fadeIn">
      <LeftContainer>
        <HomeContainer to={homeRoute.path}>
          <Home
            width={15}
            height={15}
          />
        </HomeContainer>
        <Menu>
          {routes.map(({ key, path, label, home }) => {
            const selected = path === location.pathname

            return !home ? (
              <StyledLink
                key={key}
                className={selected ? 'selected' : ''}
                to={selected ? null : path}
              >
                {label}
              </StyledLink>
            ) : null
          })}
        </Menu>
      </LeftContainer>
      <RightContainer>
        <Socials>
          {socials.map(({ link, img }) => (
            <SocialLink
              target="_blank"
              href={link}
              key={link}
            >
              <img
                height={20}
                src={img}
              />
            </SocialLink>
          ))}
        </Socials>
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
    </Container>
  )
}
