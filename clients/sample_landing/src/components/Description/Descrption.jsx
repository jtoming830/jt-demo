import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  padding-bottom: 146px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 60px;
    align-items: center;
  }
`

const Column = styled.div`
  width: 445px;
  margin-right: 125px;

  @media only screen and (max-width: 1200px) {
    text-align: center;
    margin: 0;
  }
`

const Title = styled.div`
  font-size: 40px;
  line-height: 44px;
  color: var(--primary-text-color);
  margin-bottom: 20px;
`

const Text = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: var(--secondary-text-color);
`

const List = styled.div`
  width: 540px;
`

const Item = styled.div`
  margin-bottom: 40px;
`

const ItemTitle = styled.div`
  display: flex;

  font-size: 16px;
  line-height: 32px;
  color: var(--primary-text-color);
  margin-bottom: 20px;
`

const ItemNumber = styled.div`
  padding: 0 24px;
  margin-right: 25px;

  background: var(--button-bg);
  border-radius: 40px;

  color: var(--button-color);
`

const ItemText = styled(Text)`
  margin-left: 95px;
`

export function Description() {
  return (
    <Container>
      <Column>
        <Title>What’s different about Manage?</Title>
        <Text>
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for
          modern digital product teams.{' '}
        </Text>
      </Column>
      <List>
        <Item>
          <ItemTitle>
            <ItemNumber>01</ItemNumber>Track company-wide progress
          </ItemTitle>
          <ItemText>
            See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the
            way done to the smallest of details. Never lose sight of the bigger picture again.
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>
            <ItemNumber>02</ItemNumber>Advanced built-in reports
          </ItemTitle>
          <ItemText>
            Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you
            build out the reports you need to keep key stakeholders informed.
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>
            <ItemNumber>03</ItemNumber>Everything you need in one place
          </ItemTitle>
          <ItemText>
            Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage
            offers an all-in-one team productivity solution.
          </ItemText>
        </Item>
      </List>
    </Container>
  )
}
