import { useDispatch, useSelector } from 'react-redux'
import { allCountriesSelector, getCountries } from '../store/main'
import { useEffect } from 'react'

export function useCountries() {
  const dispatch = useDispatch()

  const countries = useSelector(allCountriesSelector)

  useEffect(() => {
    !countries.length && dispatch(getCountries())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return countries
}
