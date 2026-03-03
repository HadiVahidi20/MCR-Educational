// FILE: src/components/for-students/StudentStories.tsx

'use client'

import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Story {
  initials: string
  year: string
  quote: string
  bg: string
  textColor: string
  quoteIconColor: string
  metaColor: string
  dotActive: string
  dotInactive: string
}

const stories: Story[] = [
  {
    initials: 'J.T.',
    year: 'Year 10',
    quote:
      'I used to hate school. Now I actually want to come in. The music sessions are the best.',
    bg: 'bg-accent',
    textColor: 'text-neutral-dark',
    quoteIconColor: 'text-neutral-dark/15',
    metaColor: 'text-neutral-dark/60',
    dotActive: 'bg-neutral-dark',
    dotInactive: 'bg-neutral-dark/25',
  },
  {
    initials: 'A.K.',
    year: 'Year 9',
    quote:
      "My teachers actually listen to me here. I've got my Level 2 Functional Skills and I'm proud of myself.",
    bg: 'bg-secondary',
    textColor: 'text-white',
    quoteIconColor: 'text-white/15',
    metaColor: 'text-white/70',
    dotActive: 'bg-white',
    dotInactive: 'bg-white/30',
  },
  {
    initials: 'M.R.',
    year: 'Year 11',
    quote:
      "MCR helped me figure out what I want to do. I'm going to college to study music production.",
    bg: 'bg-primary',
    textColor: 'text-white',
    quoteIconColor: 'text-white/15',
    metaColor: 'text-white/60',
    dotActive: 'bg-accent',
    dotInactive: 'bg-white/25',
  },
]

export default function StudentStories() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? stories.length - 1 : i - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((i) => (i === stories.length - 1 ? 0 : i + 1))
  }, [])

  const story = stories[current]

  return (
    <section
      aria-labelledby="student-stories-heading"
      className="bg-white py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-secondary/20">
              Student Voices
            </span>
          </div>
          <h2
            id="student-stories-heading"
            className="font-heading font-extrabold text-neutral-dark text-3xl sm:text-4xl lg:text-5xl"
          >
            Real Stories from Real Students
          </h2>
        </div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div
            role="region"
            aria-label={`Student story ${current + 1} of ${stories.length}`}
            aria-live="polite"
            aria-atomic="true"
            className={`${story.bg} relative rounded-3xl px-8 py-12 sm:px-14 sm:py-16 shadow-2xl transition-colors duration-500 overflow-hidden`}
          >
            {/* Decorative large quote mark — background */}
            <Quote
              aria-hidden="true"
              size={120}
              className={`${story.quoteIconColor} absolute -top-4 -left-2 rotate-180 pointer-events-none`}
            />

            {/* Quote text */}
            <blockquote className="relative z-10">
              <p
                className={`${story.textColor} font-heading font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug mb-8`}
              >
                &ldquo;{story.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-4">
                {/* Avatar bubble */}
                <div
                  aria-hidden="true"
                  className="shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <span className={`${story.textColor} font-stats font-bold text-sm`}>
                    {story.initials}
                  </span>
                </div>
                <div>
                  <cite
                    className={`${story.textColor} font-heading font-bold text-base not-italic`}
                  >
                    {story.initials}
                  </cite>
                  <p className={`${story.metaColor} font-body text-sm mt-0.5`}>{story.year}</p>
                </div>
              </footer>
            </blockquote>

            {/* Bottom right quote mark decoration */}
            <Quote
              aria-hidden="true"
              size={64}
              className={`${story.quoteIconColor} absolute bottom-4 right-6 pointer-events-none`}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous story"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-neutral-dark/15 text-neutral-dark/60 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div
              role="tablist"
              aria-label="Story navigation"
              className="flex items-center gap-2"
            >
              {stories.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Go to story ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none ${
                    index === current
                      ? 'w-8 h-3 bg-primary'
                      : 'w-3 h-3 bg-neutral-dark/20 hover:bg-neutral-dark/40'
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next story"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-neutral-dark/15 text-neutral-dark/60 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Story counter */}
          <p
            className="text-center font-body text-neutral-dark/40 text-sm mt-4"
            aria-hidden="true"
          >
            {current + 1} / {stories.length}
          </p>
        </div>
      </div>
    </section>
  )
}
