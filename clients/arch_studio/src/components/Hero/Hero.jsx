import styled from 'styled-components'
import { Underline } from '../Underline'

const Container = styled.div`
  position: relative;
  width: 100%;
`

const Image = styled.div`
  height: 720px;
  width: 635px;
  --img-url: url(${(props) => props.$getImageUrl('desktop')});

  @media only screen and (max-width: 1200px) {
    width: var(--content-width);
    --img-url: url(${(props) => props.$getImageUrl('tablet')});
  }

  background: var(--image-darken-color) var(--img-url) no-repeat;
  background-blend-mode: darken;
`

const Content = styled.div`
  width: 640px;
  height: 500px;

  background: var(--white);

  position: absolute;
  bottom: 0;
  right: 0;

  @media only screen and (max-width: 1200px) {
    width: 514px;
    height: 430px;
  }
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

  @media only screen and (max-width: 1200px) {
    left: 60px;
  }
`

const SubTitle = styled.h2`
  margin-bottom: 50px;
`

const Text = styled.div`
  color: var(--dark-grey);
`

const StyledUnderline = styled(Underline)`
  margin-bottom: 58px;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 74px;
  }
`

export function Hero({ img, title, subTitle, text, getImageUrl }) {
  return (
    <Container>
      <Image
        $img={img}
        $getImageUrl={getImageUrl}
      />
      <Content>
        <Title>{title}</Title>
        <TextContainer>
          <StyledUnderline />
          <SubTitle>{subTitle}</SubTitle>
          <Text>{text}</Text>
        </TextContainer>
      </Content>
    </Container>
  )
}
