import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: fit-content;
`

const Underline = styled.span`
  width: 100%;
  height: 6px;
  position: absolute;
  background: var(--brand-color);
  margin-top: 14px;
  opacity: 0.5;
  z-index: -1;
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
`

export function Title({ children, ...props }) {
  return (
    <Container {...props}>
      <Underline />
      <Text>{children}</Text>
    </Container>
  )
}
