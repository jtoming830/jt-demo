import { useState } from 'react'
import styled from 'styled-components'
import moonLight from '../../icons/moon-light.svg'
import moonDark from '../../icons/moon-dark.svg'

const Container = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 80px;

  background-color: var(--bg-color);
  box-shadow: 0px 2px 4px var(--header-shadow-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`

const Title = styled.div`
  line-height: 32px;
  font-size: 24px;
`

const ThemeSwitcher = styled.span`
  line-height: 22px;
  background: url(${(props) => (props.$isLight ? moonLight : moonDark)}) no-repeat;
  background-size: contain;
  padding-left: 24px;

  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`

const THEME = {
  LIGHT: 'Light Mode',
  DARK: 'Dark Mode'
}

const ATTRIBUTE = 'themedark'

export function Header() {
  const [theme, setTheme] = useState(THEME.LIGHT)
  const isLight = theme === THEME.LIGHT

  const toggleTheme = () => {
    setTheme(isLight ? THEME.DARK : THEME.LIGHT)
    isLight ? document.body.setAttribute(ATTRIBUTE, true) : document.body.removeAttribute(ATTRIBUTE)
  }

  return (
    <Container>
      <Title>Where in the world?</Title>
      <ThemeSwitcher
        $isLight={isLight}
        onClick={toggleTheme}
      >
        {theme}
      </ThemeSwitcher>
    </Container>
  )
}
