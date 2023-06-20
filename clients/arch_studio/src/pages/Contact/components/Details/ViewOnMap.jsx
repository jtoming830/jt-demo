import { IconArrow } from 'icons'
import { styled } from 'styled-components'

const Container = styled.div`
  color: var(--text-color);
  font-weight: 700;
  margin-top: 60px;

  cursor: pointer;
`

const Text = styled.span`
  vertical-align: super;
  margin-right: 24px;

  :hover > & {
    text-decoration: underline;
  }
`

export function ViewOnMap() {
  return (
    <Container>
      <Text>View On Map</Text>
      <IconArrow />
    </Container>
  )
}
