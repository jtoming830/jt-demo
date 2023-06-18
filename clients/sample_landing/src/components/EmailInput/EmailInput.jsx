import { useState } from 'react'
import { Input } from '../Input'
import { styled } from 'styled-components'

const StyledInput = styled(Input)`
  .invalid & {
    border: 1px solid var(--invalid-color);
    color: var(--invalid-color);
  }
`

const ValidationMessage = styled.div`
  color: var(--invalid-color);
  letter-spacing: -0.08px;
  font-size: 10px;
  margin-left: 16px;
  line-height: 16px;

  opacity: 0;
  transition: 0.5s ease;
  .invalid & {
    opacity: 1;
  }
`

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const validate = (str) => !str || !!str.match(emailRegex)

export function EmailInput({ onChange }) {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  return (
    <div className={isValid ? '' : 'invalid'}>
      <StyledInput
        value={value}
        onChange={(e) => {
          const newValue = e.target.value
          setValue(newValue)

          const newIsValid = validate(newValue)
          setIsValid(newIsValid)
          onChange?.(newIsValid ? newValue : '')
        }}
        placeholder="Updates in your inbox…"
      />
      <ValidationMessage>Please insert a valid email</ValidationMessage>
    </div>
  )
}
