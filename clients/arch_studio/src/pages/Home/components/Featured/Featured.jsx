import { styled } from 'styled-components'
import { Gallery, LinkButton } from '../../../../components'
import { LINKS } from '../../../../router'
import { featuredProjects } from '../../../../utils'

const Container = styled.div`
  margin-top: 208px;
`

const TitleContainer = styled.div`
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 72px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -2px;
`

export function Featured() {
  return (
    <Container>
      <TitleContainer>
        <Title>Featured</Title>
        <LinkButton to={LINKS.PORTFOLIO}>See All</LinkButton>
      </TitleContainer>
      <Gallery items={featuredProjects} />
    </Container>
  )
}
