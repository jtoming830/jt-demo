import { styled } from 'styled-components'
import { Button } from '../../Button'
import { EmailInput } from '../../EmailInput'

const Container = styled.div`
  display: flex;
  gap: 8px;
`

const StyledButton = styled(Button)`
  box-shadow: none;
`

export function Email() {
  return (
    <Container>
      <EmailInput />
      <StyledButton>Go</StyledButton>
    </Container>
  )
}
