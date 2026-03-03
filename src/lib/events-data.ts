// FILE: src/lib/events-data.ts

export type CalEvent = {
  slug: string
  title: string
  date: string
  endDate?: string
  time?: string
  location: string
  description: string
  type: string
  isFeatured: boolean
}

export const EVENTS: CalEvent[] = [
  {
    slug: 'open-day-oct-2025',
    title: 'Open Day — October 2025',
    date: '2025-10-15',
    time: '10:00–13:00',
    location: 'MCR Educational Centre, Manchester',
    description:
      'Come and see our facilities, meet the team, and find out how we can support your young person.',
    type: 'open-day',
    isFeatured: true,
  },
  {
    slug: 'gcse-results-celebration-2025',
    title: 'GCSE Results Celebration Evening',
    date: '2025-08-21',
    time: '17:00–19:00',
    location: 'MCR Educational Centre',
    description:
      'Celebrating the outstanding achievements of our Year 11 cohort with students and families.',
    type: 'celebration',
    isFeatured: true,
  },
  {
    slug: 'parent-information-evening-nov-2025',
    title: 'Parent Information Evening — November 2025',
    date: '2025-11-06',
    time: '18:00–19:30',
    location: 'MCR Educational Centre',
    description:
      'An informal evening for parents and carers to meet staff, ask questions and learn about our programmes.',
    type: 'meeting',
    isFeatured: false,
  },
  {
    slug: 'christmas-showcase-2025',
    title: 'Winter Showcase 2025',
    date: '2025-12-12',
    time: '13:00–15:30',
    location: 'MCR Educational Centre',
    description:
      'Students showcase their creative arts achievements from the autumn term — drama, music and art on display.',
    type: 'celebration',
    isFeatured: true,
  },
  {
    slug: 'employability-workshop-jan-2026',
    title: 'Employability Skills Workshop',
    date: '2026-01-14',
    time: '09:30–12:30',
    location: 'MCR Educational Centre',
    description:
      'A half-day workshop covering CV writing, interview skills and workplace expectations for Year 10 & 11.',
    type: 'workshop',
    isFeatured: false,
  },
  {
    slug: 'open-day-feb-2026',
    title: 'Open Day — February 2026',
    date: '2026-02-11',
    time: '10:00–13:00',
    location: 'MCR Educational Centre',
    description:
      'Our spring open day — a chance to tour the centre and speak with staff and current students.',
    type: 'open-day',
    isFeatured: false,
  },
  {
    slug: 'peak-district-trip-mar-2026',
    title: 'Peak District Outdoor Education Trip',
    date: '2026-03-25',
    endDate: '2026-03-26',
    time: 'All day',
    location: 'Peak District National Park',
    description:
      'A two-day outdoor education trip for all students — hiking, team challenges and evening campfire activities.',
    type: 'trip',
    isFeatured: false,
  },
  {
    slug: 'summer-showcase-2026',
    title: 'End of Year Showcase & Awards 2026',
    date: '2026-07-10',
    time: '13:00–16:00',
    location: 'MCR Educational Centre',
    description:
      'Our annual end-of-year celebration — awards, performances and a display of student work. All families welcome.',
    type: 'celebration',
    isFeatured: true,
  },
]

const STATIC_TODAY = '2025-09-01'

export function getEvent(slug: string): CalEvent | undefined {
  return EVENTS.find((e) => e.slug === slug)
}

export function getUpcomingEvents(count?: number): CalEvent[] {
  const upcoming = EVENTS.filter((e) => e.date >= STATIC_TODAY).sort((a, b) =>
    a.date.localeCompare(b.date),
  )
  return count !== undefined ? upcoming.slice(0, count) : upcoming
}

export function getPastEvents(): CalEvent[] {
  return EVENTS.filter((e) => e.date < STATIC_TODAY).sort((a, b) =>
    b.date.localeCompare(a.date),
  )
}
