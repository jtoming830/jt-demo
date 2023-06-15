import { Layout, Menu } from 'antd'
import { routeItems } from '../../router'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const { Header: AntdHeader } = Layout

const StyledHeader = styled(AntdHeader)`
  display: flex;
  align-items: center;
`

export function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <Menu
        theme="dark"
        style={{ width: '100%' }}
        mode="horizontal"
        items={routeItems}
        selectedKeys={[pathname]}
        onSelect={({ key }) => navigate(key)}
      />
    </StyledHeader>
  )
}
