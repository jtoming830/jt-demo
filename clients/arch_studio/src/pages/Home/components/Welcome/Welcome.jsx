import styled from 'styled-components'
import img from '../../../../assets/home/desktop/image-welcome.jpg'

const Container = styled.div`
  padding-top: 195px;
  padding-bottom: 200px;
  position: relative;
  display: flex;
  gap: 125px;
`

const Title = styled.h1`
  position: absolute;
  top: 110px;
`

const Content = styled.div`
  margin-left: 190px;
`

const SubTitle = styled.h2`
  margin-top: 74px;
  width: 446px;

  z-index: 1;
  position: relative;
`

const Text = styled.div`
  color: var(--dark-grey);
  width: 445px;
  margin-top: 40px;
`

const Image = styled.img`
  width: 350px;
  height: 568px;
`

export function Welcome() {
  return (
    <Container>
      <Title>Welcome</Title>
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
      <Image src={img} />
    </Container>
  )
}
