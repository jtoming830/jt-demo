import { Hero } from 'components'
import createAndShareImg from 'assets/home/desktop/create-and-share.jpg'
import beautifulStoriesImg from 'assets/home/desktop/beautiful-stories.jpg'
import designedForEveryoneImg from 'assets/home/desktop/designed-for-everyone.jpg'

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
        linkTo="#"
        light
        reverse
      />
      <Hero
        title="Designed for everyone"
        text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
        img={{ desktop: designedForEveryoneImg }}
        imgSize={{ width: 830, height: 600 }}
        linkText="View the stories"
        linkTo="#"
        light
      />
    </>
  )
}
