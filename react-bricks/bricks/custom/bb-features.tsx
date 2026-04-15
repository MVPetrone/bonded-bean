import { Repeater, Text, types } from 'react-bricks/rsc'

interface BBFeaturesProps {
  sectionLabel: types.TextValue
  title: types.TextValue
  subtitle: types.TextValue
  backgroundVariant: 'cream' | 'white'
  columns: '2' | '3'
  anchorId: string
  cards: types.RepeaterItems
}

const BBFeatures: types.Brick<BBFeaturesProps> = ({
  sectionLabel,
  title,
  subtitle,
  backgroundVariant,
  columns,
  anchorId,
  cards,
}) => {
  return (
    <section
      id={anchorId || undefined}
      className={`scroll-mt-20 py-20 px-6 ${
        backgroundVariant === 'white' ? 'bg-white' : 'bg-cream'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Text
            propName="sectionLabel"
            value={sectionLabel}
            renderBlock={(props) => (
              <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
                {props.children}
              </span>
            )}
            placeholder="Section label..."
          />
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark mb-4 leading-tight">
                {props.children}
              </h2>
            )}
            placeholder="Section title..."
          />
          <Text
            propName="subtitle"
            value={subtitle}
            renderBlock={(props) => (
              <p className="text-lg text-coffee-dark/70 max-w-xl mx-auto">
                {props.children}
              </p>
            )}
            placeholder="Section subtitle..."
          />
        </div>

        <div
          className={`grid gap-6 ${
            columns === '2'
              ? 'sm:grid-cols-2'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
<<<<<<< HEAD
          <Repeater propName="cards" items={[]} />
=======
          <Repeater propName="cards" items={cards} />
>>>>>>> attempt-2
        </div>
      </div>
    </section>
  )
}

BBFeatures.schema = {
  name: 'bb-features',
  label: 'BB Features',
  getDefaultProps: () => ({
    sectionLabel: 'How it works',
    title: 'Community before commitment.',
    subtitle:
      'Bonded Bean Socials are designed to make connection easy — for everyone.',
    backgroundVariant: 'white',
    columns: '3',
    anchorId: '',
  }),
  repeaterItems: [
    {
      name: 'cards',
      itemType: 'bb-feature-card',
      itemLabel: 'Feature',
      min: 1,
      max: 9,
    },
  ],
  sideEditProps: [
    {
      name: 'columns',
      label: 'Grid Columns',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '2', label: '2 Columns' },
          { value: '3', label: '3 Columns' },
        ],
      },
    },
    {
      name: 'backgroundVariant',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'white', label: 'White' },
          { value: 'cream', label: 'Cream' },
        ],
      },
    },
    {
      name: 'anchorId',
      label: 'Section Anchor ID',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default BBFeatures
