import { Hero } from '../../components'
import heroImg from '../../assets/about/desktop/image-hero.jpg'
import { Heritage, Leaders } from './components'

export function About() {
  return (
    <>
      <Hero
        img={heroImg}
        title="About"
        subTitle="Your team of professionals"
        text="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
      />
      <Heritage />
      <Leaders />
    </>
  )
}
