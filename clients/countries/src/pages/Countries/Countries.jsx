import { useState } from 'react'
import { styled } from 'styled-components'
import { CountryCard } from '../../components/CountryCard'
import { RegionSelect, Search } from '../../components'
import { useSelector } from 'react-redux'
import { regionsSelector } from '../../store/main'
import { useNavigate } from 'react-router-dom'
import { useCountries } from '../../hooks'

const ToolPanel = styled.div`
  margin-top: 48px;
  gap: 12px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`

const Grid = styled.div`
  margin-top: 48px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 75px;

  width: max-content;
  max-width: calc(100vw - 160px);

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    gap: 40px;
    margin: auto;
    margin-top: 32px;
    width: 264px;
  }
`

export function Countries() {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [region, setRegion] = useState(null)

  const regions = useSelector(regionsSelector)
  const countries = useCountries()

  const filteredCountries = countries.filter((country) => {
    const regionMatches = !region || country.region === region
    const nameMatches = !search || country.name.common.toLowerCase().includes(search.toLowerCase())

    return regionMatches && nameMatches
  })

  return (
    <>
      <ToolPanel>
        <Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <RegionSelect
          regions={regions}
          value={region}
          onChange={setRegion}
        />
      </ToolPanel>
      <Grid>
        {filteredCountries.map((country) => (
          <CountryCard
            onClick={() => navigate(`/${country.name.common}`)}
            key={country.name.common}
            {...country}
          />
        ))}
      </Grid>
    </>
  )
}
