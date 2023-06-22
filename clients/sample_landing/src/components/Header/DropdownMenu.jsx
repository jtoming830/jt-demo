import { styled } from 'styled-components'
import { IconClose, IconHamburger } from '../../icons'
import { useEffect, useState } from 'react'

const Container = styled.div`
  display: none;

  @media only screen and (max-width: 800px) {
    display: block;
  }
`

const MenuContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`

const Menu = styled.div`
  border-radius: 4px;

  background: var(--dropdown-menu-bg-color);
  box-shadow: 0 10px 20px 0 var(--dropdown-menu-shadow-color);

  margin: 124px 24px;
  width: calc(100vw - 48px);
  height: 214px;

  text-align: center;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Item = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.29px;
  color: var(--primary-text-color);

  &:hover {
    text-decoration: underline;
  }
`

export function DropdownMenu({ items }) {
  const [visible, setVisible] = useState()
  const menuClassName = ['expandable', visible && 'expand'].filter(Boolean).join(' ')
  const IconComponent = visible ? IconClose : IconHamburger
  const [menuContainerClass, setMenuContainerClass] = useState('')

  const toggleVisible = () => {
    const newVisible = !visible

    setVisible(newVisible)
    setMenuContainerClass(newVisible ? 'darken' : 'no-darken')
  }

  useEffect(() => {
    document.body.className = visible ? 'prevent-scroll' : ''
  }, [visible])

  return (
    <Container>
      <IconComponent onClick={toggleVisible} />
      <MenuContainer
        onClick={toggleVisible}
        className={menuContainerClass}
      >
        <Menu className={menuClassName}>
          {items.map((text) => (
            <Item key={text}>{text}</Item>
          ))}
        </Menu>
      </MenuContainer>
    </Container>
  )
}
