// FILE: src/app/testimonials/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquareQuote, ArrowRight } from 'lucide-react'
import { getFeaturedTestimonials, TESTIMONIALS } from '@/lib/testimonials-data'
import TestimonialsCarousel from '@/components/testimonials/TestimonialsCarousel'
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid'

export const metadata: Metadata = {
  title: 'What People Say | MCR Educational',
  description:
    'Read testimonials from parents, students, and school professionals about their experience with MCR Educational — Greater Manchester\'s specialist alternative provision.',
  openGraph: {
    title: 'What People Say | MCR Educational',
    description:
      'Read testimonials from parents, students, and school professionals about MCR Educational.',
    url: '/testimonials',
  },
}

export default function TestimonialsPage() {
  const featuredTestimonials = getFeaturedTestimonials()

  return (
    <main id="main-content">
      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="testimonials-hero-heading"
        className="relative bg-primary pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden"
      >
        {/* Decorative background shapes */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
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
                Testimonials
              </li>
            </ol>
          </nav>

          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <MessageSquareQuote size={13} aria-hidden="true" />
            Testimonials
          </div>

          {/* Heading */}
          <h1
            id="testimonials-hero-heading"
            className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            What People Say{' '}
            <span className="relative inline-block">
              About MCR
              <span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full opacity-70"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl">
            Hear from the parents, students, and school professionals who have experienced
            MCR Educational first-hand. Their words mean everything to us.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3 mt-10" role="list" aria-label="Testimonial stats">
            <div
              role="listitem"
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full backdrop-blur-sm"
            >
              <MessageSquareQuote size={15} aria-hidden="true" className="text-accent" />
              {TESTIMONIALS.length} testimonials
            </div>
            <div
              role="listitem"
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full backdrop-blur-sm"
            >
              <span className="text-accent font-stats text-sm" aria-hidden="true">
                3
              </span>
              categories
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURED CAROUSEL ─────────────────────────────────────────── */}
      <section
        aria-labelledby="featured-testimonials-heading"
        className="bg-secondary py-16 sm:py-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="featured-testimonials-heading"
            className="font-heading font-bold text-white text-2xl sm:text-3xl text-center mb-10"
          >
            Featured Stories
          </h2>

          <TestimonialsCarousel testimonials={featuredTestimonials} />
        </div>
      </section>

      {/* ── 3. ALL TESTIMONIALS GRID ──────────────────────────────────────── */}
      <section
        aria-labelledby="all-testimonials-heading"
        className="bg-neutral-light py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="all-testimonials-heading"
              className="font-heading font-bold text-neutral-dark text-2xl sm:text-3xl mb-3"
            >
              All Testimonials
            </h2>
            <p className="font-body text-neutral-dark/60 text-base max-w-xl mx-auto">
              Browse by category to find stories from parents, students, and school professionals.
            </p>
          </div>

          <TestimonialsGrid />
        </div>
      </section>

      {/* ── 4. CTA STRIP ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="testimonials-cta-heading"
        className="bg-primary py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:justify-between sm:text-left">
            <h2
              id="testimonials-cta-heading"
              className="font-heading font-bold text-white text-2xl sm:text-3xl leading-snug"
            >
              Ready to find out for yourself?
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
              Contact Us
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
