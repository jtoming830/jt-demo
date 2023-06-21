import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NumberButton, LinkButton } from 'components'
import { items } from './items'
import { LINKS } from 'router'

const Container = styled.div`
  width: var(--content-width);
  height: 720px;

  position: relative;
`

const Content = styled.div`
  height: 720px;
  box-sizing: border-box;

  padding: 180px 0 0 190px;
  --img-url: url(${(props) => props.$img.desktop});

  @media only screen and (max-width: 1200px) {
    padding: 186px 0 0 58px;
    --img-url: url(${(props) => props.$img.tablet});
  }

  @media only screen and (max-width: 600px) {
    padding: 116px 0 0 32px;
    --img-url: url(${(props) => props.$img.mobile});
    background-size: cover;
  }

  background: var(--image-darken-color) var(--img-url) no-repeat;
  background-blend-mode: darken;
`

const Title = styled.div`
  font-size: 96px;
  line-height: 80px;
  font-weight: 700;
  color: var(--white);
  white-space: pre;

  @media only screen and (max-width: 600px) {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -1.2px;
  }
`

const Text = styled.div`
  color: var(--white);
  width: 445px;
  margin-bottom: 40px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 84px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: -80px;

  @media only screen and (max-width: 1400px) {
    left: 0;
  }

  @media only screen and (max-width: 600px) {
    left: 32px;
  }
`

export function Carousel() {
  const [index, setIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const { title, text, img } = items[displayIndex]
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (displayIndex !== index) {
      setTransitionStage('fadeOut')
    }
  }, [displayIndex, index])

  return (
    <Container>
      <Content
        className={transitionStage}
        $img={img}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn')
            setDisplayIndex(index)
          }
        }}
      >
        <Title>{title}</Title>
        <Text>{text}</Text>
        <LinkButton to={LINKS.PORTFOLIO}>See Our Portfolio</LinkButton>
      </Content>
      <ButtonGroup>
        {items.map((_, i) => (
          <NumberButton
            key={i}
            onClick={() => setIndex(i)}
            className={index === i ? 'active' : ''}
          >
            0{i + 1}
          </NumberButton>
        ))}
      </ButtonGroup>
    </Container>
  )
}
