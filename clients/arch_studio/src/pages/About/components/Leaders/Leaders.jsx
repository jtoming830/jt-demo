import { styled } from 'styled-components'
import { items } from './items'
import { IconLinkedin, IconTwitter } from '../../../../icons'

const Container = styled.div`
  display: flex;
  gap: 140px;
  margin-top: 200px;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 72px;
  line-height: 64px;
  letter-spacing: -2px;
  font-weight: 700;
  white-space: pre;
`

const LeadersCards = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  width: 730px;
`

const CardContainer = styled.div``

const Image = styled.div`
  height: 320px;
  width: 350px;

  background: url(${(props) => props.$img}) no-repeat;

  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 0 120px;

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

const CardTitle = styled.div`
  margin-top: 15px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
`

const CardText = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  opacity: 0.75;
`

export function Leaders() {
  return (
    <Container>
      <Title>{'The\nLeaders'}</Title>
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
