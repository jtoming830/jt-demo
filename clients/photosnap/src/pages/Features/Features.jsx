import { BetaFooter, FeaturesOverview, Hero } from 'components'
import heroImg from 'assets/features/desktop/hero.jpg'
import { features } from 'features'
import { styled } from 'styled-components'

const StyledFeaturesOverview = styled(FeaturesOverview)`
  margin: 160px auto;
`

export function Features() {
  return (
    <>
      <Hero
        title="FEATURES"
        text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        img={{ desktop: heroImg }}
        imgSize={{ width: 830, height: 490 }}
        accent
      />
      <StyledFeaturesOverview items={features} />
      <BetaFooter />
    </>
  )
}
