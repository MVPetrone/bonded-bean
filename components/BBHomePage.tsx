import Link from 'next/link'

const BBHomePage = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="scroll-mt-20 w-full py-24 sm:py-32 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full bg-coffee/10 text-coffee">
            Bonded Bean
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-coffee-dark">
            A place to connect, belong, and be yourself.
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-coffee-dark/70">
            We create warm, low-pressure spaces for real-world connection —
            because loneliness among young people is a problem we can solve,
            together.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-coffee text-white hover:bg-coffee-dark focus-visible:ring-coffee"
          >
            Join Our Socials
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="scroll-mt-20 py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
              The Problem
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark max-w-xl mx-auto leading-tight">
              Loneliness among young people is rising.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-coffee/10">
            {[
              { number: '1 in 4', label: 'young people feel lonely most of the time' },
              { number: '58%', label: 'say they feel like a stranger to those around them', accent: 'sage' as const },
              { number: '22%', label: 'say they have no close friends at all' },
              { number: '3×', label: 'lonelier than older generations', accent: 'sage' as const },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-6 py-8">
                <div
                  className={`font-heading text-4xl sm:text-5xl font-extrabold mb-2 leading-none ${
                    stat.accent === 'sage' ? 'text-sage' : 'text-coffee'
                  }`}
                >
                  {stat.number}
                </div>
                <p className="text-sm sm:text-base text-coffee-dark/70 max-w-[160px] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="scroll-mt-20 py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
              How it works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark mb-4 leading-tight">
              Community before commitment.
            </h2>
            <p className="text-lg text-coffee-dark/70 max-w-xl mx-auto">
              Bonded Bean Socials are designed to make connection easy — for
              everyone.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Show up as you are',
                description:
                  'No pressure, no agenda — just come along. Our socials are relaxed, structured enough to feel easy, and open to everyone.',
              },
              {
                step: '02',
                title: 'Meet over great coffee',
                description:
                  'We partner with independent cafés so every social starts with proper coffee and a comfortable, welcoming venue.',
                accent: 'sage' as const,
              },
              {
                step: '03',
                title: 'Leave with real connections',
                description:
                  'Conversation cards, small-group formats, and a no-phones ethos make it easy to actually get to know people.',
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-cream hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading text-white shrink-0 ${
                    feature.accent === 'sage' ? 'bg-sage' : 'bg-coffee'
                  }`}
                  aria-hidden="true"
                >
                  {feature.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-coffee-dark leading-snug">
                  {feature.title}
                </h3>
                <p className="text-base text-coffee-dark/70 leading-relaxed">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Text Section ── */}
      <section className="scroll-mt-20 py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
            Our Mission
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark mb-6 leading-tight">
            Connection shouldn&rsquo;t be this hard.
          </h2>
          <p className="text-lg text-coffee-dark/70 leading-relaxed">
            Bonded Bean exists because we believe no one should have to navigate
            life alone. We&rsquo;re building a movement around one simple idea:
            that a cup of coffee and honest conversation can change someone&rsquo;s
            week — maybe even their life. Every social we host is free to attend,
            inclusive by design, and focused on what matters most — being human,
            together.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="scroll-mt-20 py-20 px-6 bg-coffee">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight mb-4 text-white">
            Ready to show up?
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-white/75">
            Come to a Bonded Bean Social — no sign-up, no pressure, just good
            conversation and a warm space to be yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/events"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-coffee-dark hover:bg-cream focus-visible:ring-white"
            >
              Join Our Next Social
            </Link>
            <Link
              href="/about"
              className="text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee rounded text-white/80 hover:text-white underline underline-offset-4"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BBHomePage
