import { styled } from 'styled-components'
import { items } from './items'
import { useEffect, useRef } from 'react'

const ScrollableContainer = styled.div`
  width: 100vw;
  overflow: scroll;
`

const Container = styled.div`
  display: flex;
  width: fit-content;
  gap: 30px;
`

const CardContainer = styled.div`
  height: 256px;
`

const Card = styled.div`
  margin-top: 36px;
  width: 540px;
  height: 220px;
  background-color: var(--card-bg);
  box-sizing: border-box;
  padding: 60px 40px 40px 40px;
  position: relative;
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

export function Carousel(props) {
  const scrollableContainerRef = useRef()

  useEffect(() => {
    const scrollableContainerElement = scrollableContainerRef.current
    const { offsetWidth, scrollWidth } = scrollableContainerElement

    scrollableContainerElement.scrollLeft = (scrollWidth - offsetWidth) / 2
  }, [])

  return (
    <ScrollableContainer ref={scrollableContainerRef}>
      <Container {...props}>
        {items.map(({ img, title, text }) => (
          <CardContainer key={title}>
            <Card>
              <Image src={img} />
              <Title>{title}</Title>
              <Text>{text}</Text>
            </Card>
          </CardContainer>
        ))}
      </Container>
    </ScrollableContainer>
  )
}
