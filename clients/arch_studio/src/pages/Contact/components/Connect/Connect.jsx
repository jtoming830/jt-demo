import { styled } from 'styled-components'
import { Form } from './components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  width: 350px;
`

export function Connect() {
  return (
    <Container>
      <Title>Connect with us</Title>
      <Form />
    </Container>
  )
}
