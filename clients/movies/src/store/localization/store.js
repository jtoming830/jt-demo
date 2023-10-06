import { createSlice } from '@reduxjs/toolkit'
import { enMessages, ruMessages } from '../../lang'

import antdEn from 'antd/locale/en_US'
import antdRu from 'antd/locale/ru_RU'

const RU = 'ru-RU'
const EN = 'en-US'

export const localeOptions = [
  { value: EN, label: 'English' },
  { value: RU, label: 'Русский' }
]

const localeMap = {
  [EN]: {
    antdMessages: antdEn,
    messages: enMessages
  },
  [RU]: {
    antdMessages: antdRu,
    messages: ruMessages
  }
}

const LOCAL_STORAGE_LOCALE_KEY = 'locale'
const lsLocale = localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY)
const systemLocale = Object.keys(localeMap).find(
  (locale) => navigator.language === locale || locale.includes(navigator.language)
)
const initialLocale = lsLocale || systemLocale || EN

export const localizationSlice = createSlice({
  name: 'localization',
  initialState: {
    locale: initialLocale,
    ...localeMap[initialLocale]
  },
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload

      const { messages, antdMessages } = localeMap[action.payload]

      state.messages = messages
      state.antdMessages = antdMessages

      localStorage.setItem(LOCAL_STORAGE_LOCALE_KEY, action.payload)
    }
  }
})

export const { setLocale } = localizationSlice.actions
