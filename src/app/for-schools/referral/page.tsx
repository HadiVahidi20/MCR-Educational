import type { Metadata } from 'next'
import ReferralWizard from '@/components/referral/ReferralWizard'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Make a Referral | MCR Educational',
  description:
    'Refer a young person to MCR Educational using our secure online form. We will respond within one working day.',
}

export default function ReferralPage() {
  return (
    <main id="main-content">
      {/* Page hero */}
      <section
        aria-labelledby="referral-page-heading"
        className="relative bg-primary pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <a
                  href="/"
                  className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white"
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">/</li>
              <li>
                <a
                  href="/for-schools"
                  className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white"
                >
                  For Schools
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">/</li>
              <li className="text-white/70" aria-current="page">
                Make a Referral
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <FileText size={13} aria-hidden="true" />
            Secure online referral
          </div>

          <h1
            id="referral-page-heading"
            className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-2xl"
          >
            Make a{' '}
            <span className="relative inline-block">
              Referral
              <span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-secondary rounded-full opacity-80"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl">
            Complete the five-step form below. Your progress is saved automatically — you can
            return to it at any time. We will respond within one working day.
          </p>
        </div>
      </section>

      {/* Wizard */}
      <section
        aria-label="Referral form"
        className="bg-neutral-light py-16 sm:py-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReferralWizard />
        </div>
      </section>
    </main>
  )
}
