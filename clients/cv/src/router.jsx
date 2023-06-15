import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components'

const routes = [
  {
    path: '/',
    lazy: () => import('./pages/Page1'),
    label: 'Page 1'
  },
  {
    path: '/moviesrates',
    lazy: () => import('./pages/MoviesRates'),
    label: 'Movies Rates'
  }
]

const independentRoutes = [
  {
    path: 'managelanding',
    lazy: () => import('./pages/ManageLanding'),
    label: 'Landing Sample'
  }
]

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: routes
    },
    ...independentRoutes
  ],
  { basename: '/cv' }
)
export const routeItems = [...routes, ...independentRoutes].map(({ path, label }) => ({ key: path, label }))
