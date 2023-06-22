import { styled } from 'styled-components'
import { GetStarted } from '../GetStarted'
import { IllustrationIntro } from '../../icons'

const Container = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 132px;
  width: fit-content;

  @media only screen and (max-width: 1200px) {
    padding-top: 20px;
    margin: auto;
    flex-direction: column-reverse;
    align-items: center;
  }
`

const LeftContent = styled.div`
  padding-top: 50px;
  width: fit-content;

  @media only screen and (max-width: 1200px) {
    padding-top: 20px;
    text-align: center;
  }
`

const Title = styled.div`
  width: 445px;

  font-size: 56px;
  line-height: 64px;
  letter-spacing: -2.5px;
  font-weight: 700;

  color: var(--primary-text-color);

  margin-bottom: 32px;

  @media only screen and (max-width: 1200px) {
    padding-top: 0;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -1px;
  }
`

const Description = styled.div`
  width: 370px;

  font-size: 16px;
  line-height: 26px;

  color: var(--secondary-text-color);

  margin-bottom: 40px;

  @media only screen and (max-width: 1200px) {
    margin: 40px auto;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

const StyledGetStarted = styled(GetStarted)`
  @media only screen and (max-width: 1200px) {
    margin: 0 auto;
  }
`

const StyledIllustrationIntro = styled(IllustrationIntro)`
  width: 100%;
`

export function TopContainer() {
  return (
    <Container>
      <LeftContent>
        <Title>Bring everyone together to build better products.</Title>
        <Description>
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </Description>
        <StyledGetStarted />
      </LeftContent>
      <StyledIllustrationIntro />
    </Container>
  )
}
