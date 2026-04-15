const BBAboutPage = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="scroll-mt-20 w-full py-24 sm:py-32 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full bg-coffee/10 text-coffee">
            About Us
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-coffee-dark">
            We&rsquo;re on a mission to end loneliness.
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-coffee-dark/70">
            Bonded Bean started with a simple observation: too many young people
            feel disconnected, even in a hyper-connected world. We decided to do
            something about it — one cup of coffee at a time.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
            Our Story
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark mb-6 leading-tight">
            From a kitchen table idea to a growing movement.
          </h2>
          <div className="space-y-5 text-lg text-coffee-dark/70 leading-relaxed">
            <p>
              Bonded Bean was born out of the belief that real connection
              shouldn&rsquo;t require an app, a subscription, or an awkward
              networking event. We wanted to create spaces where people could
              simply show up, be themselves, and leave feeling a little less
              alone.
            </p>
            <p>
              What began as informal coffee meetups in local cafés has grown into
              a community of hundreds — people who believe that genuine
              conversation over a good cup of coffee can change everything.
            </p>
            <p>
              Every Bonded Bean Social is free to attend, open to everyone, and
              carefully designed to make connection feel effortless. We partner
              with independent cafés, use conversation prompts to break the ice,
              and keep groups small enough for real dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark mb-4 leading-tight">
              Our values guide everything we do.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '☕',
                title: 'Warmth First',
                description:
                  'Every space we create is designed to feel welcoming. No judgment, no pressure — just warmth.',
              },
              {
                icon: '🤝',
                title: 'Radical Inclusivity',
                description:
                  'Our socials are open to everyone, regardless of background, identity, or how extroverted you are.',
                accent: 'sage' as const,
              },
              {
                icon: '💬',
                title: 'Real Conversation',
                description:
                  'We champion depth over small talk. Our formats are designed to help people open up naturally.',
              },
              {
                icon: '🏘️',
                title: 'Local Roots',
                description:
                  'We partner with independent cafés and community spaces because great places make great connections.',
                accent: 'sage' as const,
              },
              {
                icon: '🌱',
                title: 'Grow Together',
                description:
                  'Connection is the starting point. We want people to build friendships, confidence, and a sense of belonging.',
              },
              {
                icon: '✨',
                title: 'Keep It Simple',
                description:
                  'No apps, no algorithms. Just people, coffee, and conversation. Sometimes the simplest ideas are the most powerful.',
                accent: 'sage' as const,
              },
            ].map((value, i) => (
              <article
                key={i}
                className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-cream hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${
                    value.accent === 'sage' ? 'bg-sage/20' : 'bg-coffee/10'
                  }`}
                  aria-hidden="true"
                >
                  {value.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-coffee-dark leading-snug">
                  {value.title}
                </h3>
                <p className="text-base text-coffee-dark/70 leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
              Our Impact
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark max-w-xl mx-auto leading-tight">
              Small gatherings, big difference.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-coffee/10">
            {[
              { number: '500+', label: 'people connected at our socials' },
              { number: '50+', label: 'socials hosted so far', accent: 'sage' as const },
              { number: '12', label: 'café partners across the city' },
              { number: '100%', label: 'free to attend, always', accent: 'sage' as const },
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

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-coffee">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight mb-4 text-white">
            Come find your people.
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-white/75">
            Whether you&rsquo;re new in town, between friend groups, or just
            looking for something more meaningful — there&rsquo;s a seat at our
            table for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <link
              href="/events"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-coffee-dark hover:bg-cream focus-visible:ring-white"
            >
              See Upcoming Socials
            </link>
            <link
              href="/"
              className="text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee rounded text-white/80 hover:text-white underline underline-offset-4"
            >
              Back to Home
            </link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BBAboutPage
