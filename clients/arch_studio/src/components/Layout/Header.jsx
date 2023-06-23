import styled from 'styled-components'
import { LINKS } from '../../router'
import { useNavigate } from 'react-router-dom'
import { IconClose, IconHamburger, Logo } from '../../icons'
import { LinkMenu } from '../LinkMenu'
import { useEffect, useState } from 'react'

const Container = styled.div`
  padding: 56px 0;
  height: 40px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 32px;
    justify-content: space-between;
  }

  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--white);
`

const Menu = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const StyledLogo = styled(Logo)`
  margin-right: 100px;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    height: 32px;
  }
`

const MobileIcon = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

const MobileMenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: -webkit-fill-available;
  background: var(--image-darken-color);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s ease;

  z-index: 1;

  &.visible {
    visibility: visible;
    opacity: 1;
  }
`

const MobileMenu = styled.div`
  background: var(--very-light-grey);
  padding: 44px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > a {
    margin-left: 44px !important;
    font-size: 32px;
    line-height: 40px;
    color: var(--text-color);
    transform: translate(100vw, 0);

    .visible & {
      animation: 1s slide-in forwards;

      &.child-0 {
        animation-delay: 0s;
      }

      &.child-1 {
        animation-delay: 0.25s;
      }

      &.child-2 {
        animation-delay: 0.5s;
      }
    }
  }
`

export function Header() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  const MenuIcon = visible ? IconClose : IconHamburger

  useEffect(() => {
    document.body.className = visible ? 'prevent-scroll' : ''
  }, [visible])

  return (
    <>
      <Container
        className="fadeIn"
        onClick={() => setVisible(!visible)}
      >
        <StyledLogo
          onClick={(e) => {
            e.stopPropagation()
            setVisible(false)
            navigate(LINKS.HOME)
          }}
        />
        <Menu>
          <LinkMenu />
        </Menu>
        <MobileIcon>
          <MenuIcon />
        </MobileIcon>
      </Container>
      <MobileMenuContainer
        className={visible ? 'visible' : ''}
        onClick={() => setVisible(false)}
      >
        <MobileMenu>
          <LinkMenu />
        </MobileMenu>
      </MobileMenuContainer>
    </>
  )
}
