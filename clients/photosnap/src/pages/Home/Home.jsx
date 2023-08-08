import { FeaturesOverview, Gallery, Hero } from 'components'
import { stories } from 'stories'
import { features } from 'features'
import { styled } from 'styled-components'
import { LINKS } from 'router'

import createAndShareDesktopImg from 'assets/home/desktop/create-and-share.jpg'
import beautifulStoriesDesktopImg from 'assets/home/desktop/beautiful-stories.jpg'
import designedForEveryoneDesktopImg from 'assets/home/desktop/designed-for-everyone.jpg'

import createAndShareTabletImg from 'assets/home/tablet/create-and-share.jpg'
import beautifulStoriesTabletImg from 'assets/home/tablet/beautiful-stories.jpg'
import designedForEveryoneTabletImg from 'assets/home/tablet/designed-for-everyone.jpg'

import createAndShareMobileImg from 'assets/home/mobile/create-and-share.jpg'
import beautifulStoriesMobileImg from 'assets/home/mobile/beautiful-stories.jpg'
import designedForEveryoneMobileImg from 'assets/home/mobile/designed-for-everyone.jpg'

const StyledFeaturesOverview = styled(FeaturesOverview)`
  margin: 160px auto;

  @media only screen and (max-width: 1200px) {
    margin: 120px auto;
    width: 340px;
    gap: 80px;
  }
`

export function Home() {
  return (
    <>
      <Hero
        title="Create and share your photo stories"
        text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        img={{ desktop: createAndShareDesktopImg, tablet: createAndShareTabletImg, mobile: createAndShareMobileImg }}
        imgSize={{
          desktop: { width: 830, height: 650 },
          tablet: { width: 273, height: 650 },
          mobile: { width: 375, height: 294 }
        }}
        accent
        linkText="Get an invite"
        linkTo="#"
      />
      <Hero
        title="Beautiful stories every time"
        text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        img={{ desktop: beautifulStoriesDesktopImg, tablet: beautifulStoriesTabletImg, mobile: beautifulStoriesMobileImg }}
        imgSize={{
          desktop: { width: 830, height: 600 },
          tablet: { width: 273, height: 600 },
          mobile: { width: 375, height: 271 }
        }}
        linkText="View the stories"
        linkTo={LINKS.STORIES}
        light
        reverse
      />
      <Hero
        title="Designed for everyone"
        text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
        img={{
          desktop: designedForEveryoneDesktopImg,
          tablet: designedForEveryoneTabletImg,
          mobile: designedForEveryoneMobileImg
        }}
        imgSize={{
          desktop: { width: 830, height: 600 },
          tablet: { width: 273, height: 600 },
          mobile: { width: 375, height: 271 }
        }}
        linkText="View the stories"
        linkTo={LINKS.STORIES}
        light
      />
      <Gallery
        hideDate
        items={stories.slice(0, 4)}
      />
      <StyledFeaturesOverview items={features.slice(0, 3)} />
    </>
  )
}
