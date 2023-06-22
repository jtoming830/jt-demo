import { styled } from 'styled-components'

const Container = styled.div`
  text-align: end;
  color: var(--copyright-text-color);
  letter-spacing: -0.2px;
  font-size: 13px;
  line-height: 19px;
`

export function Copyright() {
  return <Container>Copyright 2020. All Rights Reserved</Container>
}
