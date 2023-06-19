import styled from 'styled-components'
import { Header } from './Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import { routes } from '../../router'
import { useEffect, useState } from 'react'
import { Footer } from './Footer'

const Container = styled.div`
  display: flex;
`

const LeftContainer = styled.div`
  width: 165px;
`

const Line = styled.div`
  padding-left: 77px;
  border-right: 1px solid var(--light-grey);
  width: 1px;
  height: 104px;
`

const LocationLabel = styled.div`
  transform: rotate(90deg);
  margin-top: 128px;
  font-size: 18px;
  letter-spacing: 18px;
  text-transform: uppercase;
  color: var(--light-grey);
  margin-left: -12px;
  white-space: nowrap;
`

const RightContainer = styled.div`
  width: 1110px;
`

const Content = styled.div``

const parsePath = (str) => str.split('/').filter(Boolean).join('/')

export function Layout() {
  const location = useLocation()

  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut')
    }
  }, [location, displayLocation])

  const { label: locationLabel } = routes.find(({ path }) => parsePath(path) === parsePath(displayLocation.pathname)) || {}

  return (
    <Container>
      <LeftContainer>
        <Line />
        <LocationLabel className={transitionStage}>{locationLabel}</LocationLabel>
      </LeftContainer>
      <RightContainer>
        <Header />
        <Content
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === 'fadeOut') {
              setTransitionStage('fadeIn')
              setDisplayLocation(location)
            }
          }}
        >
          <Routes location={displayLocation}>
            {routes.map((props) => (
              <Route
                key={props.key}
                {...props}
              />
            ))}
          </Routes>
        </Content>
        <Footer />
      </RightContainer>
    </Container>
  )
}
