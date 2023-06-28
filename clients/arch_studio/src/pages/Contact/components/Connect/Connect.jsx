import { styled } from 'styled-components'
import { Form } from './components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 32px;
  }
`

const Title = styled.h2`
  width: 350px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
  }
`

export function Connect() {
  return (
    <Container>
      <Title>Connect with us</Title>
      <Form />
    </Container>
  )
}
