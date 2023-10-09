import { Layout, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { localeOptions, setLocale } from '../../store/localization'
import { useIntl } from 'react-intl'
import { messages } from '../../messages'
import { RootState } from '../../store'
import { SupportedLanguages } from '../../types/supportedLanguages'

const { Header: AntdHeader } = Layout

const StyledHeader = styled(AntdHeader)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 24px;
  line-height: 32px;
`

const StyledSelect = styled(Select)`
  width: 120px;
`

export function Header() {
  const intl = useIntl()
  const dispatch = useDispatch()
  const locale = useSelector((state: RootState) => state.localization.locale)

  return (
    <StyledHeader>
      <Title>{intl.formatMessage(messages.title)}</Title>
      <StyledSelect
        options={localeOptions}
        value={locale}
        onChange={(value: unknown) => dispatch(setLocale(value as SupportedLanguages))}
      />
    </StyledHeader>
  )
}
