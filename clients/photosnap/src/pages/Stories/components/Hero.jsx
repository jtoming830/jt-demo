import desktopImg from 'assets/stories/desktop/moon-of-appalacia.jpg'
import tabletImg from 'assets/stories/tablet/moon-of-appalacia.jpg'
import mobileImg from 'assets/stories/mobile/moon-of-appalacia.jpg'
import { LinkButton } from 'components'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;

  box-sizing: border-box;

  color: var(--white);

  padding: 0 112px;
  height: calc(650 / 1440 * 100vw);
  --img-url: url(${desktopImg});

  @media only screen and (max-width: 1200px) {
    padding: 0 40px;
    height: calc(650 / 768 * 100vw);
    --img-url: url(${tabletImg});
  }

  background: url(${desktopImg}) no-repeat;
  background-size: cover;
`

const Content = styled.div`
  width: 387px;

  > span {
    font-size: 13px;
  }
`

const Title = styled.h1`
  margin: 16px 0;
`

const Date = styled.span`
  opacity: 0.75;
  margin-right: 8px;
`

const Text = styled.div`
  opacity: 0.6;
  margin: 24px 0;
`

export function Hero() {
  return (
    <Container>
      <Content>
        <h4>LAST MONTH’S FEATURED STORY</h4>
        <Title>HAZY FULL MOON OF APPALACHIA</Title>
        <Date>March 2nd 2020</Date>
        <span>by John Appleseed</span>
        <Text>
          The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains,"
          especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely
          rugged.
        </Text>
        <LinkButton light>Read the story</LinkButton>
      </Content>
    </Container>
  )
}
