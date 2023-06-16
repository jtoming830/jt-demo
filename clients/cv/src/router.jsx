import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components'
import { DemoGallery, About } from './pages'

const routes = [
  {
    path: '/',
    Component: About,
    label: 'About me'
  },
  {
    path: '/demos',
    Component: DemoGallery,
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
