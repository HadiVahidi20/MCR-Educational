'use client'
// FILE: d:\TheHerd\MCR\Educational\src\components\for-parents\ParentTestimonials.tsx

import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The transformation in my son has been remarkable. He went from refusing to leave the house to actually looking forward to school.',
    name: 'Helen B.',
    role: 'Parent of Year 9 student',
    initials: 'HB',
  },
  {
    quote:
      'The communication from the team is exceptional. I always know what is happening and my daughter feels safe.',
    name: 'Marcus T.',
    role: 'Parent of Year 10 student',
    initials: 'MT',
  },
  {
    quote:
      'They found what works for our child. The small groups and personal attention made all the difference.',
    name: 'Priya & James K.',
    role: 'Parents of Year 8 student',
    initials: 'PK',
  },
  {
    quote:
      'MCR helped my son get back on track for his GCSEs. The pastoral support is second to none.',
    name: 'Donna W.',
    role: 'Parent of Year 11 student',
    initials: 'DW',
  },
]

export default function ParentTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }, [])

  const next = useCallback(() => {
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  }, [])

  const current = testimonials[activeIndex]

  return (
    <section
      aria-labelledby="parent-testimonials-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#E85D75] font-semibold text-sm uppercase tracking-widest mb-3">
            Family feedback
          </p>
          <h2
            id="parent-testimonials-heading"
            className="font-heading font-bold text-[#1E3A5F] text-3xl sm:text-4xl mb-4"
          >
            What Parents Say
          </h2>
          <p className="text-[#1A1A2E]/60 text-base sm:text-lg max-w-xl mx-auto font-body">
            Hear directly from the families we have worked with across Greater Manchester.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#F7F8FC] rounded-3xl p-8 sm:p-12 text-center">

            {/* Quote icon */}
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#2ECDA7] flex items-center justify-center shadow-md"
              aria-hidden="true"
            >
              <Quote size={18} className="text-white fill-white" aria-hidden="true" />
            </div>

            {/* Quote text */}
            <blockquote className="mt-4 text-[#1A1A2E] text-lg sm:text-xl leading-relaxed font-body italic mb-6">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Star rating */}
            <div
              className="flex justify-center gap-1 mb-6"
              role="img"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-[#2ECDA7] fill-[#2ECDA7]"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-11 h-11 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center text-sm font-bold font-heading shrink-0"
                aria-hidden="true"
              >
                {current.initials}
              </div>
              <div className="text-left">
                <div className="font-semibold text-[#1A1A2E] font-heading text-sm">
                  {current.name}
                </div>
                <div className="text-[#1A1A2E]/50 text-xs">{current.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-2 border-[#1A1A2E]/20 flex items-center justify-center text-[#1A1A2E]/50 hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F] focus-visible:ring-offset-2"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2" role="group" aria-label="Testimonial position">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                  className={cn(
                    'rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F]',
                    i === activeIndex
                      ? 'w-6 h-2.5 bg-[#E85D75]'
                      : 'w-2.5 h-2.5 bg-[#1A1A2E]/20 hover:bg-[#1A1A2E]/40'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border-2 border-[#1A1A2E]/20 flex items-center justify-center text-[#1A1A2E]/50 hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F] focus-visible:ring-offset-2"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
