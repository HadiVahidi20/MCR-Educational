// FILE: src/app/gallery/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import GalleryHero from '@/components/gallery/GalleryHero'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | MCR Educational',
  description:
    'Browse photos and videos from life at MCR Educational — achievements, enrichment activities, and community events.',
}

export default function GalleryPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <GalleryHero />

      {/* Gallery grid section */}
      <section
        aria-labelledby="gallery-grid-heading"
        className="bg-neutral-light py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-grid-heading" className="sr-only">
            Photo and video gallery
          </h2>
          <GalleryGrid />
        </div>
      </section>

      {/* CTA strip */}
      <section
        aria-labelledby="gallery-cta-heading"
        className="bg-primary py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* Decorative blob */}
          <div
            className="absolute hidden sm:block right-0 top-0 w-64 h-full bg-secondary/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div>
            <h2
              id="gallery-cta-heading"
              className="font-heading font-bold text-white text-2xl sm:text-3xl mb-2"
            >
              Want to visit? Come to our next Open Day!
            </h2>
            <p className="text-white/70 font-body text-base">
              See the centre for yourself and meet the team in person.
            </p>
          </div>

          <Link
            href="/events"
            className={[
              'relative z-10 shrink-0 inline-flex items-center gap-2 px-6 py-3',
              'bg-secondary text-white font-heading font-semibold rounded-xl',
              'hover:bg-secondary/90 transition-colors shadow-lg',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary',
            ].join(' ')}
          >
            <CalendarDays size={18} aria-hidden="true" />
            View Events
          </Link>
        </div>
      </section>
    </main>
  )
}
