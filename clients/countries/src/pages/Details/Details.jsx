import { styled } from 'styled-components'
import { useCountries } from '../../hooks'
import arrow from '../../icons/arrow-2.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { formatPopulation } from '../../utils'

const Container = styled.div`
  margin-top: 80px;

  @media only screen and (max-width: 640px) {
    margin-top: 40px;
  }
`

const BackButton = styled.div`
  box-shadow: 0 0 7px 0 #00000049;
  border-radius: 6px;

  background-color: var(--bg-color);

  height: 40px;
  width: 136px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`

const Back = styled.span`
  background: url(${arrow}) no-repeat;
  padding-left: 30px;
  line-height: 20px;
`

const Content = styled.div`
  margin-top: 90px;
  display: flex;
  gap: 120px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 44px;
  }

  @media only screen and (max-width: 640px) {
    margin-top: 64px;
  }
`

const Flag = styled.img`
  height: 400px;
  width: 560px;

  @media only screen and (max-width: 640px) {
    height: 230px;
    width: 320px;
  }
`

const InfoContainer = styled.div`
  margin: 40px 0;

  @media only screen and (max-width: 640px) {
    margin: 0;
  }
`

const Name = styled.div`
  font-size: 32px;
  line-height: 43px;
  font-weight: 800;
  margin-bottom: 24px;

  @media only screen and (max-width: 640px) {
    margin-bottom: 16px;
  }
`

const Info = styled.div`
  display: flex;
  gap: 140px;
  margin-bottom: 68px;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    gap: 32px;
    margin-bottom: 34px;
  }
`

const Column = styled.div``

const ItemTitle = styled.span`
  font-weight: 800;
  line-height: 32px;
`

const BordersContainer = styled.div`
  display: flex;
  gap: 12px;
`

const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const BordersTitle = styled.span`
  line-height: 26px;
  font-weight: 800;
  width: 132px;
  flex-shrink: 0;
`

const Badge = styled.div`
  border-radius: 2px;
  box-shadow: 0 0 4px 1px #00000019;
  height: 28px;
  box-sizing: border-box;
  padding: 4px 28px;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const PLACEHOLDER = 'N/A'

export function Details() {
  const countries = useCountries()
  const navigate = useNavigate()
  const { name } = useParams()

  const country = countries.find((_country) => _country.name.common === name)

  console.log(country)

  return country ? (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <Back>Back</Back>
      </BackButton>
      <Content>
        <Flag src={country.flags.png} />
        <InfoContainer>
          <Name>{country.name.common}</Name>
          <Info>
            <Column>
              <div>
                <ItemTitle>Native Name: </ItemTitle>
                <span>
                  {Object.values(country.name.nativeName)
                    .map((nativeName) => nativeName.common)
                    .join(', ') || PLACEHOLDER}
                </span>
              </div>
              <div>
                <ItemTitle>Population: </ItemTitle>
                <span>{formatPopulation(country.population)}</span>
              </div>
              <div>
                <ItemTitle>Region: </ItemTitle>
                <span>{country.region}</span>
              </div>
              <div>
                <ItemTitle>Sub Region: </ItemTitle>
                <span>{country.subregion || PLACEHOLDER}</span>
              </div>
              <div>
                <ItemTitle>Capital: </ItemTitle>
                <span>{country.capital.join(', ') || PLACEHOLDER}</span>
              </div>
            </Column>
            <Column>
              <div>
                <ItemTitle>Top Level Domain: </ItemTitle>
                <span>{country.tld.join(', ')}</span>
              </div>
              <div>
                <ItemTitle>Currencies: </ItemTitle>
                <span>
                  {Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(', ') || PLACEHOLDER}
                </span>
              </div>
              <div>
                <ItemTitle>Languages: </ItemTitle>
                <span>{Object.values(country.languages).join(', ') || PLACEHOLDER}</span>
              </div>
            </Column>
          </Info>
          {!!country.borders.length && (
            <BordersContainer>
              <BordersTitle>Border Countries: </BordersTitle>
              <Borders>
                {country.borders.map((cca3) => {
                  const resolvedCountry = countries.find((_country) => _country.cca3 === cca3)
                  if (!resolvedCountry) {
                    return null
                  }

                  const borderName = resolvedCountry.name.common

                  return <Badge onClick={() => navigate(`/${borderName}`)}>{borderName}</Badge>
                })}
              </Borders>
            </BordersContainer>
          )}
        </InfoContainer>
      </Content>
    </Container>
  ) : null
}
