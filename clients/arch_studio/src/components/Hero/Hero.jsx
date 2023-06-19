import styled from 'styled-components'

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

const Title = styled.div`
  font-size: 250px;
  line-height: 200px;
  letter-spacing: -5px;
  font-weight: 700;
  color: var(--very-light-grey);

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

const Underline = styled.div`
  width: 65px;
  height: 1px;
  background: var(--light-grey);
  margin-bottom: 58px;
`

const SubTitle = styled.div`
  font-size: 72px;
  line-height: 64px;
  letter-spacing: -2px;
  font-weight: 700;
  margin-bottom: 50px;
`

const Text = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: var(--dark-grey);
`

export function Hero({ img, title, subTitle, text }) {
  return (
    <Container>
      <Image $img={img} />
      <Content>
        <Title>{title}</Title>
        <TextContainer>
          <Underline />
          <SubTitle>{subTitle}</SubTitle>
          <Text>{text}</Text>
        </TextContainer>
      </Content>
    </Container>
  )
}
