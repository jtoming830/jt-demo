import styled from 'styled-components'
import searchIcon from '../../icons/search.svg'

const Input = styled.input`
  width: 480px;
  height: 56px;
  border: none;
  box-shadow: 0 2px 9px 0 #0000000d;
  box-sizing: border-box;

  padding-left: 74px;
  background: url(${searchIcon}) no-repeat;
  background-position: 32px 20px;
  background-color: var(--bg-color);

  caret-color: var(--text-color);

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    width: calc(100vw - 32px);
  }
`

export function Search({ value = '', onChange }) {
  return (
    <Input
      placeholder="Search for a country..."
      value={value}
      onChange={onChange}
    />
  )
}
