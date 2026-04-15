import Link from 'next/link'

const BBEventsPage = () => {
  const upcomingEvents = [
    {
      date: 'Sat 19 Apr',
      time: '10:30 am – 12:00 pm',
      title: 'Saturday Morning Social',
      venue: 'The Grind House',
      address: '42 Clarendon St, Nottingham',
      description:
        'Our flagship weekly social. Grab a coffee, meet new people, and enjoy relaxed conversation with the help of our icebreaker cards.',
      spots: 16,
      accent: false,
    },
    {
      date: 'Wed 23 Apr',
      time: '6:00 pm – 7:30 pm',
      title: 'Midweek Wind-Down',
      venue: 'Cartwheel Coffee',
      address: '16 Low Pavement, Nottingham',
      description:
        'A chilled evening session to break up the working week. Small groups, good coffee, honest conversation.',
      spots: 12,
      accent: true,
    },
    {
      date: 'Sat 26 Apr',
      time: '10:30 am – 12:00 pm',
      title: 'Saturday Morning Social',
      venue: 'The Grind House',
      address: '42 Clarendon St, Nottingham',
      description:
        "Another chance to join our Saturday crew. Whether it's your first time or your fiftieth — you're welcome.",
      spots: 16,
      accent: false,
    },
    {
      date: 'Sun 4 May',
      time: '11:00 am – 1:00 pm',
      title: 'Coffee & Walk',
      venue: 'Meet at Blend, Hockley',
      address: '9 Broad St, Nottingham',
      description:
        'Grab a takeaway coffee then join us for a gentle walk through the city. Moving together makes talking easier.',
      spots: 20,
      accent: true,
    },
  ]

  return (
    <>
      {/* ── Hero ── */}
      <section className="scroll-mt-20 w-full py-24 sm:py-32 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full bg-coffee/10 text-coffee">
            Upcoming Socials
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-coffee-dark">
            Find your next social.
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-coffee-dark/70">
            Every Bonded Bean event is free, open to everyone, and designed to
            make real connection easy. Just show up — we&rsquo;ll handle the
            rest.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Pick an event',
                description:
                  'Browse the list below and find a date, time, and venue that works for you.',
              },
              {
                step: '02',
                title: 'Just show up',
                description:
                  'No tickets, no sign-up. Arrive at the venue and look for the Bonded Bean table.',
                accent: true,
              },
              {
                step: '03',
                title: 'Connect',
                description:
                  'We provide conversation cards and a warm welcome. Leave with new connections.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-6"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading text-white shrink-0 ${
                    item.accent ? 'bg-sage' : 'bg-coffee'
                  }`}
                  aria-hidden="true"
                >
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-coffee-dark">
                  {item.title}
                </h3>
                <p className="text-sm text-coffee-dark/70 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Event List ── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
              What&rsquo;s Coming Up
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark leading-tight">
              Upcoming events
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {upcomingEvents.map((event, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl border border-cream hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Date badge */}
                  <div
                    className={`flex flex-col items-center justify-center px-8 py-6 sm:min-w-[140px] ${
                      event.accent ? 'bg-sage/10' : 'bg-coffee/5'
                    }`}
                  >
                    <span
                      className={`font-heading text-lg font-extrabold leading-tight ${
                        event.accent ? 'text-sage' : 'text-coffee'
                      }`}
                    >
                      {event.date}
                    </span>
                    <span className="text-xs text-coffee-dark/60 mt-1">
                      {event.time}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-6 sm:py-6 sm:pr-8">
                    <h3 className="font-heading text-xl font-bold text-coffee-dark mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm font-medium text-coffee mb-2">
                      {event.venue}{' '}
                      <span className="text-coffee-dark/50 font-normal">
                        · {event.address}
                      </span>
                    </p>
                    <p className="text-base text-coffee-dark/70 leading-relaxed mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center text-xs font-semibold text-sage bg-sage/10 px-3 py-1 rounded-full">
                        {event.spots} spots
                      </span>
                      <span className="text-xs text-coffee-dark/50">
                        Free · No sign-up required
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-coffee mb-3">
              Common Questions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-coffee-dark leading-tight">
              Everything you need to know.
            </h2>
          </div>

          <div className="divide-y divide-coffee/10">
            {[
              {
                q: 'Do I need to book or sign up?',
                a: 'Nope! All our events are drop-in. Just turn up at the venue and look for the Bonded Bean table.',
              },
              {
                q: 'Is it really free?',
                a: 'Yes — attending is always free. You just buy your own coffee from the café.',
              },
              {
                q: "What if I don't know anyone?",
                a: "That's the whole point! Most people come alone. We use conversation cards and small groups to make sure nobody feels left out.",
              },
              {
                q: 'What age group is it for?',
                a: 'Our socials are mainly aimed at 18–35 year olds, but everyone is welcome.',
              },
              {
                q: 'Can I bring a friend?',
                a: 'Absolutely. Bring one, bring five — the more the merrier.',
              },
            ].map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="font-heading text-lg font-bold text-coffee-dark mb-2">
                  {faq.q}
                </h3>
                <p className="text-base text-coffee-dark/70 leading-relaxed">
                  {faq.a}
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
            Your next great conversation is waiting.
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-white/75">
            No pressure, no awkwardness — just good people and better coffee.
            We&rsquo;d love to see you at the next one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-coffee-dark hover:bg-cream focus-visible:ring-white"
            >
              Learn About Us
            </Link>
            <Link
              href="/"
              className="text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee rounded text-white/80 hover:text-white underline underline-offset-4"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BBEventsPage
