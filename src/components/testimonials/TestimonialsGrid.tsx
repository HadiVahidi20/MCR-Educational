// FILE: src/components/testimonials/TestimonialsGrid.tsx
'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { TESTIMONIALS, getTestimonials } from '@/lib/testimonials-data'
import type { Testimonial } from '@/lib/testimonials-data'

// ── Explicit class maps — full strings required for Tailwind v4 static analysis ──
const AVATAR_BG: Record<Testimonial['category'], string> = {
  student: 'bg-accent',
  parent: 'bg-secondary',
  school: 'bg-primary',
}

const AVATAR_TEXT: Record<Testimonial['category'], string> = {
  student: 'text-neutral-dark',
  parent: 'text-white',
  school: 'text-white',
}

const BADGE_STYLE: Record<Testimonial['category'], string> = {
  student: 'bg-accent/15 text-neutral-dark',
  parent: 'bg-secondary/15 text-neutral-dark',
  school: 'bg-primary/15 text-primary',
}

const CATEGORY_LABEL: Record<Testimonial['category'], string> = {
  student: 'Student',
  parent: 'Parent',
  school: 'School',
}

type FilterValue = 'all' | 'student' | 'parent' | 'school'

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Students', value: 'student' },
  { label: 'Parents', value: 'parent' },
  { label: 'Schools', value: 'school' },
]

export default function TestimonialsGrid() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('all')

  const filtered = getTestimonials(activeCategory)

  return (
    <div>
      {/* Filter row */}
      <div
        role="group"
        aria-label="Filter testimonials by category"
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {FILTERS.map((filter) => {
          const isActive = activeCategory === filter.value
          return (
            <button
              key={filter.value}
              onClick={() => setActiveCategory(filter.value)}
              aria-pressed={isActive}
              className={[
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-neutral-dark border border-neutral-dark/10 hover:border-primary/30 hover:text-primary',
              ].join(' ')}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      {/* Card grid */}
      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        aria-label="Testimonials"
      >
        {TESTIMONIALS.map((testimonial) => {
          const isVisible =
            activeCategory === 'all' || testimonial.category === activeCategory
          const avatarBg = AVATAR_BG[testimonial.category]
          const avatarText = AVATAR_TEXT[testimonial.category]
          const badgeStyle = BADGE_STYLE[testimonial.category]

          return (
            <li
              key={testimonial.id}
              className={[
                'transition-all duration-300 ease-in-out',
                isVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none',
              ].join(' ')}
              aria-hidden={!isVisible}
            >
              <article
                className={[
                  'bg-white rounded-2xl shadow-sm border border-neutral-dark/5',
                  'p-6 flex flex-col gap-4 h-full',
                ].join(' ')}
              >
                {/* Stars */}
                <div
                  className="flex gap-1"
                  aria-label="5 out of 5 stars"
                  role="img"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      aria-hidden="true"
                      className="text-secondary fill-secondary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="font-body text-neutral-dark/80 text-sm leading-relaxed line-clamp-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Category badge */}
                <span
                  className={[
                    'self-start inline-block text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide',
                    badgeStyle,
                  ].join(' ')}
                >
                  {CATEGORY_LABEL[testimonial.category]}
                </span>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-1 border-t border-neutral-dark/5">
                  {/* Avatar */}
                  <div
                    aria-hidden="true"
                    className={[
                      'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                      'font-heading font-bold text-xs ring-2 ring-white shadow-sm',
                      avatarBg,
                      avatarText,
                    ].join(' ')}
                  >
                    {testimonial.initials}
                  </div>

                  <div>
                    <p className="font-heading font-semibold text-neutral-dark text-sm leading-tight">
                      {testimonial.authorName}
                    </p>
                    <p className="font-body text-neutral-dark/50 text-xs mt-0.5">
                      {testimonial.authorRole}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
