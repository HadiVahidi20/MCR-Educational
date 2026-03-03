// FILE: src/lib/team-data.ts

export type TeamMember = {
  id: string
  name: string
  role: string
  department: string
  bio: string
  initials: string
  accentColor: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  // ── Leadership ──────────────────────────────────────────────────────────
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Executive Headteacher',
    department: 'leadership',
    bio: "Sarah has 20 years in alternative provision and leads MCR's educational vision with passion and expertise.",
    initials: 'SM',
    accentColor: 'primary',
  },
  {
    id: '2',
    name: 'James Okafor',
    role: 'Deputy Head & SENCO',
    department: 'leadership',
    bio: 'James oversees our SEND provision and leads on curriculum development and staff training.',
    initials: 'JO',
    accentColor: 'secondary',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Director of Safeguarding',
    department: 'leadership',
    bio: 'Priya is our Designated Safeguarding Lead with extensive experience in child protection and multi-agency working.',
    initials: 'PS',
    accentColor: 'accent',
  },

  // ── Teaching ─────────────────────────────────────────────────────────────
  {
    id: '4',
    name: 'Tom Baxter',
    role: 'Lead Teacher – English & Media',
    department: 'teaching',
    bio: 'Tom brings creative energy to English and media studies, making learning relevant and engaging for every student.',
    initials: 'TB',
    accentColor: 'primary',
  },
  {
    id: '5',
    name: 'Amara Diallo',
    role: 'Lead Teacher – Maths & Science',
    department: 'teaching',
    bio: "Amara's methods have helped hundreds of students achieve qualifications they never thought possible.",
    initials: 'AD',
    accentColor: 'secondary',
  },
  {
    id: '6',
    name: "Liam O'Brien",
    role: 'Creative Arts Tutor',
    department: 'teaching',
    bio: 'Liam runs our music and performing arts programme, nurturing talent and building confidence through creativity.',
    initials: 'LO',
    accentColor: 'accent',
  },

  // ── Pastoral ─────────────────────────────────────────────────────────────
  {
    id: '7',
    name: 'Fatima Hassan',
    role: 'Senior Key Worker',
    department: 'pastoral',
    bio: 'Fatima builds deep, trusting relationships with young people, providing consistent support through their journey at MCR.',
    initials: 'FH',
    accentColor: 'primary',
  },
  {
    id: '8',
    name: 'Ryan Clarke',
    role: 'Wellbeing Mentor',
    department: 'pastoral',
    bio: 'Ryan specialises in trauma-informed practice and supports students with emotional regulation and mental health strategies.',
    initials: 'RC',
    accentColor: 'secondary',
  },

  // ── Support ──────────────────────────────────────────────────────────────
  {
    id: '9',
    name: 'Natalie Brooks',
    role: 'Office Manager',
    department: 'support',
    bio: 'Natalie keeps everything running smoothly and is often the friendly first point of contact for families and professionals.',
    initials: 'NB',
    accentColor: 'accent',
  },
  {
    id: '10',
    name: 'David Chen',
    role: 'IT & Operations',
    department: 'support',
    bio: 'David manages our digital infrastructure and ensures staff and students always have the tools they need.',
    initials: 'DC',
    accentColor: 'primary',
  },
]
