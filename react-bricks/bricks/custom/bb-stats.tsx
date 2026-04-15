import { Repeater, Text, types } from 'react-bricks/rsc'

interface BBStatsProps {
  sectionLabel: types.TextValue
  title: types.TextValue
  backgroundVariant: 'cream' | 'white'
  anchorId: string
  items: types.RepeaterItems
}

const BBStats: types.Brick<BBStatsProps> = ({
  sectionLabel,
  title,
  backgroundVariant,
  anchorId,
  items,
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark max-w-xl mx-auto leading-tight">
                {props.children}
              </h2>
            )}
            placeholder="Section title..."
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-coffee/10">
          <Repeater propName="items" items={items} />
        </div>
      </div>
    </section>
  )
}

BBStats.schema = {
  name: 'bb-stats',
  label: 'BB Stats',
  getDefaultProps: () => ({
    sectionLabel: 'The Problem',
    title: 'Loneliness among young people is rising.',
    backgroundVariant: 'cream',
    anchorId: '',
  }),
  repeaterItems: [
    {
      name: 'items',
      itemType: 'bb-stat-item',
      itemLabel: 'Stat',
      min: 1,
      max: 8,
    },
  ],
  sideEditProps: [
    {
      name: 'backgroundVariant',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'cream', label: 'Cream' },
          { value: 'white', label: 'White' },
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

export default BBStats
