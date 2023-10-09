import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { enMessages, ruMessages } from '../../lang'

import antdEn from 'antd/locale/en_US'
import antdRu from 'antd/locale/ru_RU'
import { supportedLanguages, SupportedLanguages } from '../../types/supportedLanguages'

export const localeOptions = [
  { value: SupportedLanguages.EN, label: 'English' },
  { value: SupportedLanguages.RU, label: 'Русский' }
]

const localeMap = {
  [SupportedLanguages.EN]: {
    antdMessages: antdEn,
    messages: enMessages
  },
  [SupportedLanguages.RU]: {
    antdMessages: antdRu,
    messages: ruMessages
  }
}

const LOCAL_STORAGE_LOCALE_KEY = 'locale'
const lsLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) || ''
const systemLocale = supportedLanguages.find(
  (locale) => navigator.language === locale || locale.includes(navigator.language)
)
const initialLocale =
  lsLocale in SupportedLanguages ? (lsLocale as SupportedLanguages) : systemLocale || SupportedLanguages.EN

export const localizationSlice = createSlice({
  name: 'localization',
  initialState: {
    locale: initialLocale,
    ...localeMap[initialLocale]
  },
  reducers: {
    setLocale: (state, action: PayloadAction<SupportedLanguages>) => {
      state.locale = action.payload

      const { messages, antdMessages } = localeMap[action.payload]

      state.messages = messages
      state.antdMessages = antdMessages

      localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, action.payload)
    }
  }
})

export const { setLocale } = localizationSlice.actions
