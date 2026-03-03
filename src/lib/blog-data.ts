// FILE: src/lib/blog-data.ts

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  content: string
}

export const POSTS: Post[] = [
  {
    slug: 'welcome-to-mcr-educational',
    title: 'Welcome to MCR Educational',
    excerpt: 'We are delighted to launch our new website and share our story with you.',
    category: 'news',
    author: 'Sarah Mitchell',
    publishedAt: '2025-09-01',
    readTime: '3 min',
    content:
      'MCR Educational has been supporting young people in Greater Manchester for over a decade. Our new website marks an exciting chapter in our story — a place where families, schools, and professionals can learn about who we are, what we do, and how we can help. From our carefully designed programmes to our dedicated pastoral team, everything we do is built around the belief that every young person deserves the chance to thrive. We hope this space reflects the warmth, ambition, and commitment that drives us every day. Welcome.',
  },
  {
    slug: 'student-achievement-gcse-results',
    title: 'Outstanding GCSE Results for Our Students',
    excerpt:
      'We are incredibly proud to share that 94% of our Year 11 students achieved their target grades this summer.',
    category: 'student-achievement',
    author: 'James Okafor',
    publishedAt: '2025-08-25',
    readTime: '4 min',
    content:
      'This summer marked another incredible milestone for MCR Educational. Our Year 11 cohort sat their GCSEs with remarkable resilience and determination, and the results speak for themselves: 94% achieved their target grades, with many surpassing their predicted outcomes. These are not just numbers on a page — they represent months of hard work, honest conversations, late revision sessions, and the courage to believe in a future that once felt out of reach. We are so proud of every single student, and we extend our deepest thanks to the teachers and key workers who stood alongside them every step of the way.',
  },
  {
    slug: 'new-creative-arts-programme',
    title: 'Launching Our New Creative Arts Programme',
    excerpt:
      'Our expanded creative arts offering gives students more ways to express themselves and gain accredited qualifications.',
    category: 'news',
    author: "Liam O'Brien",
    publishedAt: '2025-08-10',
    readTime: '5 min',
    content:
      "We are thrilled to announce the launch of our expanded Creative & Performing Arts programme at MCR Educational. Starting this autumn, students will have access to a broader range of creative disciplines — including music production, drama, visual arts, and digital media — all taught by specialist practitioners. Many of the modules are accredited, meaning students can work towards nationally recognised qualifications while doing something they genuinely love. Creativity isn't an optional extra for us; it's a vital pathway for young people who connect with the world through expression and imagination. We can't wait to see what our students create.",
  },
  {
    slug: 'safeguarding-awareness-week',
    title: 'Safeguarding Awareness Week at MCR',
    excerpt:
      'Our team took part in a week of activities focused on keeping young people safe, informed, and empowered.',
    category: 'community',
    author: 'Priya Sharma',
    publishedAt: '2025-07-14',
    readTime: '4 min',
    content:
      'Safeguarding is at the core of everything we do at MCR Educational. This July, our whole team participated in a dedicated Safeguarding Awareness Week — a series of workshops, training sessions, and student-led activities designed to reinforce our shared commitment to safety. Students took part in age-appropriate sessions on online safety, healthy relationships, and knowing where to turn if they feel unsafe. Staff completed refresher training on updated procedures and multi-agency referral pathways. Safeguarding is never a tick-box exercise for us — it is a living, breathing part of our culture. We thank Priya Sharma and the pastoral team for organising such a meaningful week.',
  },
  {
    slug: 'staff-spotlight-fatima-hassan',
    title: 'Staff Spotlight: Fatima Hassan, Senior Key Worker',
    excerpt:
      'Meet Fatima — the dedicated key worker who has supported over 60 young people on their journey at MCR.',
    category: 'staff-spotlight',
    author: 'MCR Editorial Team',
    publishedAt: '2025-07-01',
    readTime: '3 min',
    content:
      "Fatima Hassan has been with MCR Educational for six years, and in that time she has become one of the most trusted and beloved members of our team. As a Senior Key Worker, Fatima is often the first person a student turns to when they're struggling — and her ability to listen without judgement, while gently guiding young people towards better choices, is something truly special. She has supported over 60 young people through their time at MCR, many of whom still keep in touch long after they have moved on. We sat down with Fatima to find out what drives her and what she loves most about her role.",
  },
  {
    slug: 'summer-enrichment-programme-2025',
    title: 'Summer Enrichment Programme 2025 Highlights',
    excerpt:
      'From cooking competitions to outdoor adventures — here is what our students got up to this summer.',
    category: 'community',
    author: 'Ryan Clarke',
    publishedAt: '2025-06-20',
    readTime: '6 min',
    content:
      'Our 2025 Summer Enrichment Programme was our biggest yet, with over 80 students taking part in six weeks of activities designed to build confidence, foster friendships, and create memories. From team cooking competitions and art installations to day trips, forest school sessions, and a sports tournament, this summer had something for everyone. The programme is not just about fun — although there was plenty of that. It is about giving young people structured, positive experiences during a period that can otherwise feel unsettled. The laughter, the teamwork, the pride on students faces — these are the moments that remind us why we do what we do.',
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug: string, count: number = 3): Post[] {
  const current = getPost(slug)
  if (!current) return POSTS.slice(0, count)

  // Prefer same category, then fill with others
  const sameCat = POSTS.filter(
    (p) => p.slug !== slug && p.category === current.category,
  )
  const others = POSTS.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  )

  return [...sameCat, ...others].slice(0, count)
}
