import { About, Resume, Portfolio, Contacts, CV, Root } from './pages'

export const routes = [
  {
    path: '/',
    Component: About,
    home: true,
    key: 'home'
  },
  {
    path: '/resume',
    Component: Resume,
    label: 'Resume',
    key: 'resume'
  },
  {
    path: '/portfolio',
    Component: Portfolio,
    label: 'Portfolio',
    key: 'portfolio'
  },
  {
    path: '/contacts',
    Component: Contacts,
    label: 'Contacts',
    key: 'contacts'
  }
].map((route) => ({
  ...route,
  fullPath: `/cv${route.path}`
}))

export const hiddenRoutes = [
  {
    path: '/cv/fullview',
    Component: CV,
    label: 'CV',
    key: 'CV'
  },
  {
    path: '/cv/*',
    Component: Root,
    label: 'Root',
    key: 'root'
  }
]
