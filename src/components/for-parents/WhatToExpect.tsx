// FILE: d:\TheHerd\MCR\Educational\src\components\for-parents\WhatToExpect.tsx
import { Check, BookOpen } from 'lucide-react'

const bulletPoints = [
  'Small class sizes (max 8 students)',
  'Qualified teachers and specialist staff',
  'Personalised learning plan for every student',
  'Safe and nurturing physical environment',
  'Regular progress reports shared with you',
  'Strong pastoral care and pastoral support',
]

export default function WhatToExpect() {
  return (
    <section
      aria-labelledby="what-to-expect-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: illustrative placeholder card */}
          <div
            className="rounded-2xl bg-[#2ECDA7]/10 border border-[#2ECDA7]/20 flex flex-col items-center justify-center gap-5 py-20 px-10 min-h-[380px]"
            aria-label="Our Learning Environment illustration"
          >
            <div
              className="w-20 h-20 rounded-2xl bg-[#2ECDA7]/20 flex items-center justify-center"
              aria-hidden="true"
            >
              <BookOpen size={40} className="text-[#2ECDA7]" aria-hidden="true" />
            </div>
            <p className="font-heading font-semibold text-[#1E3A5F] text-lg text-center">
              Our Learning Environment
            </p>
            <p className="text-[#1A1A2E]/50 text-sm text-center max-w-xs font-body leading-relaxed">
              A calm, structured setting designed around the needs of each young person — where
              everyone belongs.
            </p>
          </div>

          {/* Right: heading + bullet points */}
          <div>
            <p className="text-[#E85D75] font-semibold text-sm uppercase tracking-widest mb-3">
              What to expect
            </p>
            <h2
              id="what-to-expect-heading"
              className="font-heading font-bold text-[#1E3A5F] text-3xl sm:text-4xl mb-4 leading-tight"
            >
              What Your Child Will Experience
            </h2>
            <p className="text-[#1A1A2E]/60 text-base sm:text-lg leading-relaxed mb-10 font-body">
              From day one, your child will be welcomed into a supportive community where they are
              known as an individual. Here is what every family can expect from MCR Educational.
            </p>

            <ul className="space-y-4" aria-label="What your child will experience">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 w-6 h-6 rounded-full bg-[#2ECDA7]/15 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Check size={14} className="text-[#2ECDA7]" aria-hidden="true" />
                  </span>
                  <span className="text-[#1A1A2E]/75 text-base font-body leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
