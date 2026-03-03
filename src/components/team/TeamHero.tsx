// FILE: src/components/team/TeamHero.tsx

import { Users, ShieldCheck, Award } from 'lucide-react'

export default function TeamHero() {
  return (
    <section
      aria-labelledby="team-hero-heading"
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
              <a
                href="/"
                className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
              >
                Home
              </a>
            </li>
            <li aria-hidden="true" className="text-white/20">
              /
            </li>
            <li className="text-white/70" aria-current="page">
              Meet the Team
            </li>
          </ol>
        </nav>

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          <Users size={13} aria-hidden="true" />
          Meet the Team
        </div>

        {/* Heading */}
        <h1
          id="team-hero-heading"
          className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl"
        >
          The People Behind{' '}
          <span className="relative inline-block">
            the Mission
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full opacity-70"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
          MCR Educational is powered by an exceptional team of educators, mentors, and support
          professionals who believe every young person deserves a second chance.
        </p>

        {/* Quick fact bubbles */}
        <div className="flex flex-wrap gap-3" role="list" aria-label="Team highlights">
          <div
            role="listitem"
            className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full backdrop-blur-sm"
          >
            <Users size={15} aria-hidden="true" className="text-accent" />
            30+ team members
          </div>
          <div
            role="listitem"
            className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full backdrop-blur-sm"
          >
            <ShieldCheck size={15} aria-hidden="true" className="text-accent" />
            All DBS checked
          </div>
          <div
            role="listitem"
            className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full backdrop-blur-sm"
          >
            <Award size={15} aria-hidden="true" className="text-accent" />
            20+ years avg. experience
          </div>
        </div>
      </div>
    </section>
  )
}
