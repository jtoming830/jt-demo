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

  @media only screen and (max-width: 600px) {
    --img-width: calc(100vw - 64px);
    width: var(--img-width);
    height: calc(240 / 311 * var(--img-width));
    background-size: contain;
    --img-url: url(${(props) => props.$img.mobile});

    padding-left: 24px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: end;

    margin: 0 32px;
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
