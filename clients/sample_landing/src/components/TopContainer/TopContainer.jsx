import { styled } from 'styled-components'
import { GetStarted } from '../GetStarted'
import { IllustrationIntro } from '../../icons'

const Container = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 132px;
`

const LeftContent = styled.div`
  padding-top: 50px;
`

const Title = styled.div`
  width: 445px;

  font-size: 56px;
  line-height: 64px;
  letter-spacing: -2.5px;

  color: var(--primary-text-color);

  margin-bottom: 32px;
`

const Description = styled.div`
  width: 370px;

  font-size: 16px;
  line-height: 26px;

  color: var(--secondary-text-color);

  margin-bottom: 40px;
`

export function TopContainer() {
  return (
    <Container>
      <LeftContent>
        <Title>Bring everyone together to build better products.</Title>
        <Description>
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </Description>
        <GetStarted />
      </LeftContent>
      <IllustrationIntro />
    </Container>
  )
}
