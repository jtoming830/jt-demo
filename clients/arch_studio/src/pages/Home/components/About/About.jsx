import styled from 'styled-components'
import { LinkButton } from 'components'
import imgDesktop from 'assets/home/desktop/image-small-team.jpg'
import imgTablet from 'assets/home/tablet/image-small-team.jpg'
import imgMobile from 'assets/home/mobile/image-small-team.jpg'

const Container = styled.div`
  width: var(--content-width);

  padding: 166px 58px;
  box-sizing: border-box;

  --img-url: url(${imgDesktop});

  @media only screen and (max-width: 1200px) {
    --img-url: url(${imgTablet});
  }

  background: var(--image-darken-color) var(--img-url) no-repeat;
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
