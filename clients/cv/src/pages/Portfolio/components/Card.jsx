import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Container = styled.div`
  width: 300px;
  height: 420px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 4px 0 var(--border-color);
  background: var(--popup-bg-color);

  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1000px) {
    width: 280px;
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`

const Content = styled.div`
  padding: 25px;
`

const Title = styled.div`
  font-size: 22px;
  color: var(--primary-text-color);
`

const Text = styled.div`
  margin-top: 25px;
  color: var(--secondary-text-color);
`

export function Card({ img, link, title, text }) {
  const { origin } = document.location

  return (
    <StyledLink
      to={`${origin}/${link}`}
      reloadDocument
    >
      <Container>
        <Image src={img} />
        <Content>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Content>
      </Container>
    </StyledLink>
  )
}
