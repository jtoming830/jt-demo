import { styled } from 'styled-components'

const Container = styled.div`
  text-transform: uppercase;
  padding: 12px 24px;

  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 2px;

  cursor: pointer;
  transition: 0.75s ease;

  background: var(--black);
  color: var(--white);

  &.light {
    background: var(--white);
    color: var(--black);
  }

  &:hover {
    background: var(--grey);
    color: var(--black);
  }

  box-sizing: border-box;
  height: 40px;
`

export function Button({ light, children }) {
  return <Container className={light ? 'light' : ''}>{children}</Container>
}
