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

  @media only screen and (max-width: 600px) {
    width: var(--content-width);
    height: calc(240 / 375 * var(--content-width));
    --img-url: url(${(props) => props.$getImageUrl('mobile')});
    background-size: contain;
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

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
    bottom: unset;
    position: relative;
  }
`

const Title = styled.h1`
  position: absolute;
  right: 0;
  top: -90px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const TextContainer = styled.div`
  width: 445px;
  position: absolute;
  bottom: 0;
  left: 182px;

  @media only screen and (max-width: 1200px) {
    left: 60px;
  }

  @media only screen and (max-width: 600px) {
    width: unset;
    left: 0px;
    padding-left: 32px;
    margin-right: 32px;
    background: var(--white);
    top: -45px;
    height: fit-content;
    padding-top: 65px;
  }
`

const SubTitle = styled.h2`
  margin-bottom: 50px;

  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`

const Text = styled.div`
  color: var(--dark-grey);
`

const StyledUnderline = styled(Underline)`
  margin-bottom: 58px;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 74px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export function Hero({ title, subTitle, text, getImageUrl }) {
  return (
    <Container>
      <Image $getImageUrl={getImageUrl} />
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
