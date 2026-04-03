import { types } from 'react-bricks/rsc'

// import emailUITheme from '@reactbricks/email-ui-rsc' <<EMAIL_BRICKS>>
import reactBricksUITheme from '@reactbricks/reactbricks-ui-rsc'

import BBHero from './custom/bb-hero'
import BBStatItem from './custom/bb-stat-item'
import BBStats from './custom/bb-stats'
import BBFeatureCard from './custom/bb-feature-card'
import BBFeatures from './custom/bb-features'
import BBCta from './custom/bb-cta'
import BBTextSection from './custom/bb-text-section'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  // emailUITheme, // React Bricks Email UI <<EMAIL_BRICKS>>
  {
    themeName: 'Bonded Bean',
    categories: [
      {
        categoryName: 'Sections',
        bricks: [BBHero, BBStats, BBFeatures, BBCta, BBTextSection],
      },
      {
        categoryName: 'Content items',
        bricks: [BBStatItem, BBFeatureCard],
      },
    ],
  },
]

export default bricks
