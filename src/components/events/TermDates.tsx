// FILE: src/components/events/TermDates.tsx

import { Download, Info } from 'lucide-react'
import { ACADEMIC_YEARS, type Term } from '@/lib/term-dates-data'

const TERM_COLOURS: Record<string, { badge: string; border: string; dot: string }> = {
  Autumn: {
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    dot: 'bg-amber-400',
  },
  Spring: {
    badge: 'bg-accent/15 text-teal-800',
    border: 'border-accent/30',
    dot: 'bg-accent',
  },
  Summer: {
    badge: 'bg-secondary/15 text-secondary',
    border: 'border-secondary/30',
    dot: 'bg-secondary',
  },
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function formatShortDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  })
}

function TermCard({ term }: { term: Term }) {
  const colours = TERM_COLOURS[term.name] ?? TERM_COLOURS.Autumn

  return (
    <div
      className={`rounded-2xl bg-white border ${colours.border} p-6 flex flex-col gap-4`}
    >
      {/* Term badge */}
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${colours.badge}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${colours.dot}`} aria-hidden="true" />
          {term.name} Term
        </span>
      </div>

      {/* Dates */}
      <dl className="space-y-2 text-sm">
        <div className="flex items-start justify-between gap-4">
          <dt className="font-semibold text-neutral-dark/60 whitespace-nowrap">Start</dt>
          <dd className="font-body text-neutral-dark text-right">{formatDate(term.start)}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="font-semibold text-neutral-dark/60 whitespace-nowrap">End</dt>
          <dd className="font-body text-neutral-dark text-right">{formatDate(term.end)}</dd>
        </div>
        {term.halfTerm && (
          <div className="flex items-start justify-between gap-4 pt-2 border-t border-neutral-dark/5">
            <dt className="font-semibold text-neutral-dark/60 whitespace-nowrap">Half-term</dt>
            <dd className="font-body text-neutral-dark text-right">
              {formatShortDate(term.halfTerm.start)} – {formatShortDate(term.halfTerm.end)}
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}

export default function TermDates() {
  return (
    <section
      id="term-dates"
      aria-labelledby="term-dates-heading"
      className="py-16 sm:py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2
              id="term-dates-heading"
              className="font-heading font-bold text-neutral-dark text-3xl sm:text-4xl"
            >
              Term Dates 2025–2027
            </h2>
            <p className="font-body text-neutral-dark/60 text-base mt-2">
              Academic years 2025–26 and 2026–27
            </p>
          </div>

          {/* Download PDF button — placeholder */}
          <button
            type="button"
            disabled
            title="PDF coming soon"
            aria-disabled="true"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-dark/20 text-neutral-dark/40 text-sm font-semibold cursor-not-allowed select-none"
          >
            <Download size={15} aria-hidden="true" />
            Download PDF
          </button>
        </div>

        {/* Academic years */}
        <div className="space-y-12">
          {ACADEMIC_YEARS.map((ay) => (
            <div key={ay.year}>
              <h3 className="font-heading font-bold text-primary text-xl sm:text-2xl mb-6">
                Academic Year {ay.year}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ay.terms.map((term) => (
                  <TermCard key={`${ay.year}-${term.name}`} term={term} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="mt-10 flex items-start gap-3 bg-neutral-light rounded-xl px-5 py-4 border border-neutral-dark/5">
          <Info
            size={16}
            aria-hidden="true"
            className="flex-shrink-0 mt-0.5 text-neutral-dark/40"
          />
          <p className="font-body text-sm text-neutral-dark/60 leading-relaxed">
            Term dates are subject to minor changes. Please check with our office for the latest
            updates.
          </p>
        </div>
      </div>
    </section>
  )
}
