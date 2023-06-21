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
  width: calc((100vw - var(--content-width)) / 2);

  transition: 0.5s ease;
  @media only screen and (max-width: 780px) {
    opacity: 0;
  }
`

const Line = styled.div`
  margin: auto;
  border-right: 1px solid var(--light-grey);
  width: 1px;
  height: 104px;
`

const LocationLabelContainer = styled.div`
  position: relative;
  margin: auto;
  width: 1px;
`

const LocationLabel = styled.div`
  transform: rotate(90deg);
  letter-spacing: 18px;
  text-transform: uppercase;
  color: var(--light-grey);
  white-space: nowrap;
  position: absolute;
  left: 0;
  right: 0;
  top: 36px;
`

const RightContainer = styled.div`
  width: var(--content-width);
`

const Content = styled.div`
  margin-bottom: 160px;
`

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [displayLocation])

  const { label: locationLabel } = routes.find(({ path }) => parsePath(path) === parsePath(displayLocation.pathname)) || {}

  return (
    <>
      <Container>
        <LeftContainer>
          <Line />
          <LocationLabelContainer>
            <LocationLabel className={transitionStage}>{locationLabel}</LocationLabel>
          </LocationLabelContainer>
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
        </RightContainer>
      </Container>
      <Footer />
    </>
  )
}
