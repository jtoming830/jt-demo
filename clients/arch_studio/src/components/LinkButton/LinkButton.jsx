import { styled } from 'styled-components'
import { Button } from '../Button'
import { IconArrow } from '../../icons'
import { Link } from '../Link'

const Text = styled.span`
  margin-right: 24px;
  height: 100%;
  display: inline-block;
  vertical-align: bottom;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
`

const StyledButton = styled(Button)`
  padding: 25px 32px 22px 37px;
`

export function LinkButton({ to, children }) {
  return (
    <Link to={to}>
      <StyledButton>
        <Text>{children}</Text>
        <IconArrow />
      </StyledButton>
    </Link>
  )
}
