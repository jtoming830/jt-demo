import { styled } from 'styled-components'
import { FEATURES, plans } from './utils'
import { Check } from 'icons'

const Container = styled.div`
  margin: 160px 0;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
`

const Grid = styled.div`
  width: fit-content;
  margin: 0 auto;
`

const Row = styled.div`
  display: flex;
`

const Text = styled.h4`
  text-transform: uppercase;
`

const LeftCell = styled(Text)`
  padding: 24px;
  width: 310px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  border-bottom: 1px solid var(--grey);
`

const HeaderCell = styled(Text)`
  width: 140px;
  padding: 24px;
  box-sizing: border-box;

  text-align: center;

  border-bottom: 1px solid var(--black);
`

const LeftHeaderCell = styled(HeaderCell)`
  width: 310px;
  text-align: left;
`

const Cell = styled.div`
  width: 140px;
  padding: 24px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid var(--grey);
`

export function PlansOverview() {
  return (
    <Container>
      <Title>Compare</Title>
      <Grid>
        <Row>
          <LeftHeaderCell>The Features</LeftHeaderCell>
          {plans.map(({ name }) => (
            <HeaderCell>{name}</HeaderCell>
          ))}
        </Row>
        {Object.values(FEATURES).map((feature) => (
          <Row>
            <LeftCell>{feature}</LeftCell>
            {plans.map(({ features }) => (
              <Cell>{features.includes(feature) ? <Check width={16} /> : null}</Cell>
            ))}
          </Row>
        ))}
      </Grid>
    </Container>
  )
}
