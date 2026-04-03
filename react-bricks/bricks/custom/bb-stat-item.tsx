import { Text, types } from 'react-bricks/rsc'

interface BBStatItemProps {
  number: types.TextValue
  label: types.TextValue
  accent: 'coffee' | 'sage'
}

const BBStatItem: types.Brick<BBStatItemProps> = ({ number, label, accent }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <Text
        propName="number"
        value={number}
        renderBlock={(props) => (
          <div
            className={`font-heading text-4xl sm:text-5xl font-extrabold mb-2 leading-none ${
              accent === 'sage' ? 'text-sage' : 'text-coffee'
            }`}
          >
            {props.children}
          </div>
        )}
        placeholder="1 in 4"
      />
      <Text
        propName="label"
        value={label}
        renderBlock={(props) => (
          <p className="text-sm sm:text-base text-coffee-dark/70 max-w-[160px] leading-snug">
            {props.children}
          </p>
        )}
        placeholder="Stat description..."
      />
    </div>
  )
}

BBStatItem.schema = {
  name: 'bb-stat-item',
  label: 'Stat Item',
  getDefaultProps: () => ({
    number: '1 in 4',
    label: 'young people feel lonely most of the time',
    accent: 'coffee',
  }),
  sideEditProps: [
    {
      name: 'accent',
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

export default BBStatItem
