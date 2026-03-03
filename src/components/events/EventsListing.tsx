// FILE: src/components/events/EventsListing.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Clock, Star } from 'lucide-react'
import { EVENTS, getUpcomingEvents, getPastEvents, type CalEvent } from '@/lib/events-data'

type Filter = 'upcoming' | 'past'

const TYPE_LABELS: Record<string, string> = {
  'open-day': 'Open Day',
  workshop: 'Workshop',
  celebration: 'Celebration',
  meeting: 'Meeting',
  trip: 'Trip',
  other: 'Other',
}

const TYPE_COLOURS: Record<string, string> = {
  'open-day': 'bg-accent/15 text-accent',
  workshop: 'bg-secondary/15 text-secondary',
  celebration: 'bg-amber-100 text-amber-700',
  meeting: 'bg-primary/10 text-primary',
  trip: 'bg-emerald-100 text-emerald-700',
  other: 'bg-neutral-100 text-neutral-600',
}

function formatDay(dateStr: string): string {
  return new Date(dateStr).getUTCDate().toString().padStart(2, '0')
}

function formatMonth(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' })
}

function formatYear(dateStr: string): string {
  return new Date(dateStr).getUTCFullYear().toString()
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

function EventCard({ event }: { event: CalEvent }) {
  const typeBadgeClass = TYPE_COLOURS[event.type] ?? TYPE_COLOURS.other
  const typeLabel = TYPE_LABELS[event.type] ?? 'Other'

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-neutral-dark/5 overflow-hidden hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`${event.title} — ${formatFullDate(event.date)}`}
    >
      {/* Date block */}
      <div
        className="flex-shrink-0 flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-0 bg-primary px-6 py-4 sm:py-6 sm:w-24 sm:min-h-full text-white"
        aria-hidden="true"
      >
        <span className="font-stats font-bold text-3xl sm:text-4xl leading-none">
          {formatDay(event.date)}
        </span>
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/70 sm:mt-1">
          {formatMonth(event.date)}
        </span>
        <span className="font-body text-xs text-white/50 sm:mt-0.5">{formatYear(event.date)}</span>
        {event.endDate && (
          <span className="font-body text-xs text-white/50 sm:mt-1 hidden sm:block">
            – {formatDay(event.endDate)} {formatMonth(event.endDate)}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex-1 px-5 py-5 sm:px-6 sm:py-5">
        {/* Top row: type badge + featured pill */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span
            className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full ${typeBadgeClass}`}
          >
            {typeLabel}
          </span>
          {event.isFeatured && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">
              <Star size={11} aria-hidden="true" />
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-neutral-dark text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3 text-sm text-neutral-dark/60">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} aria-hidden="true" className="flex-shrink-0" />
            {event.location}
          </span>
          {event.time && (
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} aria-hidden="true" className="flex-shrink-0" />
              {event.time}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="font-body text-sm text-neutral-dark/60 leading-relaxed line-clamp-2">
          {event.description}
        </p>
      </div>
    </Link>
  )
}

export default function EventsListing() {
  const [filter, setFilter] = useState<Filter>('upcoming')

  const upcomingEvents = getUpcomingEvents()
  const pastEvents = getPastEvents()
  const displayedEvents = filter === 'upcoming' ? upcomingEvents : pastEvents

  return (
    <section
      id="events"
      aria-labelledby="events-listing-heading"
      className="py-16 sm:py-20 bg-neutral-light"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2
          id="events-listing-heading"
          className="font-heading font-bold text-neutral-dark text-3xl sm:text-4xl mb-8"
        >
          Events
        </h2>

        {/* Tab buttons */}
        <div
          role="tablist"
          aria-label="Filter events"
          className="inline-flex bg-white rounded-full border border-neutral-dark/10 p-1 mb-8 gap-1"
        >
          <button
            role="tab"
            aria-selected={filter === 'upcoming'}
            onClick={() => setFilter('upcoming')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
              filter === 'upcoming'
                ? 'bg-primary text-white shadow-sm'
                : 'text-neutral-dark/60 hover:text-neutral-dark'
            }`}
          >
            Upcoming
          </button>
          <button
            role="tab"
            aria-selected={filter === 'past'}
            onClick={() => setFilter('past')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
              filter === 'past'
                ? 'bg-primary text-white shadow-sm'
                : 'text-neutral-dark/60 hover:text-neutral-dark'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events list */}
        {displayedEvents.length > 0 ? (
          <ul className="space-y-4" aria-label={filter === 'upcoming' ? 'Upcoming events' : 'Past events'}>
            {displayedEvents.map((event) => (
              <li key={event.slug}>
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center py-16 rounded-2xl bg-white border border-neutral-dark/5">
            <p className="font-body text-neutral-dark/50 text-base">
              No events at this time — check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
