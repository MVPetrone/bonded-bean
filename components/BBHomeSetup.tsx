import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Go to the editor',
    description: (
      <>
        Visit{' '}
        <Link
          href="/admin"
          className="text-coffee underline underline-offset-2 hover:text-coffee-dark transition-colors font-medium"
        >
          /admin
        </Link>{' '}
        and log in, then open the editor.
      </>
    ),
  },
  {
    number: '2',
    title: 'Create a new page',
    description: (
      <>
        Click <strong>Add page</strong>, set the page type to <strong>page</strong>,
        and set the slug to <code className="bg-cream px-1.5 py-0.5 rounded text-sm font-mono">/</code>.
      </>
    ),
  },
  {
    number: '3',
    title: 'Add your Bonded Bean blocks',
    description: (
      <>
        From the <strong>Bonded Bean › Sections</strong> category in the sidebar,
        add <strong>BB Hero</strong>, <strong>BB Stats</strong>,{' '}
        <strong>BB Features</strong>, and <strong>BB Call to Action</strong> in order.
      </>
    ),
  },
  {
    number: '4',
    title: 'Publish',
    description:
      'Click Publish. Your homepage will appear here at / and will be live.',
  },
]

const BBHomeSetup = () => {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full">
        {/* Logo mark */}
        <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-8">
          <img
            src="/logo.png"
            alt="Bonded Bean"
            className="w-10 h-10 object-contain"
          />
        </div>

        <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
          Almost there
        </span>
        <h1 className="font-heading text-4xl font-extrabold text-coffee-dark leading-tight mb-4">
          Build your homepage in the editor.
        </h1>
        <p className="text-coffee-dark/70 text-lg leading-relaxed mb-10">
          Your Bonded Bean bricks are ready. Follow the steps below to compose
          and publish your homepage — no code needed.
        </p>

        <ol className="space-y-6 mb-10">
          {steps.map((step) => (
            <li key={step.number} className="flex gap-4">
              <div
                className="w-8 h-8 rounded-full bg-coffee text-white text-sm font-bold font-heading flex items-center justify-center shrink-0 mt-0.5"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div>
                <p className="font-semibold text-coffee-dark mb-0.5">
                  {step.title}
                </p>
                <p className="text-coffee-dark/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <Link
          href="/admin"
          className="inline-flex items-center px-7 py-3.5 bg-coffee text-white font-semibold rounded-full hover:bg-coffee-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2"
        >
          Open the editor →
        </Link>
      </div>
    </main>
  )
}

export default BBHomeSetup
