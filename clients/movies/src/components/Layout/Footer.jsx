import { Layout } from 'antd'
import { styled } from 'styled-components'

const { Footer: AntdFooter } = Layout

const StyledFooter = styled(AntdFooter)`
  text-align: center;
`

export function Footer() {
  return <StyledFooter>Jaan Toming ©2023</StyledFooter>
}
