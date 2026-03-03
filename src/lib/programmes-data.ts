// FILE: src/lib/programmes-data.ts

export type Programme = {
  slug: string
  title: string
  tagline: string
  heroColor: string
  icon: string
  highlights: string[]
  description: string
}

export const PROGRAMMES: Programme[] = [
  {
    slug: 'academic-pathway',
    title: 'Academic Pathway',
    tagline: 'GCSEs, Functional Skills, and personalised learning plans',
    heroColor: 'navy',
    icon: 'BookOpen',
    highlights: [
      'GCSEs in core subjects',
      'Functional Skills Levels 1 & 2',
      'Personalised learning pace',
      'Small groups of max 8',
      'Regular progress tracking',
      'University & college prep support',
    ],
    description:
      'Our Academic Pathway gives every young person the chance to achieve recognised qualifications in a calm, structured environment. Whether catching up or pushing ahead, we meet each student exactly where they are.',
  },
  {
    slug: 'creative-performing-arts',
    title: 'Creative & Performing Arts',
    tagline: 'Music, dance, drama, and visual arts to unlock creative potential',
    heroColor: 'coral',
    icon: 'Music',
    highlights: [
      'Music production & theory',
      'Performing arts & drama',
      'Visual arts & digital media',
      'Film-making & photography',
      'Accredited arts awards',
      'Showcase performances & exhibitions',
    ],
    description:
      'Creativity is at the heart of MCR. Our Creative & Performing Arts programme gives students a platform to express themselves, develop confidence, and gain formal recognition for their talent.',
  },
  {
    slug: 'wellbeing-mentoring',
    title: 'Wellbeing & Mentoring',
    tagline: 'Pastoral support, mental health tools, and 1:1 key worker sessions',
    heroColor: 'teal',
    icon: 'Heart',
    highlights: [
      'Weekly 1:1 key worker sessions',
      'Mindfulness & regulation techniques',
      'Peer support groups',
      'Therapist-led workshops (termly)',
      'Transition planning support',
      'Family liaison included',
    ],
    description:
      'Wellbeing is not an add-on — it is the foundation. Every student has a dedicated key worker who provides continuity, advocacy, and pastoral support throughout their placement.',
  },
  {
    slug: 'life-skills-employability',
    title: 'Life Skills & Employability',
    tagline: 'Practical skills for independent living and future careers',
    heroColor: 'amber',
    icon: 'Briefcase',
    highlights: [
      'Financial literacy & budgeting',
      'Cooking & nutrition',
      'CV writing & interview prep',
      'Work experience placements',
      'First aid & personal safety',
      'Employer visits & career talks',
    ],
    description:
      'Young people leave MCR ready for the real world. Our Life Skills & Employability programme covers everything from managing money to securing a job — practical, hands-on, and evidence-based.',
  },
  {
    slug: 'enrichment-activities',
    title: 'Enrichment Activities',
    tagline: 'Sports, outdoor education, trips, and community projects',
    heroColor: 'purple',
    icon: 'Sparkles',
    highlights: [
      'Weekly sports sessions',
      'Outdoor / Duke of Edinburgh-style activities',
      'Community projects & volunteering',
      'Day trips & cultural visits',
      'Cooking clubs & gardening',
      'Celebration events each term',
    ],
    description:
      'Beyond the curriculum, enrichment builds character. Our Enrichment programme broadens horizons, builds resilience, and creates memories — all while developing teamwork and leadership.',
  },
]

export function getProgramme(slug: string): Programme | undefined {
  return PROGRAMMES.find((p) => p.slug === slug)
}
