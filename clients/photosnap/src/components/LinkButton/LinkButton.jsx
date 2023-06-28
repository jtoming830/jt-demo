import { Arrow } from 'icons'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;

  &.light {
    color: var(--white);
  }

  &:hover {
    text-decoration: underline;
  }
`

export function LinkButton({ light, to, children, className }) {
  const mergedClassName = [className, light && 'light'].filter(Boolean).join(' ')

  return (
    <StyledLink
      className={mergedClassName}
      to={to}
    >
      {children}
      <Arrow />
    </StyledLink>
  )
}
