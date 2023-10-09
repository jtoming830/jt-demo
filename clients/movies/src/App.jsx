import { useSelector } from 'react-redux'
import { Layout } from './components'
import { MoviesRates } from './pages/MoviesRates'
import { IntlProvider } from 'react-intl'
import { ConfigProvider } from 'antd'

function App() {
  const { locale, messages, antMessages } = useSelector((state) => state.localization)

  return (
    <ConfigProvider locale={antMessages}>
      <IntlProvider
        messages={messages}
        locale={locale}
        defaultLocale="en-US"
      >
        <Layout>
          <MoviesRates />
        </Layout>
      </IntlProvider>
    </ConfigProvider>
  )
}

export default App
