import styled from 'styled-components'
import { Underline } from '../Underline'

const Container = styled.div`
  position: relative;
  width: 100%;
`

const Image = styled.div`
  background: var(--image-darken-color) url(${(props) => props.$img}) no-repeat;
  background-blend-mode: darken;
  width: 635px;
  height: 720px;
`

const Content = styled.div`
  width: 640px;
  height: 500px;

  background: var(--white);

  position: absolute;
  bottom: 0;
  right: 0;
`

const Title = styled.h1`
  position: absolute;
  right: 0;
  top: -90px;
`

const TextContainer = styled.div`
  width: 445px;
  position: absolute;
  bottom: 0;
  left: 182px;
`

const SubTitle = styled.h2`
  margin-bottom: 50px;
`

const Text = styled.div`
  color: var(--dark-grey);
`

export function Hero({ img, title, subTitle, text }) {
  return (
    <Container>
      <Image $img={img} />
      <Content>
        <Title>{title}</Title>
        <TextContainer>
          <Underline marginBottom={58} />
          <SubTitle>{subTitle}</SubTitle>
          <Text>{text}</Text>
        </TextContainer>
      </Content>
    </Container>
  )
}
