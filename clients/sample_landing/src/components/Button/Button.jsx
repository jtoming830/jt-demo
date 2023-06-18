import { styled } from 'styled-components'

export const Button = styled.div`
  font-size: 13px;
  color: var(--button-color);

  height: 44px;
  width: fit-content;
  padding: 0 32px;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: var(--button-bg);
  box-shadow: 0 15px 15px -10px var(--button-shadow-color);

  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: var(--button-hovered-bg);
    color: var(--button-hovered-color);
  }

  &.invert {
    color: var(--button-invert-color);
    background-color: var(--button-invert-bg);
    box-shadow: 0 15px 15px -10px var(--button-invert-shadow-color);
    &:hover {
      background-color: var(--button-invert-hovered-bg);
      color: var(--button-invert-hovered-color);
    }
  }
`
