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

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: routes
  }
])
export const routeItems = routes.map(({ path, label }) => ({ key: path, label }))
