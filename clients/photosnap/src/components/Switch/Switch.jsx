import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  width: fit-content;
`

const Option = styled.h3`
  transition: 0.5s ease;
  opacity: ${(props) => (props.$active ? '' : '0.5')};
`

const Editor = styled.div`
  border-radius: 16px;

  width: 64px;
  height: 32px;

  cursor: pointer;
  transition: 0.5s ease;

  background: var(--grey);
  &.right-selected {
    background: var(--black);
  }
`

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;

  background: var(--black);
  transition: 0.5s ease;

  .right-selected & {
    margin-left: 36px;
    background: var(--white);
  }
`

const POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right'
}

const choosePosition = (value, options) => (value === options[0] ? POSITIONS.LEFT : POSITIONS.RIGHT)

export function Switch({ className, options, value, onChange }) {
  const [position, setPosition] = useState(choosePosition(value, options))

  useEffect(() => {
    setPosition(choosePosition(value, options))
  }, [options, value])

  return (
    <Container className={className}>
      <Option $active={position === POSITIONS.LEFT}>{options[0]}</Option>
      <Editor
        className={position === POSITIONS.RIGHT ? 'right-selected' : ''}
        onClick={() => onChange(value === options[0] ? options[1] : options[0])}
      >
        <Circle />
      </Editor>
      <Option $active={position === POSITIONS.RIGHT}>{options[1]}</Option>
    </Container>
  )
}
