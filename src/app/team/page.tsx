// FILE: src/app/team/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TeamHero from '@/components/team/TeamHero'
import TeamGrid from '@/components/team/TeamGrid'

export const metadata: Metadata = {
  title: 'Meet the Team | MCR Educational',
  description:
    'Meet the educators, mentors, and support professionals who make MCR Educational exceptional. Every member of our team is dedicated to giving young people a second chance.',
  openGraph: {
    title: 'Meet the Team | MCR Educational',
    description:
      'Meet the educators, mentors, and support professionals who make MCR Educational exceptional.',
    url: '/team',
  },
}

export default function TeamPage() {
  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <TeamHero />

      {/* ── 2. TEAM GRID ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="team-grid-heading"
        className="bg-neutral-light py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team-grid-heading" className="sr-only">
            Our team members
          </h2>
          <TeamGrid />
        </div>
      </section>

      {/* ── 3. JOIN US CTA ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="join-cta-heading"
        className="bg-primary py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:justify-between sm:text-left">
            <h2
              id="join-cta-heading"
              className="font-heading font-bold text-white text-2xl sm:text-3xl leading-snug"
            >
              Interested in joining our team?
            </h2>

            <Link
              href="/contact"
              className={[
                'inline-flex items-center gap-2 shrink-0',
                'border-2 border-white text-white font-medium text-sm sm:text-base',
                'px-7 py-3 rounded-full',
                'hover:bg-white hover:text-primary',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary',
              ].join(' ')}
            >
              View Vacancies
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
