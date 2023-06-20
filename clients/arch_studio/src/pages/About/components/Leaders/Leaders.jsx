import { styled } from 'styled-components'
import { items } from './items'
import { IconLinkedin, IconTwitter } from '../../../../icons'

const Container = styled.div`
  display: flex;
  gap: 140px;
  margin-top: 200px;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 50px;
  }
`

const LeadersCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 730px;
  row-gap: 64px;

  @media only screen and (max-width: 1200px) {
    width: var(--content-width);
    row-gap: 100px;
  }
`

const CardContainer = styled.div``

const Image = styled.div`
  height: 320px;
  width: 350px;

  @media only screen and (max-width: 1200px) {
    height: 256px;
    width: 280px;
  }

  background: url(${(props) => props.$img}) no-repeat;
  background-size: contain;

  color: var(--white);

  display: flex;
  justify-content: center;
  gap: 32px;
  align-items: center;

  cursor: pointer;

  transition: 0.5s ease;

  svg {
    opacity: 0;
    transition: 0.5s ease;
  }

  &:hover {
    background-color: var(--image-darken-color);
    background-blend-mode: darken;

    svg {
      opacity: 1;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

const CardTitle = styled.h3`
  margin-top: 15px;
`

const CardText = styled.div`
  opacity: 0.75;
`

export function Leaders() {
  return (
    <Container>
      <h2>{'The\nLeaders'}</h2>
      <LeadersCards>
        {items.map(({ key, title, img, text }) => (
          <CardContainer key={key}>
            <Image $img={img}>
              <IconLinkedin />
              <IconTwitter />
            </Image>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
          </CardContainer>
        ))}
      </LeadersCards>
    </Container>
  )
}
