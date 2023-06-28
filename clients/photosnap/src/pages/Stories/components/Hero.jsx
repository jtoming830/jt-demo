import img from 'assets/stories/desktop/moon-of-appalacia.jpg'
import { LinkButton } from 'components'
import { styled } from 'styled-components'

const Container = styled.div`
  padding: 122px 112px;
  box-sizing: border-box;
  height: calc(650 / 1440 * 100vw);
  background: url(${img}) no-repeat;
  background-size: cover;

  color: var(--white);
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
