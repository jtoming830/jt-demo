import { Switch } from 'components'
import { useState } from 'react'
import { styled } from 'styled-components'
import { PlanCard } from './PlanCard'
import { MODES, plans } from './utils'

const Container = styled.div`
  margin-top: 160px;
`

const StyledSwitch = styled(Switch)`
  margin: auto;
`

const Plans = styled.div`
  display: flex;
  gap: 30px;

  margin: 48px auto 0;
  width: fit-content;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 24px;
    margin-top: 40px;
  }
`

const options = Object.values(MODES)

export function PlanPicker() {
  const [mode, setMode] = useState(MODES.MONTLY)

  return (
    <Container>
      <StyledSwitch
        options={options}
        value={mode}
        onChange={setMode}
      />
      <Plans>
        {plans.map((props) => (
          <PlanCard
            {...props}
            paymentMode={mode}
          />
        ))}
      </Plans>
    </Container>
  )
}
