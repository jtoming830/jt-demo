import { BetaFooter, FeaturesOverview, Hero } from 'components'
import heroDesktopImg from 'assets/features/desktop/hero.jpg'
import heroTabletImg from 'assets/features/tablet/hero.jpg'
import heroMobileImg from 'assets/features/mobile/hero.jpg'
import { features } from 'features'
import { styled } from 'styled-components'

const StyledFeaturesOverview = styled(FeaturesOverview)`
  margin: 160px auto;

  @media only screen and (width: 1200px) {
    margin: 112px auto;
    gap: 72px 10px;
    width: 690px;
  }
`

export function Features() {
  return (
    <>
      <Hero
        title="FEATURES"
        text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        img={{ desktop: heroDesktopImg, tablet: heroTabletImg, mobile: heroMobileImg }}
        imgSize={{
          desktop: { width: 830, height: 490 },
          tablet: { width: 273, height: 490 },
          mobile: { width: 375, height: 294 }
        }}
        accent
      />
      <StyledFeaturesOverview items={features} />
      <BetaFooter />
    </>
  )
}
