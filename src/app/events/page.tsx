// FILE: src/app/events/page.tsx

import type { Metadata } from 'next'
import EventsHero from '@/components/events/EventsHero'
import EventsListing from '@/components/events/EventsListing'
import TermDates from '@/components/events/TermDates'

export const metadata: Metadata = {
  title: 'Events & Term Dates | MCR Educational',
  description:
    'Find upcoming open days, workshops, celebrations and term dates for MCR Educational Centre in Manchester.',
}

export default function EventsPage() {
  return (
    <main id="main-content">
      <EventsHero />
      <EventsListing />
      <TermDates />
    </main>
  )
}
