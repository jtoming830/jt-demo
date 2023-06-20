import styled from 'styled-components'
import { LinkButton } from '../../../../components'
import img from '../../../../assets/home/desktop/image-small-team.jpg'

const Container = styled.div`
  width: 1110px;

  padding: 166px 190px;
  box-sizing: border-box;

  background: var(--image-darken-color) url(${img}) no-repeat;
  background-blend-mode: darken;
`

const Title = styled.h2`
  color: var(--white);
  width: 445px;
  margin-bottom: 28px;
`

export function About() {
  return (
    <Container>
      <Title>Small team, big ideas</Title>
      <LinkButton>About Us</LinkButton>
    </Container>
  )
}
