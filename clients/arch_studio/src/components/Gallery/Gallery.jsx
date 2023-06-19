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

const ImageTitle = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  color: var(--white);

  margin-top: 458px;
`

export function Gallery({ items }) {
  return (
    <Container>
      {items.map(({ img, key, title }) => (
        <Image
          key={key}
          $img={img}
        >
          <ImageTitle>{title}</ImageTitle>
        </Image>
      ))}
    </Container>
  )
}
