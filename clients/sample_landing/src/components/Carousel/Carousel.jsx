import { styled } from 'styled-components'
import { items } from './items'
import { useEffect, useRef, useState } from 'react'

const ScrollableContainer = styled.div`
  width: 100vw;
  overflow: scroll;

  @media only screen and (max-width: 600px) {
    overflow: hidden;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
`

const Container = styled.div`
  display: flex;
  width: fit-content;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    gap: 0;
  }
`

const CardContainer = styled.div`
  height: 256px;

  @media only screen and (max-width: 600px) {
    height: fit-content;
  }
`

const Card = styled.div`
  margin-top: 36px;
  width: 540px;
  height: 220px;
  background-color: var(--card-bg);
  box-sizing: border-box;
  padding: 60px 40px 40px 40px;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: fit-content;
  }
`

const Image = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
`

const Title = styled.div`
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  color: var(--primary-text-color);
`

const Text = styled.div`
  margin: auto;
  text-align: center;
  color: var(--secondary-text-color);
`

const Controls = styled.div`
  margin: auto;
  * + * {
    margin-left: 4px;
  }

  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

const ControlsButton = styled.div`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 2px solid var(--brand-color);
  transition: 0.5s ease;

  &.active {
    background: var(--brand-color);
  }
`

export function Carousel(props) {
  const scrollableContainerRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState()

  const scrollToIndex = (index) => {
    const bodyWidth = document.body.offsetWidth
    scrollableContainerRef.current.scrollLeft = index * bodyWidth
    setCurrentIndex(index)
  }

  useEffect(() => {
    const scrollableContainerElement = scrollableContainerRef.current
    const { offsetWidth, scrollWidth } = scrollableContainerElement

    if (offsetWidth > 600) {
      scrollableContainerElement.scrollLeft = (scrollWidth - offsetWidth) / 2
    }
  }, [])

  return (
    <>
      <ScrollableContainer
        ref={scrollableContainerRef}
        onTouchStart={(e) => setTouchStart(e.changedTouches[0].screenX)}
        onTouchEnd={(e) => {
          const touchEnd = e.changedTouches[0].screenX
          let newCurrentIndex = currentIndex
          const { offsetWidth } = scrollableContainerRef.current

          if (offsetWidth > 600) {
            return
          }

          if (touchEnd < touchStart && currentIndex !== items.length - 1) {
            newCurrentIndex++
          } else if (touchEnd > touchStart && currentIndex !== 0) {
            newCurrentIndex--
          }

          scrollToIndex(newCurrentIndex)
        }}
        onTouchCancel={() => setTouchStart(null)}
      >
        <Container {...props}>
          {items.map(({ img, title, text }, index) => (
            <CardContainer
              key={title}
              id={`slide-${index}`}
            >
              <Card>
                <Image src={img} />
                <Title>{title}</Title>
                <Text>{text}</Text>
              </Card>
            </CardContainer>
          ))}
        </Container>
      </ScrollableContainer>
      <Controls>
        {items.map((_, index) => (
          <ControlsButton
            key={index}
            onClick={() => {
              scrollToIndex(index)
            }}
            className={currentIndex === index ? 'active' : ''}
          />
        ))}
      </Controls>
    </>
  )
}
