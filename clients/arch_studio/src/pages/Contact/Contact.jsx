import { Hero } from 'components'
import { Connect, Details } from './components'
import { styled } from 'styled-components'

import mapImgDesktop from 'assets/contact/desktop/image-map.png'
import mapImgTablet from 'assets/contact/tablet/image-map.png'
import mapImgMobile from 'assets/contact/mobile/image-map.png'

import desktopHero from 'assets/contact/desktop/image-hero.jpg'
import tabletHero from 'assets/contact/tablet/image-hero.jpg'
import mobileHero from 'assets/contact/mobile/image-hero.jpg'

const Image = styled.img`
  margin: 200px 0;
  width: 100%;

  content: url(${mapImgDesktop});

  @media only screen and (max-width: 1200px) {
    content: url(${mapImgTablet});
  }

  @media only screen and (max-width: 600px) {
    margin: 70px 0;
    content: url(${mapImgMobile});
    height: calc(367 / 375 * (var(--content-width)));
  }
`

export function Contact() {
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
        title="Contact"
        subTitle="Tell us about your project"
        text="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      />
      <Details />
      <Image />
      <Connect />
    </>
  )
}
