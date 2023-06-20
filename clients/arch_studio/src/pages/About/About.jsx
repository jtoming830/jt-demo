import { Hero } from '../../components'
import { Heritage, Leaders } from './components'
import desktopHero from 'assets/about/desktop/image-hero.jpg'
import tabletHero from 'assets/about/tablet/image-hero.jpg'
import mobileHero from 'assets/about/mobile/image-hero.jpg'

export function About() {
  return (
    <>
      <Hero
        getImageUrl={(type) =>
          ({
            desktop: desktopHero,
            tablet: tabletHero,
            mobile: mobileHero
          }[type])
        }
        title="About"
        subTitle="Your team of professionals"
        text="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
      />
      <Heritage />
      <Leaders />
    </>
  )
}
