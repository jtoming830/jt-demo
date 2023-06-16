import { styled } from 'styled-components'

const Button = styled.div`
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

  &:hover {
    cursor: pointer;
    background-color: var(--button-hovered-bg);
  }
`

export function GetStarted() {
  return <Button>Get Started</Button>
}
