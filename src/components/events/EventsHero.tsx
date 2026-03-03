// FILE: src/components/events/EventsHero.tsx

import { CalendarDays } from 'lucide-react'
import Link from 'next/link'

export default function EventsHero() {
  return (
    <section
      aria-labelledby="events-hero-heading"
      className="relative bg-primary pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-white/40">
            <li>
              <Link
                href="/"
                className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/20">
              /
            </li>
            <li className="text-white/70" aria-current="page">
              Events
            </li>
          </ol>
        </nav>

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          <CalendarDays size={13} aria-hidden="true" />
          Events &amp; Term Dates
        </div>

        {/* Heading */}
        <h1
          id="events-hero-heading"
          className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl"
        >
          What&apos;s On at{' '}
          <span className="relative inline-block">
            MCR
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full opacity-70"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
          Open days, workshops, celebrations and more — don&apos;t miss a thing.
        </p>

        {/* Navigation pill buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#events"
            className="inline-flex items-center gap-2 bg-accent text-neutral-dark font-semibold text-sm px-6 py-3 rounded-full hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <CalendarDays size={15} aria-hidden="true" />
            Upcoming Events
          </a>
          <a
            href="#term-dates"
            className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Term Dates
          </a>
        </div>
      </div>
    </section>
  )
}
