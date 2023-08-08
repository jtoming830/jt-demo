import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 1110px;
  gap: 30px;
`

const Card = styled.div`
  width: 350px;

  @media only screen and (max-width: 1200px) {
    width: 340px;
  }

  text-align: center;
`

const Image = styled.div`
  background: center url(${(props) => props.$img}) no-repeat;
  width: 100px;
  height: 72px;

  margin: 0 auto 48px;
`

const Text = styled.div`
  opacity: 0.6;
  margin-top: 16px;
  white-space: break-spaces;
`

export function FeaturesOverview({ items, className }) {
  return (
    <Container className={className}>
      {items.map(({ title, img, text }) => (
        <Card key={title}>
          <Image $img={img} />
          <h3>{title}</h3>
          <Text>{text}</Text>
        </Card>
      ))}
    </Container>
  )
}
