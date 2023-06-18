import { styled } from 'styled-components'
import { Background, Description, Footer, Header, Reviews, TopContainer } from '../components'

const Container = styled.div`
  width: 1110px;
  margin: auto;
  padding-top: 56px;
`

export default function Landing() {
  return (
    <>
      <Background />
      <Container>
        <Header />
        <TopContainer />
        <Description />
        <Reviews />
      </Container>
      <Footer />
    </>
  )
}
