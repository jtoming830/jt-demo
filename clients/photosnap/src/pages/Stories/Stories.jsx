import { Gallery } from 'components'
import { stories } from 'stories'
import { Hero } from './components'

export function Stories() {
  return (
    <>
      <Hero />
      <Gallery items={stories} />
    </>
  )
}
