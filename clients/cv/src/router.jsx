import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components'

const routes = [
  {
    path: '/',
    lazy: () => import('./pages/About'),
    label: 'About me'
  },
  {
    path: '/demos',
    lazy: () => import('./pages/DemoGallery'),
    label: 'Demo Gallery'
  }
]

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: routes
    }
  ],
  { basename: '/cv' }
)
export const routeItems = routes.map(({ path, label }) => ({ key: path, label }))
