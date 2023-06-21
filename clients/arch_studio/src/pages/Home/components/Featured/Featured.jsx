import { styled } from 'styled-components'
import { Gallery, LinkButton } from 'components'
import { LINKS } from 'router'
import { featuredProjects } from 'utils'

const Container = styled.div`
  margin-top: 208px;

  @media only screen and (max-width: 600px) {
    margin-top: 74px;
  }
`

const TitleContainer = styled.div`
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin: 0 32px 40px;
  }
`

const StyledLinkButton = styled(LinkButton)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export function Featured() {
  return (
    <Container>
      <TitleContainer>
        <h2>Featured</h2>
        <StyledLinkButton to={LINKS.PORTFOLIO}>See All</StyledLinkButton>
      </TitleContainer>
      <Gallery items={featuredProjects} />
    </Container>
  )
}
