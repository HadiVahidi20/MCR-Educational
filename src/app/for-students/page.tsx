// FILE: src/app/for-students/page.tsx

import type { Metadata } from 'next'
import ForStudentsHero from '@/components/for-students/ForStudentsHero'
import WhatWeDo from '@/components/for-students/WhatWeDo'
import StudentStories from '@/components/for-students/StudentStories'
import ActivityGallery from '@/components/for-students/ActivityGallery'
import JoinCTA from '@/components/for-students/JoinCTA'

export const metadata: Metadata = {
  title: 'For Students | MCR Educational',
  description:
    'Discover music, sport, art, life skills, and real qualifications at MCR Educational — a place built around you. Alternative provision for young people aged 11–16 in Greater Manchester.',
  openGraph: {
    title: 'For Students | MCR Educational',
    description:
      'Discover music, sport, art, life skills, and real qualifications at MCR Educational — a place built around you.',
    url: '/for-students',
  },
}

export default function ForStudentsPage() {
  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <ForStudentsHero />

      {/* ── 2. WHAT WE DO (activities grid) ──────────────────────────────── */}
      <WhatWeDo />

      {/* ── 3. STUDENT STORIES (testimonial slider) ───────────────────────── */}
      <StudentStories />

      {/* ── 4. ACTIVITY GALLERY (masonry) ─────────────────────────────────── */}
      <ActivityGallery />

      {/* ── 5. JOIN CTA ───────────────────────────────────────────────────── */}
      <JoinCTA />
    </main>
  )
}
