import { styled } from 'styled-components'

export const Container = styled.div`
  width: 65px;
  height: 1px;
  background: var(--light-grey);
  margin-bottom: ${(props) => props.$marginBottom + 'px'};
`

export function Underline({ marginBottom }) {
  return <Container $marginBottom={marginBottom} />
}
