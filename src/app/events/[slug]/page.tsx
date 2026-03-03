// FILE: src/app/events/[slug]/page.tsx

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, CalendarDays, Calendar } from 'lucide-react'
import { EVENTS, getEvent } from '@/lib/events-data'

const TYPE_LABELS: Record<string, string> = {
  'open-day': 'Open Day',
  workshop: 'Workshop',
  celebration: 'Celebration',
  meeting: 'Meeting',
  trip: 'Trip',
  other: 'Other',
}

const TYPE_BADGE: Record<string, string> = {
  'open-day': 'bg-accent/20 text-teal-800',
  workshop: 'bg-secondary/20 text-secondary',
  celebration: 'bg-amber-100 text-amber-800',
  meeting: 'bg-white/20 text-white',
  trip: 'bg-emerald-100/20 text-emerald-200',
  other: 'bg-white/10 text-white/80',
}

function formatFullDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) return { title: 'Event Not Found | MCR Educational' }
  return {
    title: `${event.title} | MCR Educational`,
    description: event.description,
  }
}

export default async function EventDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const event = getEvent(slug)

  if (!event) notFound()

  const typeBadgeClass = TYPE_BADGE[event.type] ?? TYPE_BADGE.other
  const typeLabel = TYPE_LABELS[event.type] ?? 'Other'

  return (
    <main id="main-content">
      {/* Hero */}
      <section
        aria-labelledby="event-detail-heading"
        className="relative bg-primary pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden"
      >
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/40 flex-wrap">
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
              <li>
                <Link
                  href="/events"
                  className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  Events
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li className="text-white/70 truncate max-w-[200px]" aria-current="page">
                {event.title}
              </li>
            </ol>
          </nav>

          {/* Type badge */}
          <span
            className={`inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full mb-5 ${typeBadgeClass} border border-white/10`}
          >
            {typeLabel}
          </span>

          {/* Heading */}
          <h1
            id="event-detail-heading"
            className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-8 max-w-3xl"
          >
            {event.title}
          </h1>

          {/* Date / time / location row */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/70 text-sm">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={15} aria-hidden="true" />
              <span>
                {formatFullDate(event.date)}
                {event.endDate && ` – ${formatFullDate(event.endDate)}`}
              </span>
            </span>
            {event.time && (
              <span className="inline-flex items-center gap-2">
                <Clock size={15} aria-hidden="true" />
                {event.time}
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" />
              {event.location}
            </span>
          </div>
        </div>
      </section>

      {/* Description */}
      <section aria-labelledby="event-description-heading" className="bg-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="event-description-heading"
            className="font-heading font-bold text-neutral-dark text-2xl sm:text-3xl mb-6"
          >
            About This Event
          </h2>
          <div className="prose prose-neutral max-w-none font-body text-neutral-dark/80 leading-relaxed text-base sm:text-lg">
            <p>{event.description}</p>
          </div>
        </div>
      </section>

      {/* Add to calendar */}
      <section aria-labelledby="add-to-calendar-heading" className="bg-neutral-light py-12 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="add-to-calendar-heading"
            className="font-heading font-bold text-neutral-dark text-xl sm:text-2xl mb-2"
          >
            Add to Calendar
          </h2>
          <p className="font-body text-neutral-dark/60 text-sm mb-6">
            Save this event to your preferred calendar app.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Google Calendar', icon: Calendar },
              { label: 'Apple Calendar', icon: Calendar },
              { label: 'Outlook', icon: Calendar },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                disabled
                aria-disabled="true"
                title={`${label} — coming soon`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-neutral-dark/15 text-neutral-dark/40 text-sm font-semibold cursor-not-allowed select-none"
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section aria-labelledby="event-cta-heading" className="bg-secondary py-12 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2
              id="event-cta-heading"
              className="font-heading font-bold text-white text-xl sm:text-2xl mb-1"
            >
              Register your interest
            </h2>
            <p className="font-body text-white/80 text-sm sm:text-base">
              Contact us to confirm your attendance or find out more.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-secondary font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary whitespace-nowrap flex-shrink-0"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
