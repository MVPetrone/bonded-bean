'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
]

const BBNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80 border-b border-coffee/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo / wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee rounded"
        >
          <span className="w-8 h-8 rounded-full bg-coffee flex items-center justify-center">
            <span className="text-white font-heading text-sm font-extrabold leading-none">
              BB
            </span>
          </span>
          <span className="font-heading text-lg font-bold text-coffee-dark tracking-tight group-hover:text-coffee transition-colors">
            Bonded Bean
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-coffee-dark/80 hover:text-coffee transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/events"
          className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-coffee text-white hover:bg-coffee-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coffee"
        >
          Join a Social
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-1.5 p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee rounded"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5 h-0.5 bg-coffee-dark transition-transform duration-200 ${open ? 'translate-y-[4px] rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-coffee-dark transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-coffee-dark transition-transform duration-200 ${open ? '-translate-y-[4px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-coffee/10 bg-cream px-6 pb-4 pt-2">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-coffee-dark/80 hover:text-coffee transition-colors py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/events"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-full bg-coffee text-white hover:bg-coffee-dark transition-colors w-full justify-center"
          >
            Join a Social
          </Link>
        </div>
      )}
    </header>
  )
}

export default BBNavbar
