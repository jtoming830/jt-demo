import { Button } from '../Button'
import styled from 'styled-components'

export const NumberButton = styled(Button)`
  width: 80px;
  height: 80px;

  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  background-color: var(--white);
  color: var(--medium-grey);

  &.active {
    background-color: var(--very-dark-blue);
    color: var(--white);
  }

  &:hover {
    background-color: var(--very-light-grey);
  }
`
