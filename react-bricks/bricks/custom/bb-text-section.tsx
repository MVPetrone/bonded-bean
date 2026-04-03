import { RichText, Text, types } from 'react-bricks/rsc'

interface BBTextSectionProps {
  sectionLabel: types.TextValue
  title: types.TextValue
  content: types.TextValue
  align: 'left' | 'center'
  backgroundVariant: 'white' | 'cream'
  anchorId: string
}

const BBTextSection: types.Brick<BBTextSectionProps> = ({
  sectionLabel,
  title,
  content,
  align,
  backgroundVariant,
  anchorId,
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <section
      id={anchorId || undefined}
      className={`scroll-mt-20 py-20 px-6 ${
        backgroundVariant === 'cream' ? 'bg-cream' : 'bg-white'
      }`}
    >
      <div className={`max-w-2xl ${alignClass}`}>
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
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark mb-6 leading-tight">
              {props.children}
            </h2>
          )}
          placeholder="Section title..."
        />
        <RichText
          propName="content"
          value={content}
          renderBlock={(props) => (
            <p className="text-base sm:text-lg text-coffee-dark/70 leading-relaxed mb-4">
              {props.children}
            </p>
          )}
          placeholder="Body text..."
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Link,
            types.RichTextFeatures.UnorderedList,
            types.RichTextFeatures.OrderedList,
          ]}
          renderLink={(props) => (
            <a
              href={props.href}
              target={props.target}
              rel={props.rel}
              className="text-coffee underline underline-offset-2 hover:text-coffee-dark transition-colors"
            >
              {props.children}
            </a>
          )}
          renderUL={(props) => (
            <ul className="list-disc pl-5 space-y-2 mb-4 text-coffee-dark/70">
              {props.children}
            </ul>
          )}
          renderOL={(props) => (
            <ol className="list-decimal pl-5 space-y-2 mb-4 text-coffee-dark/70">
              {props.children}
            </ol>
          )}
          renderLI={(props) => (
            <li className="leading-relaxed">{props.children}</li>
          )}
        />
      </div>
    </section>
  )
}

BBTextSection.schema = {
  name: 'bb-text-section',
  label: 'BB Text Section',
  getDefaultProps: () => ({
    sectionLabel: 'About us',
    title: 'Community before commitment.',
    content:
      'Bonded Bean started with a simple belief: that everyone deserves a space to belong. We run weekly socials at Brunel University designed to make real connection easy, low-pressure, and genuinely enjoyable.',
    align: 'left',
    backgroundVariant: 'white',
    anchorId: '',
  }),
  sideEditProps: [
    {
      name: 'align',
      label: 'Text Alignment',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Centre' },
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

export default BBTextSection
