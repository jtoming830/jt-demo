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
      <div>Get Invite</div>
    </Container>
  )
}
