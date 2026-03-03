// FILE: d:\TheHerd\MCR\Educational\src\app\for-parents\page.tsx
import type { Metadata } from 'next'
import ForParentsHero from '@/components/for-parents/ForParentsHero'
import WhatToExpect from '@/components/for-parents/WhatToExpect'
import TypicalDay from '@/components/for-parents/TypicalDay'
import SafeguardingPromise from '@/components/for-parents/SafeguardingPromise'
import ParentTestimonials from '@/components/for-parents/ParentTestimonials'
import ParentFAQ from '@/components/for-parents/ParentFAQ'
import ParentContactCTA from '@/components/for-parents/ParentContactCTA'

export const metadata: Metadata = {
  title: 'For Parents | MCR Educational',
  description:
    'MCR Educational is a specialist alternative provision supporting young people aged 11–16. Discover what to expect, how we keep your child safe, and how to get in touch.',
  openGraph: {
    title: 'For Parents | MCR Educational',
    description:
      'MCR Educational supports young people aged 11–16 with a safe, structured, and nurturing alternative provision. Find out how we work with families.',
    url: '/for-parents',
  },
}

export default function ForParentsPage() {
  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <ForParentsHero />

      {/* ── 2. WHAT TO EXPECT ────────────────────────────────────────────── */}
      <WhatToExpect />

      {/* ── 3. TYPICAL DAY ───────────────────────────────────────────────── */}
      <TypicalDay />

      {/* ── 4. SAFEGUARDING PROMISE ──────────────────────────────────────── */}
      <SafeguardingPromise />

      {/* ── 5. PARENT TESTIMONIALS ───────────────────────────────────────── */}
      <ParentTestimonials />

      {/* ── 6. PARENT FAQ ────────────────────────────────────────────────── */}
      <ParentFAQ />

      {/* ── 7. CONTACT CTA ───────────────────────────────────────────────── */}
      <ParentContactCTA />
    </main>
  )
}
