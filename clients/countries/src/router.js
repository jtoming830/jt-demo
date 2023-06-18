import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components'
import { Countries, Details } from './pages'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '/',
          Component: Countries
        },
        {
          path: '/:name/',
          Component: Details
        }
      ]
    }
  ],
  { basename: '/countries' }
)
