import { RichText, Text, types } from 'react-bricks/rsc'

interface BBCtaProps {
  title: types.TextValue
  subtitle: types.TextValue
  ctaLabel: types.TextValue
  ctaUrl: string
  secondaryLabel: types.TextValue
  secondaryUrl: string
  variant: 'coffee' | 'sage' | 'cream'
  anchorId: string
}

const BBCta: types.Brick<BBCtaProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaUrl,
  secondaryLabel,
  secondaryUrl,
  variant,
  anchorId,
}) => {
  const isDark = variant === 'coffee'
  const isSage = variant === 'sage'

  const bg = isDark ? 'bg-coffee' : isSage ? 'bg-sage' : 'bg-cream'
  const textPrimary = isDark ? 'text-white' : 'text-coffee-dark'
  const textMuted = isDark ? 'text-white/75' : 'text-coffee-dark/70'
  const btnPrimary = isDark
    ? 'bg-white text-coffee-dark hover:bg-cream focus-visible:ring-white'
    : 'bg-coffee text-white hover:bg-coffee-dark focus-visible:ring-coffee'
  const btnSecondary = isDark
    ? 'text-white/80 hover:text-white underline underline-offset-4'
    : 'text-coffee hover:text-coffee-dark underline underline-offset-4'

  return (
    <section
      id={anchorId || undefined}
      className={`scroll-mt-20 py-20 px-6 ${bg}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <h2
              className={`font-heading text-3xl sm:text-4xl font-extrabold leading-tight mb-4 ${textPrimary}`}
            >
              {props.children}
            </h2>
          )}
          placeholder="CTA heading..."
        />
        <RichText
          propName="subtitle"
          value={subtitle}
          renderBlock={(props) => (
            <p className={`text-lg leading-relaxed mb-8 ${textMuted}`}>
              {props.children}
            </p>
          )}
          placeholder="Supporting text..."
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Link,
          ]}
          renderLink={(props) => (
            <a
              href={props.href}
              target={props.target}
              rel={props.rel}
              className={`underline underline-offset-2 ${
                isDark ? 'text-white hover:text-cream' : 'text-coffee hover:text-coffee-dark'
              }`}
            >
              {props.children}
            </a>
          )}
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={ctaUrl || '#'}
            className={`inline-flex items-center px-8 py-4 text-base font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${btnPrimary}`}
          >
            <Text
              propName="ctaLabel"
              value={ctaLabel}
              renderBlock={(props) => <span>{props.children}</span>}
              placeholder="Button label..."
            />
          </a>
          <a
            href={secondaryUrl || '#'}
            className={`text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee rounded ${btnSecondary}`}
          >
            <Text
              propName="secondaryLabel"
              value={secondaryLabel}
              renderBlock={(props) => <span>{props.children}</span>}
              placeholder="Secondary link..."
            />
          </a>
        </div>
      </div>
    </section>
  )
}

BBCta.schema = {
  name: 'bb-cta',
  label: 'BB Call to Action',
  getDefaultProps: () => ({
    title: 'Ready to show up?',
    subtitle:
      'Come to a Bonded Bean Social — no sign-up, no pressure, just good conversation and a warm space to be yourself.',
    ctaLabel: 'Join Our Next Social',
    ctaUrl: '/events',
    secondaryLabel: 'Learn more about us',
    secondaryUrl: '/about',
    variant: 'coffee',
    anchorId: '',
  }),
  sideEditProps: [
    {
      name: 'variant',
      label: 'Background Variant',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'coffee', label: 'Coffee (dark)' },
          { value: 'sage', label: 'Sage Green' },
          { value: 'cream', label: 'Cream (light)' },
        ],
      },
    },
    {
      name: 'ctaUrl',
      label: 'Primary Button URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'secondaryUrl',
      label: 'Secondary Link URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'anchorId',
      label: 'Section Anchor ID',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default BBCta
