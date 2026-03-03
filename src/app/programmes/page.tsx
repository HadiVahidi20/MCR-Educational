// FILE: src/app/programmes/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProgrammesHero from '@/components/programmes/ProgrammesHero'
import ProgrammesGrid from '@/components/programmes/ProgrammesGrid'

export const metadata: Metadata = {
  title: 'Our Programmes | MCR Educational',
  description:
    'Explore the five tailored, accredited programmes at MCR Educational — from Academic Pathway to Creative Arts, Wellbeing, Life Skills, and Enrichment.',
  openGraph: {
    title: 'Our Programmes | MCR Educational',
    description:
      'Five pathways designed around the young person. Discover Academic Pathway, Creative Arts, Wellbeing, Life Skills & Employability, and Enrichment at MCR Educational.',
    url: '/programmes',
  },
}

export default function ProgrammesPage() {
  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <ProgrammesHero />

      {/* ── 2. PROGRAMMES GRID ───────────────────────────────────────────── */}
      <ProgrammesGrid />

      {/* ── 3. CTA STRIP ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="programmes-cta-heading"
        className="bg-primary py-14 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p
            id="programmes-cta-heading"
            className="font-heading font-bold text-white text-xl sm:text-2xl text-center sm:text-left"
          >
            Looking for a specific programme? Get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-lg shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Contact Us
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
