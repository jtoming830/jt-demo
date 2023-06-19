import { styled } from 'styled-components'
import { LinkButton } from '../../../../components'
import { LINKS } from '../../../../router'
import { items } from './items'

const Container = styled.div`
  margin-top: 208px;
  margin-bottom: 200px;
`

const TitleContainer = styled.div`
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 72px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -2px;
`

const Gallery = styled.div`
  display: flex;
  gap: 30px;
`

const Image = styled.div`
  height: 560px;
  width: 350px;
  padding-left: 40px;
  box-sizing: border-box;

  background: var(--image-darken-gradient), url(${(props) => props.$img}) no-repeat;
  background-blend-mode: darken;
`

const ImageTitle = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  color: var(--white);

  margin-top: 458px;
`

export function Featured() {
  return (
    <Container>
      <TitleContainer>
        <Title>Featured</Title>
        <LinkButton to={LINKS.PORTFOLIO}>See All</LinkButton>
      </TitleContainer>
      <Gallery>
        {items.map(({ img, key, title }) => (
          <Image
            key={key}
            $img={img}
          >
            <ImageTitle>{title}</ImageTitle>
          </Image>
        ))}
      </Gallery>
    </Container>
  )
}
