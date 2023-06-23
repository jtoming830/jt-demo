import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'components'
import { Context } from './context'
import { useMemo } from 'react'

function App() {
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          entries.map((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-viewport')
            }
          })
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
          trackVisibility: true,
          delay: 100
        }
      ),
    []
  )

  return (
    <Context.Provider value={{ observer }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
