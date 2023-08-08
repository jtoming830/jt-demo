import { BetaFooter, Hero } from 'components'
import { PlanPicker, PlansOverview } from './components'

import heroDesktopImg from 'assets/pricing/desktop/hero.jpg'
import heroTabletImg from 'assets/pricing/tablet/hero.jpg'
import heroMobileImg from 'assets/pricing/mobile/hero.jpg'

export function Pricing() {
  return (
    <>
      <Hero
        title="PRICING"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        img={{ desktop: heroDesktopImg, tablet: heroTabletImg, mobile: heroMobileImg }}
        imgSize={{
          desktop: { width: 830, height: 490 },
          tablet: { width: 273, height: 490 },
          mobile: { width: 375, height: 294 }
        }}
        accent
      />
      <PlanPicker />
      <PlansOverview />
      <BetaFooter />
    </>
  )
}
