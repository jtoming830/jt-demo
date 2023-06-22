import { styled } from 'styled-components'
import { menuRoutes } from '../../router'
import { Link } from '../Link'
import { useLocation } from 'react-router-dom'

const MenuItem = styled(Link)`
  color: var(--menu-item-color);
  font-weight: 700;
  line-height: 25px;
  position: relative;

  & + & {
    margin-left: 60px;
  }

  transition: 0.5s ease;
  &.active,
  &:hover {
    color: var(--active-menu-item-color);
  }
`

const Underline = styled.span`
  width: 24px;
  height: 1px;
  position: absolute;
  background-color: var(--text-color);
  bottom: 0;
  display: flex;
  left: 20px;

  opacity: 0;
  transition: 0.5s ease;
  .active & {
    opacity: 1;
  }
`

export function LinkMenu() {
  const location = useLocation()

  return (
    <>
      {menuRoutes.map(({ label, path, key }, index) => (
        <MenuItem
          className={path === location.pathname ? `active child-${index}` : `child-${index}`}
          key={key}
          to={path}
        >
          {label}
          <Underline />
        </MenuItem>
      ))}
    </>
  )
}
