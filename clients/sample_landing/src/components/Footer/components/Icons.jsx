import { styled } from 'styled-components'
import { IconFacebook, IconInstagram, IconPinterest, IconTwitter, IconYoutube } from '../../../icons'

const Container = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;

  svg {
    color: var(--footer-text-color);
    cursor: pointer;

    transition: 0.3s ease;
    &:hover {
      color: var(--footer-text-hovered-color);
    }
  }

  @media only screen and (max-width: 800px) {
    width: 300px;
    svg {
      height: 32px;
      width: 32px;
    }
  }
`

export function Icons() {
  return (
    <Container>
      <IconFacebook />
      <IconYoutube />
      <IconTwitter />
      <IconPinterest />
      <IconInstagram />
    </Container>
  )
}
