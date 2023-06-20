import { styled } from 'styled-components'
import { Gallery, LinkButton } from 'components'
import { LINKS } from 'router'
import { featuredProjects } from 'utils'

const Container = styled.div`
  margin-top: 208px;
`

const TitleContainer = styled.div`
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
`

export function Featured() {
  return (
    <Container>
      <TitleContainer>
        <h2>Featured</h2>
        <LinkButton to={LINKS.PORTFOLIO}>See All</LinkButton>
      </TitleContainer>
      <Gallery items={featuredProjects} />
    </Container>
  )
}
