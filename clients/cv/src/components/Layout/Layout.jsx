import styled from 'styled-components'
import { Header } from './Header'
import { MainInfo } from './MainInfo'
import { Route, Routes, useLocation } from 'react-router-dom'
import { routes } from '../../router'
import { useEffect, useState } from 'react'

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 60px 0;
  width: fit-content;
  gap: 30px;
`

const RightContainer = styled.div`
  width: 800px;
  flex-grow: 1;
`

const Content = styled.div`
  margin-top: 10px;
  padding: 45px;
  border-radius: 10px;
  background: white;
  box-shadow: var(--shadow);
`

export function Layout() {
  const location = useLocation()

  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransistionStage('fadeOut')
    }
  }, [location, displayLocation])

  return (
    <Container>
      <MainInfo />
      <RightContainer>
        <Header />
        <Content
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === 'fadeOut') {
              setTransistionStage('fadeIn')
              setDisplayLocation(location)
            }
          }}
        >
          <Routes location={displayLocation}>
            {routes.map((props) => (
              <Route {...props} />
            ))}
          </Routes>
        </Content>
      </RightContainer>
    </Container>
  )
}
