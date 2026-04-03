import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/bonded.bean' },
  { label: 'TikTok', href: 'https://tiktok.com/@bonded.bean' },
]

const BBFooter = () => {
  return (
    <footer className="bg-coffee-dark text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-heading text-sm font-extrabold leading-none">
                  BB
                </span>
              </span>
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                Bonded Bean
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Creating warm, low-pressure spaces for real-world connection — one
              cup of coffee at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
              Follow Along
            </h3>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} Bonded Bean. All rights reserved.</span>
          <span>Built with coffee and care.</span>
        </div>
      </div>
    </footer>
  )
}

export default BBFooter
