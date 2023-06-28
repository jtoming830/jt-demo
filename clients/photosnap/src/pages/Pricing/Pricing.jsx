import { BetaFooter, Hero } from 'components'
import heroImg from 'assets/pricing/desktop/hero.jpg'
import { PlanPicker, PlansOverview } from './components'

export function Pricing() {
  return (
    <>
      <Hero
        title="PRICING"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        img={{ desktop: heroImg }}
        imgSize={{ width: 830, height: 490 }}
        accent
      />
      <PlanPicker />
      <PlansOverview />
      <BetaFooter />
    </>
  )
}
