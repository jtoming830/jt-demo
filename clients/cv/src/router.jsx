import { About, Resume, Portfolio, Contacts } from './pages'

export const routes = [
  {
    path: '/cv/',
    Component: About,
    home: true,
    key: 'root'
  },
  {
    path: '/cv/resume',
    Component: Resume,
    label: 'Resume',
    key: 'resume'
  },
  {
    path: '/cv/portfolio',
    Component: Portfolio,
    label: 'Portfolio',
    key: 'portfolio'
  },
  {
    path: '/cv/contacts',
    Component: Contacts,
    label: 'Contacts',
    key: 'contacts'
  }
]
