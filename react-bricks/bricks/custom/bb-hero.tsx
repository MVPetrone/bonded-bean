import { RichText, Text, types } from 'react-bricks/rsc'

interface BBHeroProps {
  badge: types.TextValue
  headline: types.TextValue
  subheadline: types.TextValue
  ctaLabel: types.TextValue
  ctaUrl: string
  backgroundVariant: 'cream' | 'coffee'
}

const BBHero: types.Brick<BBHeroProps> = ({
  badge,
  headline,
  subheadline,
  ctaLabel,
  ctaUrl,
  backgroundVariant,
}) => {
  const isDark = backgroundVariant === 'coffee'

  return (
    <section
      id="home"
      className={`scroll-mt-20 w-full py-24 sm:py-32 px-6 ${
        isDark ? 'bg-coffee' : 'bg-cream'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <Text
          propName="badge"
          value={badge}
          renderBlock={(props) => (
            <span
              className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full ${
                isDark
                  ? 'bg-white/20 text-white'
                  : 'bg-coffee/10 text-coffee'
              }`}
            >
              {props.children}
            </span>
          )}
          placeholder="Badge label..."
        />

        <Text
          propName="headline"
          value={headline}
          renderBlock={(props) => (
            <h1
              className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 ${
                isDark ? 'text-white' : 'text-coffee-dark'
              }`}
            >
              {props.children}
            </h1>
          )}
          placeholder="Your headline..."
        />

        <RichText
          propName="subheadline"
          value={subheadline}
          renderBlock={(props) => (
            <p
              className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto ${
                isDark ? 'text-white/80' : 'text-coffee-dark/70'
              }`}
            >
              {props.children}
            </p>
          )}
          placeholder="Mission statement..."
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
          ]}
        />

        <a
          href={ctaUrl || '#'}
          className={`inline-flex items-center px-8 py-4 text-base font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isDark
              ? 'bg-white text-coffee-dark hover:bg-cream focus-visible:ring-white'
              : 'bg-coffee text-white hover:bg-coffee-dark focus-visible:ring-coffee'
          }`}
        >
          <Text
            propName="ctaLabel"
            value={ctaLabel}
            renderBlock={(props) => <span>{props.children}</span>}
            placeholder="Button label..."
          />
        </a>
      </div>
    </section>
  )
}

BBHero.schema = {
  name: 'bb-hero',
  label: 'BB Hero',
  getDefaultProps: () => ({
    badge: 'Bonded Bean',
    headline: 'A place to connect, belong, and be yourself.',
    subheadline:
      'We create warm, low-pressure spaces for real-world connection — because loneliness among young people is a problem we can solve, together.',
    ctaLabel: 'Join Our Socials',
    ctaUrl: '/events',
    backgroundVariant: 'cream',
  }),
  sideEditProps: [
    {
      name: 'backgroundVariant',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'cream', label: 'Cream (light)' },
          { value: 'coffee', label: 'Coffee Brown (dark)' },
        ],
      },
    },
    {
      name: 'ctaUrl',
      label: 'CTA Button URL',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default BBHero
