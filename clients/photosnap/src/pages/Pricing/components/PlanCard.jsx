import { styled } from 'styled-components'
import { MODES } from './utils'
import { Accent, Button } from 'components'

const Container = styled.div`
  &:not(.featured) {
    padding: 32px 0;

    @media only screen and (max-width: 1200px) {
      padding: 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 690px;
    display: flex;
  }
`

const StyledAccent = styled(Accent)`
  @media only screen and (max-width: 1200px) {
    &.horizontal {
      width: 6px;
      height: unset;
    }
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

  display: flex;
  flex-direction: column;
  gap: 40px;

  text-align: center;

  @media only screen and (max-width: 1200px) {
    padding: 40px;
    width: 100%;

    .featured & {
      padding: 40px 34px;
    }

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px;

    text-align: left;
  }
`

const DescriptionContainer = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 270px;
  }
`

const Text = styled.div`
  opacity: 0.6;
`

const Description = styled(Text)`
  margin-top: 18px;
`

const StyledButton = styled(Button)`
  @media only screen and (max-width: 1200px) {
    width: 270px;
    text-align: center;
  }
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
      {featured && <StyledAccent />}
      <Content>
        <DescriptionContainer>
          <h2>{name}</h2>
          <Description>{text}</Description>
        </DescriptionContainer>
        <div>
          <h1>${price}</h1>
          <Text>{priceText}</Text>
        </div>
        <StyledButton light={featured}>Pick plan</StyledButton>
      </Content>
    </Container>
  )
}
