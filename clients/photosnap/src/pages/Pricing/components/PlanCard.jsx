import { styled } from 'styled-components'
import { MODES } from './utils'
import { Accent, Button } from 'components'

const Container = styled.div`
  &:not(.featured) {
    padding: 32px 0;
  }
`

const Content = styled.div`
  background: var(--grey-2);
  padding: 56px 40px;

  .featured & {
    padding: 82px 40px;
    background: var(--black);
    color: var(--white);
  }

  width: 350px;
  box-sizing: border-box;
  text-align: center;
`

const Text = styled.div`
  opacity: 0.6;
`

const Description = styled(Text)`
  margin-top: 18px;
`

const PriceContainer = styled.div`
  margin: 40px 0;
`

export function PlanCard({ name, text, basePrice, yearlyPrice, paymentMode, featured }) {
  const { price, priceText } = {
    [MODES.MONTLY]: {
      price: basePrice,
      priceText: 'per month'
    },
    [MODES.YEARLY]: {
      price: yearlyPrice,
      priceText: 'per year'
    }
  }[paymentMode]

  return (
    <Container className={featured ? 'featured' : ''}>
      {featured && <Accent />}
      <Content>
        <h2>{name}</h2>
        <Description>{text}</Description>
        <PriceContainer>
          <h1>${price}</h1>
          <Text>{priceText}</Text>
        </PriceContainer>
        <Button light={featured}>Pick plan</Button>
      </Content>
    </Container>
  )
}
