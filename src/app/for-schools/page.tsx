import type { Metadata } from 'next'
import ForSchoolsHero from '@/components/for-schools/ForSchoolsHero'
import WhyChooseUs from '@/components/for-schools/WhyChooseUs'
import TrackRecord from '@/components/for-schools/TrackRecord'
import HowItWorks from '@/components/for-schools/HowItWorks'
import CaseStudies from '@/components/for-schools/CaseStudies'
import ReferralCTABanner from '@/components/for-schools/ReferralCTABanner'

export const metadata: Metadata = {
  title: 'For Schools & Local Authorities — MCR Educational',
  description:
    'Partner with MCR Educational to provide specialist alternative provision for young people aged 11–16. Trusted by 40+ Greater Manchester schools. Make a referral today.',
  openGraph: {
    title: 'For Schools & Local Authorities — MCR Educational',
    description:
      'Partner with MCR Educational to provide specialist alternative provision for young people aged 11–16. Trusted by 40+ Greater Manchester schools.',
    url: '/for-schools',
  },
}

export default function ForSchoolsPage() {
  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <ForSchoolsHero />

      {/* ── 2. WHY CHOOSE US ─────────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── 3. TRACK RECORD (animated stats) ─────────────────────────────── */}
      <TrackRecord />

      {/* ── 4. HOW IT WORKS (5-step timeline) ────────────────────────────── */}
      <HowItWorks />

      {/* ── 5. CASE STUDIES / SUCCESS STORIES ────────────────────────────── */}
      <CaseStudies />

      {/* ── 6. REFERRAL CTA BANNER ───────────────────────────────────────── */}
      <ReferralCTABanner />
    </main>
  )
}
