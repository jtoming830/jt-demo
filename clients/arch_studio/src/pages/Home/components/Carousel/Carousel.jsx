import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NumberButton, LinkButton } from '../../../../components'
import { items } from './items'
import { LINKS } from '../../../../router'

const Container = styled.div`
  width: 1110px;
  height: 720px;

  position: relative;
`

const Content = styled.div`
  padding: 180px 0 0 190px;
  height: 720px;
  box-sizing: border-box;

  background: var(--image-darken-color) url(${(props) => props.$img}) no-repeat;
  background-blend-mode: darken;
`

const Title = styled.div`
  font-size: 96px;
  line-height: 80px;
  font-weight: 700;
  color: var(--white);
  white-space: pre;
`

const Text = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: var(--white);
  width: 445px;
  margin-bottom: 40px;
`

const ButtonGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: -80px;
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
