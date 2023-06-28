import { Accent } from '../Accent'
import { LinkButton } from '../LinkButton'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 25vw;
  height: calc(500 / 360 * 25vw);
  background: linear-gradient(#00000000, #000000a8), url(${(props) => props.$img}) no-repeat;
  background-size: cover;
  background-blend-mode: darken;

  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: translateY(-24px);
  }
`

const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  box-sizing: border-box;
`

const Description = styled.div`
  color: var(--white);

  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
`

const Date = styled.h4`
  font-weight: 400;
  letter-spacing: 0;
  font-size: 13px;
`

const Title = styled.h3``

const Author = styled.h4`
  font-weight: 400;
  letter-spacing: 0;
  font-size: 13px;
`

const StyledLinkButton = styled(LinkButton)`
  width: 100%;
  justify-content: space-between;
`

const StyledAccent = styled(Accent)`
  opacity: 0;
  transition: 0.5s ease;

  :hover > & {
    opacity: 1;
  }
`

export function Gallery({ items, hideDate }) {
  return (
    <Container>
      {items.map(({ img, date, title, author }) => (
        <Card $img={img}>
          <CardContent>
            <Description>
              {!hideDate && <Date>{date}</Date>}
              <Title>{title}</Title>
              <Author>by {author}</Author>
            </Description>
            <StyledLinkButton light>Read Story</StyledLinkButton>
          </CardContent>
          <StyledAccent />
        </Card>
      ))}
    </Container>
  )
}
