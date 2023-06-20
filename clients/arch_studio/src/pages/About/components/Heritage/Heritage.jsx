import { styled } from 'styled-components'
import img from '../../../../assets/about/desktop/image-heritage.jpg'
import { Underline } from '../../../../components'

const Container = styled.div`
  display: flex;
  gap: 124px;
  margin-top: 200px;
`

const Title = styled.h2`
  margin-bottom: 54px;
`

const Text = styled.div`
  color: var(--dark-grey);
`

const Image = styled.div`
  background: url(${img}) no-repeat;
  background-blend-mode: darken;
  flex-shrink: 0;
  width: 540px;
  height: 568px;
`

export function Heritage() {
  return (
    <Container>
      <div>
        <Underline marginBottom={84} />
        <Title>{'Our\nHeritage'}</Title>
        <Text>
          <p>
            Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail
            turned Arch into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with
            their surroundings. We consider every detail from every surrounding element to inform our designs.{' '}
          </p>
          <p>Our small team of world-class professionals provides input on every project.</p>
        </Text>
      </div>
      <Image />
    </Container>
  )
}
