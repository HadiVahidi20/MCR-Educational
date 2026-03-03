import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import MissionStatement from '@/components/about/MissionStatement'
import ValuesSection from '@/components/home/ValuesSection'
import MilestonesTimeline from '@/components/about/MilestonesTimeline'
import MCRHQSection from '@/components/about/MCRHQSection'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'About Us — MCR Educational',
  description:
    'Learn about MCR Educational — our story, mission, values, and our role as part of MCR HQ CIC in Greater Manchester.',
  openGraph: {
    title: 'About Us — MCR Educational',
    description:
      'Learn about MCR Educational — our story, mission, values, and our role as part of MCR HQ CIC in Greater Manchester.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <AboutHero />

      {/* ── 2. OUR STORY ─────────────────────────────────────────────────── */}
      <OurStory />

      {/* ── 3. MISSION STATEMENT ─────────────────────────────────────────── */}
      <MissionStatement />

      {/* ── 4. VALUES (reused from homepage) ─────────────────────────────── */}
      <ValuesSection />

      {/* ── 5. MILESTONES TIMELINE ───────────────────────────────────────── */}
      <MilestonesTimeline />

      {/* ── 6. PART OF MCR HQ CIC ────────────────────────────────────────── */}
      <MCRHQSection />

      {/* ── 7. CTA ───────────────────────────────────────────────────────── */}
      <CtaBanner />
    </main>
  )
}
