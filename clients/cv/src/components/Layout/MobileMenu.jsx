import { styled } from 'styled-components'
import { Menu as MenuIcon } from '../icons'
import { useEffect, useState } from 'react'
import { routes } from '../../router'
import { Link, useLocation } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  background: var(--brand-color);
  border-radius: 0 10px 10px 0;

  @media only screen and (min-width: 500px) {
    display: none;
  }

  transition: background-color 0.5s ease;
  &:hover {
    background-color: var(--brand-dark-color);
  }
`

const Dropdown = styled.div`
  position: absolute;
  width: calc(100vw - 20px);
  border-radius: 10px 10px 0 0;
  background-color: var(--popup-bg-color);
  margin-top: 80px;
`

const StyledLink = styled(Link)`
  display: block;
  height: 60px;
  border-bottom: 1px solid var(--border-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.$selected ? 'var(--brand-color)' : 'var(--primary-text-color)')};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`

export function MobileMenu() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.onclick = () => {
      setVisible(false)
    }
  }, [])

  const onClick = (e) => {
    e.stopPropagation()
    setVisible(!visible)
  }

  const dropdownClassName = ['expandable', visible && 'expand'].filter(Boolean).join(' ')

  return (
    <>
      <Container onClick={onClick}>
        <MenuIcon
          width={20}
          height={20}
        />
      </Container>
      <Dropdown className={dropdownClassName}>
        {routes.map(({ fullPath, home, key, label }) => {
          const selected = fullPath === location.pathname
          return home ? null : (
            <StyledLink
              onClick={onClick}
              key={key}
              to={fullPath}
              $selected={selected}
            >
              {label}
            </StyledLink>
          )
        })}
      </Dropdown>
    </>
  )
}
