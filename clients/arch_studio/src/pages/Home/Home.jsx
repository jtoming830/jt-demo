import { About, Carousel, Featured, Welcome } from './components'

export function Home() {
  return (
    <>
      <Carousel />
      <Welcome />
      <About />
      <Featured />
    </>
  )
}
