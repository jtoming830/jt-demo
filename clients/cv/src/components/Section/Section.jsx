import { styled } from 'styled-components'
import { Title } from '../Title'

const Container = styled.div`
  & + & {
    margin-top: 30px;
  }
`

const Content = styled.div`
  margin-top: ${(props) => (props.$hasTitle ? '30px' : '0')};
`

export function Section({ title, children, className }) {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <Content $hasTitle={!!title}>{children}</Content>
    </Container>
  )
}
