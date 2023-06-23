import { styled } from 'styled-components'
import photo from '../../images/photo.jpg'
import person from '../../icons/person.svg'
import { List } from '../List'
import { getExperience } from '../../utils'
import { Button } from '../Button'

const Container = styled.div`
  padding: 20px;
  background: var(--bg-color);
  border-radius: 10px;
  box-shadow: var(--shadow);
  height: fit-content;
`

const Name = styled.div`
  font-size: 17px;
  font-weight: 700;
`

const Title = styled.span`
  font-size: 14px;
`

const SubText = styled.span`
  font-size: 14px;
  color: var(--secondary-text-color);
`

const StyledList = styled(List)`
  margin-top: -16px;

  li:first-child {
    padding-bottom: 80px;

    &:before {
      height: 40px;
      width: 40px;
      background: var(--brand-color);
      margin-left: -43px;
      margin-top: -10px;
    }

    &:after {
      content: '';
      background: url(${person}) no-repeat;
      background-size: 20px 20px;
      width: 20px;
      height: 20px;
      display: block;
      margin-left: -30px;
      margin-top: 0px;
      position: absolute;
    }
  }

  @media only screen and (max-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }
`

const Image = styled.img`
  margin-top: 10px;
  border-radius: 10px;
  height: 400px;

  @media only screen and (max-width: 1000px) {
    height: unset;
    width: 60%;
    margin-left: 20%;
  }
`

const StyledButton = styled(Button)`
  width: fit-content;
`

const Link = styled.a`
  text-decoration: none;
`

export function MainInfo() {
  const experience = getExperience()

  return (
    <Container className="fadeIn">
      <Name>Jaan Toming</Name>
      <SubText>Frontend Developer</SubText>
      <br />
      <Image src={photo} />
      <StyledList>
        <li />
        <li>
          <Title>Name:</Title>
          <SubText> Jaan Toming</SubText>
        </li>
        <li>
          <Title>Experience:</Title>
          <SubText> {experience} years</SubText>
        </li>
        <li>
          <Title>Birthday:</Title>
          <SubText> 29 October 1997</SubText>
        </li>
        <li>
          <Title>Email:</Title>
          <SubText> jtoming@gmail.com</SubText>
        </li>
        <li>
          <Title>Phone:</Title>
          <SubText> +372 5813 9096</SubText>
        </li>
      </StyledList>
      <Link
        href="/cv/CV - Jaan Toming.pdf"
        download
        target="_blank"
      >
        <StyledButton>Download CV</StyledButton>
      </Link>
    </Container>
  )
}
