import { About, Portfolio, Home, Contact } from 'pages'

export const LINKS = {
  HOME: '/arch_studio',
  PORTFOLIO: '/arch_studio/portfolio',
  ABOUT: '/arch_studio/about',
  CONTACT: '/arch_studio/contact'
}

export const homeRoute = {
  path: LINKS.HOME,
  Component: Home,
  label: 'Home',
  key: 'home',
  home: true
}

export const menuRoutes = [
  {
    path: LINKS.PORTFOLIO,
    Component: Portfolio,
    label: 'Portfolio',
    key: 'portfolio'
  },
  {
    path: LINKS.ABOUT,
    Component: About,
    label: 'About Us',
    key: 'resume'
  },
  {
    path: LINKS.CONTACT,
    Component: Contact,
    label: 'Contact',
    key: 'contacts'
  }
]

export const routes = [homeRoute, ...menuRoutes]
