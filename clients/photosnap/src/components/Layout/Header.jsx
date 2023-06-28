import { Button } from '../Button'
import { Logo } from 'icons'
import { Link } from 'react-router-dom'
import { LINKS, menuRoutes } from 'router'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  height: 72px;
  margin: auto;
`

const Menu = styled.div`
  display: flex;
  gap: 35px;

  > a {
    transition: 0.5s ease;
    &:hover {
      opacity: 0.3;
    }
  }
`

export function Header() {
  return (
    <Container>
      <Link to={LINKS.HOME}>
        <Logo />
      </Link>
      <Menu>
        {menuRoutes.map(({ path, label, key }) => (
          <Link
            to={path}
            key={key}
          >
            {label}
          </Link>
        ))}
      </Menu>
      <Button>Get an invite</Button>
    </Container>
  )
}
