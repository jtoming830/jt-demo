import { styled } from 'styled-components'

export const Button = styled.div`
  height: 72px;
  box-sizing: border-box;
  padding: 28px 32px;
  width: fit-content;
  background-color: var(--very-dark-blue);
  color: var(--white);

  cursor: pointer;

  transition: 0.5s ease;

  &:hover {
    background-color: var(--dark-grey);
  }

  &.active {
    background-color: var(--light-grey);
  }
`
