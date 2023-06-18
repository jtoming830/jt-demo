import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCountries = createAsyncThunk('main/getCountries', () =>
  fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,subregion,currencies,cca3,tld,borders,languages'
  ).then((response) => response.json())
)
