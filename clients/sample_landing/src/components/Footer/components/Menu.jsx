import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 1200px) {
    gap: 100px;
  }

  @media only screen and (max-width: 900px) {
    gap: 40px;
  }
`

const MenuColumn = styled.div`
  width: 255px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (max-width: 1200px) {
    width: 100px;
  }
`

const Item = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  width: fit-content;

  color: var(--footer-text-color);
  cursor: pointer;

  transition: 0.3s ease;
  &:hover {
    color: var(--footer-text-hovered-color);
  }
`

export function Menu() {
  return (
    <Container>
      <MenuColumn>
        <Item>Home</Item>
        <Item>Pricing</Item>
        <Item>Products</Item>
        <Item>About Us</Item>
      </MenuColumn>
      <MenuColumn>
        <Item>Careers</Item>
        <Item>Community</Item>
        <Item>Privacy Policy</Item>
      </MenuColumn>
    </Container>
  )
}
