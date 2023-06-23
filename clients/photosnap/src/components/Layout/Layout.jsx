import styled from 'styled-components'
import { Route, Routes, useLocation } from 'react-router-dom'
import { routes } from 'router'
import { useEffect, useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()

  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('page-enter')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('page-leave')
    }
  }, [location, displayLocation])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [displayLocation])

  return (
    <>
      <Header />
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === 'page-leave') {
            setTransitionStage('page-enter')
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
      </div>
      <Footer />
    </>
  )
}
