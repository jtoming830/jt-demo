import { styled } from 'styled-components'

export const Input = styled.input`
  width: 200px;
  height: 44px;
  box-sizing: border-box;
  border-radius: 22px;
  border: none;
  padding-left: 16px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--input-placeholder-color);
  }
`
