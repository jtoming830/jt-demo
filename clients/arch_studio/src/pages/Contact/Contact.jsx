import { Hero } from 'components'
import heroImg from 'assets/contact/desktop/image-hero.jpg'
import mapImg from 'assets/contact/desktop/image-map.png'
import { Connect, Details } from './components'
import { styled } from 'styled-components'

const Image = styled.img`
  margin: 200px 0;
`

export function Contact() {
  return (
    <>
      <Hero
        img={heroImg}
        title="Contact"
        subTitle="Tell us about your project"
        text="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      />
      <Details />
      <Image src={mapImg} />
      <Connect />
    </>
  )
}
