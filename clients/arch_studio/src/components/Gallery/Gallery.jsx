import { styled } from 'styled-components'

const Container = styled.div`
  width: var(--content-width);
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`

const Image = styled.div`
  padding-left: 40px;
  box-sizing: border-box;

  height: 560px;
  width: 350px;
  --img-url: url(${(props) => props.$img.desktop});

  @media only screen and (max-width: 1200px) {
    height: 240px;
    width: 573px;
    --img-url: url(${(props) => props.$img.tablet});
  }

  background: var(--image-darken-gradient), var(--img-url) no-repeat;
  background-blend-mode: darken;
`

const ImageTitle = styled.h3`
  color: var(--white);

  margin-top: 458px;

  @media only screen and (max-width: 1200px) {
    margin-top: 138px;
  }
`

const ImageDate = styled.div`
  color: var(--white);
  opacity: 0.75;
`

export function Gallery({ items }) {
  return (
    <Container>
      {items.map(({ img, key, title, date }) => (
        <Image
          key={key}
          $img={img}
        >
          <ImageTitle>{title}</ImageTitle>
          <ImageDate>{date}</ImageDate>
        </Image>
      ))}
    </Container>
  )
}
