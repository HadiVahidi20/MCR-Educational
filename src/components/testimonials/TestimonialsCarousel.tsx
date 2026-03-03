// FILE: src/components/testimonials/TestimonialsCarousel.tsx
'use client'

import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import type { Testimonial } from '@/lib/testimonials-data'

// ── Explicit class maps — full strings required for Tailwind v4 static analysis ──
const CATEGORY_CARD_BG: Record<Testimonial['category'], string> = {
  student: 'bg-accent/10',
  parent: 'bg-secondary/10',
  school: 'bg-primary/10',
}

const CATEGORY_AVATAR_BG: Record<Testimonial['category'], string> = {
  student: 'bg-accent',
  parent: 'bg-secondary',
  school: 'bg-primary',
}

const CATEGORY_AVATAR_TEXT: Record<Testimonial['category'], string> = {
  student: 'text-neutral-dark',
  parent: 'text-white',
  school: 'text-white',
}

const CATEGORY_BADGE_STYLE: Record<Testimonial['category'], string> = {
  student: 'bg-accent/20 text-neutral-dark',
  parent: 'bg-secondary/20 text-neutral-dark',
  school: 'bg-primary/20 text-primary',
}

const CATEGORY_LABEL: Record<Testimonial['category'], string> = {
  student: 'Student',
  parent: 'Parent',
  school: 'School',
}

const CATEGORY_QUOTE_COLOR: Record<Testimonial['category'], string> = {
  student: 'text-accent',
  parent: 'text-secondary',
  school: 'text-primary',
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  title?: string
}

export default function TestimonialsCarousel({
  testimonials,
  title,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [testimonials.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [testimonials.length])

  if (testimonials.length === 0) return null

  const current = testimonials[currentIndex]

  const cardBg = CATEGORY_CARD_BG[current.category]
  const avatarBg = CATEGORY_AVATAR_BG[current.category]
  const avatarText = CATEGORY_AVATAR_TEXT[current.category]
  const badgeStyle = CATEGORY_BADGE_STYLE[current.category]
  const quoteColor = CATEGORY_QUOTE_COLOR[current.category]

  return (
    <div className="w-full">
      {title && (
        <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl text-center mb-8">
          {title}
        </h2>
      )}

      {/* Slide region */}
      <div
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Testimonial ${currentIndex + 1} of ${testimonials.length}`}
      >
        {/* Card */}
        <div
          className={[
            'relative w-full min-h-[280px] rounded-2xl p-8 sm:p-10',
            'flex flex-col justify-between gap-6',
            'transition-all duration-300 ease-in-out',
            cardBg,
          ].join(' ')}
          role="article"
        >
          {/* Category badge */}
          <div className="flex items-start justify-between gap-4">
            <span
              className={[
                'inline-block text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide',
                badgeStyle,
              ].join(' ')}
            >
              {CATEGORY_LABEL[current.category]}
            </span>

            {/* Large decorative quote icon */}
            <Quote
              size={40}
              aria-hidden="true"
              className={['shrink-0 opacity-80', quoteColor].join(' ')}
            />
          </div>

          {/* Quote text */}
          <blockquote className="flex-1">
            <p className="font-body text-neutral-dark text-lg sm:text-xl italic leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </p>
          </blockquote>

          {/* Stars */}
          <div
            className="flex gap-1"
            aria-label="5 out of 5 stars"
            role="img"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                aria-hidden="true"
                className="text-secondary fill-secondary"
              />
            ))}
          </div>

          {/* Author row */}
          <div className="flex items-center gap-4">
            {/* Initials avatar */}
            <div
              aria-hidden="true"
              className={[
                'w-12 h-12 rounded-full flex items-center justify-center shrink-0',
                'font-heading font-bold text-sm ring-2 ring-white shadow-sm',
                avatarBg,
                avatarText,
              ].join(' ')}
            >
              {current.initials}
            </div>

            <div>
              <p className="font-heading font-semibold text-neutral-dark text-sm leading-tight">
                {current.authorName}
              </p>
              <p className="font-body text-neutral-dark/60 text-xs mt-0.5">
                {current.authorRole}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-6 gap-4">
        {/* Prev button */}
        <button
          onClick={goToPrev}
          aria-label="Previous testimonial"
          className={[
            'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
            'bg-white/20 text-white border border-white/30',
            'hover:bg-white/30 transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
          ].join(' ')}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Dot indicators */}
        <div
          role="tablist"
          aria-label="Testimonial navigation"
          className="flex items-center gap-2 flex-wrap justify-center"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={[
                'rounded-full transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-transparent',
                i === currentIndex
                  ? 'w-6 h-2.5 bg-white'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70',
              ].join(' ')}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          aria-label="Next testimonial"
          className={[
            'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
            'bg-white/20 text-white border border-white/30',
            'hover:bg-white/30 transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
          ].join(' ')}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
