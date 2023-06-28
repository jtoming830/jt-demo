import { FeaturesOverview, Gallery, Hero } from 'components'
import createAndShareImg from 'assets/home/desktop/create-and-share.jpg'
import beautifulStoriesImg from 'assets/home/desktop/beautiful-stories.jpg'
import designedForEveryoneImg from 'assets/home/desktop/designed-for-everyone.jpg'
import { stories } from 'stories'
import { features } from 'features'
import { styled } from 'styled-components'
import { LINKS } from 'router'

const StyledFeaturesOverview = styled(FeaturesOverview)`
  margin: 160px auto;
`

export function Home() {
  return (
    <>
      <Hero
        title="Create and share your photo stories"
        text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        img={{ desktop: createAndShareImg }}
        imgSize={{ width: 830, height: 650 }}
        accent
        linkText="Get an invite"
        linkTo="#"
      />
      <Hero
        title="Beautiful stories every time"
        text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        img={{ desktop: beautifulStoriesImg }}
        imgSize={{ width: 830, height: 600 }}
        linkText="View the stories"
        linkTo={LINKS.STORIES}
        light
        reverse
      />
      <Hero
        title="Designed for everyone"
        text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
        img={{ desktop: designedForEveryoneImg }}
        imgSize={{ width: 830, height: 600 }}
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
