import { styled } from 'styled-components'

const Container = styled.div`
  width: 1110px;
  display: flex;
  flex-wrap: wrap;
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

const ImageTitle = styled.h3`
  color: var(--white);

  margin-top: 458px;
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
