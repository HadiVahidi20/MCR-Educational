// FILE: src/lib/testimonials-data.ts

export type Testimonial = {
  id: string
  quote: string
  authorName: string
  authorRole: string
  category: 'student' | 'parent' | 'school'
  isFeatured: boolean
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  // ── Parents ──────────────────────────────────────────────────────────────
  {
    id: 'p1',
    quote:
      'The transformation in our son has been remarkable. He went from refusing to leave the house to looking forward to school every single day.',
    authorName: 'Parent of Year 9 student',
    authorRole: 'Parent',
    category: 'parent',
    isFeatured: true,
    initials: 'P',
  },
  {
    id: 'p2',
    quote:
      'The communication from the team is exceptional. I always know exactly what is happening and my daughter feels completely safe.',
    authorName: 'Parent of Year 10 student',
    authorRole: 'Parent',
    category: 'parent',
    isFeatured: false,
    initials: 'P',
  },
  {
    id: 'p3',
    quote:
      'They found what truly works for our child. The small groups and personal attention made all the difference to her confidence.',
    authorName: 'Parent of Year 8 student',
    authorRole: 'Parent',
    category: 'parent',
    isFeatured: true,
    initials: 'P',
  },
  {
    id: 'p4',
    quote:
      'MCR helped my son get back on track for his GCSEs. The pastoral support here is second to none — we cannot thank them enough.',
    authorName: 'Parent of Year 11 student',
    authorRole: 'Parent',
    category: 'parent',
    isFeatured: false,
    initials: 'P',
  },

  // ── Students ──────────────────────────────────────────────────────────────
  {
    id: 's1',
    quote:
      'I used to hate school. Now I actually want to come in. The music sessions are the best thing that has ever happened to me.',
    authorName: 'J.T.',
    authorRole: 'Year 10 student',
    category: 'student',
    isFeatured: true,
    initials: 'JT',
  },
  {
    id: 's2',
    quote:
      'My teachers actually listen to me here. I have got my Level 2 Functional Skills and I am so proud of myself.',
    authorName: 'A.K.',
    authorRole: 'Year 9 student',
    category: 'student',
    isFeatured: false,
    initials: 'AK',
  },
  {
    id: 's3',
    quote:
      'MCR helped me figure out what I want to do with my life. I am going to college to study music production because of this place.',
    authorName: 'M.R.',
    authorRole: 'Year 11 student',
    category: 'student',
    isFeatured: true,
    initials: 'MR',
  },
  {
    id: 's4',
    quote:
      'Everyone here treats you like a person, not just a number. I feel valued and respected every single day.',
    authorName: 'T.W.',
    authorRole: 'Year 8 student',
    category: 'student',
    isFeatured: false,
    initials: 'TW',
  },

  // ── Schools / Professionals ───────────────────────────────────────────────
  {
    id: 'sc1',
    quote:
      'The progress our student has made at MCR Educational in just one term has been extraordinary. The team truly goes above and beyond.',
    authorName: 'Head of Year, Salford Academy',
    authorRole: 'School Professional',
    category: 'school',
    isFeatured: true,
    initials: 'SA',
  },
  {
    id: 'sc2',
    quote:
      'MCR Educational consistently delivers outstanding outcomes for our most complex cases. Their safeguarding is exemplary.',
    authorName: 'SENCo, Manchester Secondary School',
    authorRole: 'School Professional',
    category: 'school',
    isFeatured: false,
    initials: 'SM',
  },
  {
    id: 'sc3',
    quote:
      'As a referring school, we are always kept informed and involved. The partnership approach is exactly what our young people need.',
    authorName: 'Assistant Headteacher, Trafford',
    authorRole: 'School Professional',
    category: 'school',
    isFeatured: false,
    initials: 'AH',
  },
  {
    id: 'sc4',
    quote:
      'The transition back into mainstream education for our student was handled so thoughtfully. MCR really understands young people.',
    authorName: 'Inclusion Manager, Stockport',
    authorRole: 'School Professional',
    category: 'school',
    isFeatured: true,
    initials: 'IM',
  },
]

export function getTestimonials(category?: string): Testimonial[] {
  if (!category || category === 'all') return TESTIMONIALS
  return TESTIMONIALS.filter((t) => t.category === category)
}

export function getFeaturedTestimonials(): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.isFeatured)
}
