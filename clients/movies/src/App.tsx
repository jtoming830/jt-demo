import { useSelector } from 'react-redux'
import { Layout } from './components'
import { MoviesRates } from './pages/MoviesRates'
import { IntlProvider } from 'react-intl'
import { ConfigProvider } from 'antd'
import { RootState } from './store'

function App() {
  const { locale, messages, antdMessages } = useSelector((state: RootState) => state.localization)

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale="en-US"
    >
      {/* is needed because for some reason TS doesn't recognize children for IntlProvider properly */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ConfigProvider locale={antdMessages}>
        <Layout>
          <MoviesRates />
        </Layout>
      </ConfigProvider>
    </IntlProvider>
  )
}

export default App
