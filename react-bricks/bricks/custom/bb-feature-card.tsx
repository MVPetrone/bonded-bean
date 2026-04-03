import { RichText, Text, types } from 'react-bricks/rsc'

interface BBFeatureCardProps {
  stepNumber: string
  title: types.TextValue
  description: types.TextValue
  accentVariant: 'coffee' | 'sage'
}

const BBFeatureCard: types.Brick<BBFeatureCardProps> = ({
  stepNumber,
  title,
  description,
  accentVariant,
}) => {
  return (
    <article className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-cream hover:shadow-md transition-shadow duration-200">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading text-white shrink-0 ${
          accentVariant === 'sage' ? 'bg-sage' : 'bg-coffee'
        }`}
        aria-hidden="true"
      >
        {stepNumber || '●'}
      </div>
      <Text
        propName="title"
        value={title}
        renderBlock={(props) => (
          <h3 className="font-heading text-lg font-bold text-coffee-dark leading-snug">
            {props.children}
          </h3>
        )}
        placeholder="Feature title..."
      />
      <RichText
        propName="description"
        value={description}
        renderBlock={(props) => (
          <p className="text-base text-coffee-dark/70 leading-relaxed">
            {props.children}
          </p>
        )}
        placeholder="Feature description..."
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
        ]}
      />
    </article>
  )
}

BBFeatureCard.schema = {
  name: 'bb-feature-card',
  label: 'Feature Card',
  getDefaultProps: () => ({
    stepNumber: '01',
    title: 'Show up as you are',
    description:
      'No pressure, no agenda — just come along. Our socials are relaxed, structured enough to feel easy, and open to everyone.',
    accentVariant: 'coffee',
  }),
  sideEditProps: [
    {
      name: 'stepNumber',
      label: 'Step / Number Label',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'accentVariant',
      label: 'Accent Colour',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'coffee', label: 'Coffee Brown' },
          { value: 'sage', label: 'Sage Green' },
        ],
      },
    },
  ],
}

export default BBFeatureCard
