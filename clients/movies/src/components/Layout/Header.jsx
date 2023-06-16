import { Layout } from 'antd'
import { styled } from 'styled-components'

const { Header: AntdHeader } = Layout

const StyledHeader = styled(AntdHeader)`
  display: flex;
  align-items: center;
`

export function Header() {
  return <StyledHeader>{/* */}</StyledHeader>
}
