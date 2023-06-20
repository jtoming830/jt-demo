import styled from 'styled-components'
import { Button } from 'components'

const Container = styled.div`
  width: 730px;
`

const StyledButton = styled(Button)``

export function Form() {
  return (
    <Container>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <textarea placeholder="Message" />
    </Container>
  )
}
