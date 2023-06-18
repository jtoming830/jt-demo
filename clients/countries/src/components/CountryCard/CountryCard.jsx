import { styled } from 'styled-components'
import { formatPopulation } from '../../utils'

const Container = styled.div`
  width: 264px;
  height: 336px;
  box-shadow: 0px 0px 7px 2px #00000007;
  border-radius: 5px;
  background-color: var(--bg-color);

  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`

const Image = styled.img`
  height: 160px;
  width: 264px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 7px 2px #00000007;
`

const Content = styled.div`
  margin-left: 24px;
`

const Name = styled.div`
  margin-top: 24px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 800;
`

const Details = styled.div`
  margin-top: 16px;

  div {
    font-size: 14px;
    line-height: 16px;
  }

  div + div {
    margin-top: 8px;
  }
`

const ItemTitle = styled.span`
  font-weight: 700;
`

export function CountryCard({ capital, flags, name, population, region, onClick }) {
  return (
    <Container onClick={onClick}>
      <Image src={flags.png} />
      <Content>
        <Name>{name.common}</Name>
        <Details>
          <div>
            <ItemTitle>Population: </ItemTitle>
            <span>{formatPopulation(population)}</span>
          </div>
          <div>
            <ItemTitle>Capital: </ItemTitle>
            <span>{capital?.join(', ') || 'N/A'}</span>
          </div>
          <div>
            <ItemTitle>Region: </ItemTitle>
            <span>{region}</span>
          </div>
        </Details>
      </Content>
    </Container>
  )
}
