import styled from 'styled-components'
import { Card } from './components'
import { items } from './items'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 15px;
  justify-content: space-between;

  @media only screen and (min-width: 1001px) and (max-width: 1200px) {
    width: 300px;
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
  }
`

export default function Portfolio() {
  return (
    <Container>
      {items.map((item) => (
        <Card {...item} />
      ))}
    </Container>
  )
}
