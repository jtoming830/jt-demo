import { Home, Stories, Features, Pricing } from 'pages'

export const LINKS = {
  HOME: '/photosnap',
  STORIES: '/photosnap/stories',
  FEATURES: '/photosnap/features',
  PRICING: '/photosnap/pricing'
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
    path: LINKS.STORIES,
    Component: Stories,
    label: 'Stories',
    key: 'stories'
  },
  {
    path: LINKS.FEATURES,
    Component: Features,
    label: 'Features',
    key: 'features'
  },
  {
    path: LINKS.PRICING,
    Component: Pricing,
    label: 'Pricing',
    key: 'pricing'
  }
]

export const routes = [homeRoute, ...menuRoutes]
