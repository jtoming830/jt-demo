import { styled } from 'styled-components'
import { Title } from '../Title'

const Container = styled.div`
  & + & {
    margin-top: 30px;
  }
`

const Content = styled.div`
  margin-top: ${(props) => (props.$hasTitle ? '30px' : 'none')};
`

export function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content $hasTitle={!!title}>{children}</Content>
    </Container>
  )
}
