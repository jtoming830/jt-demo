import styled from 'styled-components'
import { Button } from 'components'
import { IconArrow } from 'icons'

const Container = styled.div`
  width: var(--content-width);
`

const ConfirmButton = styled(Button)`
  width: 80px;
  height: 80px;

  margin-left: auto;
  padding: 30px 28px;
`

export function Form() {
  return (
    <Container>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <textarea placeholder="Message" />
      <ConfirmButton>
        <IconArrow />
      </ConfirmButton>
    </Container>
  )
}
