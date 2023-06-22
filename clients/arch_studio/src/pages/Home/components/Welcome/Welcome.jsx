import styled from 'styled-components'
import img from '../../../../assets/home/desktop/image-welcome.jpg'
import { Underline } from 'components'

const Container = styled.div`
  padding-top: 195px;
  padding-bottom: 200px;
  position: relative;
  display: flex;
  gap: 125px;

  @media only screen and (max-width: 600px) {
    padding: 72px 32px 114px;
    display: block;
  }
`

const Title = styled.h1`
  position: absolute;
  top: 110px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const StyledUnderline = styled(Underline)`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    margin-bottom: 70px;
  }
`

const Content = styled.div`
  margin-left: 190px;

  @media only screen and (max-width: 1200px) {
    margin-left: 0;
  }
`

const SubTitle = styled.h2`
  margin-top: 74px;
  width: 446px;

  z-index: 1;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: unset;
  }
`

const Text = styled.div`
  color: var(--dark-grey);
  width: 445px;
  margin-top: 40px;

  @media only screen and (max-width: 600px) {
    width: unset;
  }
`

const Image = styled.img`
  content: url(${img});

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`

export function Welcome() {
  return (
    <Container>
      <Title>Welcome</Title>
      <StyledUnderline />
      <Content>
        <SubTitle>Welcome to Arch Studio</SubTitle>
        <Text>
          <p>
            We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled
            individuals combined with our large network put us in a strong position to deliver exceptional results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create
            spaces that inspire and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the intricacies of each project. This allows us to work in
            harmony the surrounding area to create truly stunning projects that will stand the test of time.
          </p>
        </Text>
      </Content>
      <Image />
    </Container>
  )
}
