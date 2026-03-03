import Link from 'next/link'
import { ArrowRight, Download, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ReferralCTABanner() {
  return (
    <section
      id="referral"
      aria-labelledby="referral-cta-heading"
      className="bg-secondary relative overflow-hidden py-20 sm:py-24"
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              Ready to refer?
            </div>
            <h2
              id="referral-cta-heading"
              className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
            >
              Start a Referral Today
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Use our online form for the fastest response, or download our referral pack to
              complete and return by email. We aim to respond to all referrals within one
              working day.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-secondary hover:bg-white/90 font-bold shadow-lg px-8 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                <Link href="/for-schools/referral">
                  Online Referral Form
                  <ArrowRight size={18} aria-hidden="true" className="ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 bg-transparent font-semibold px-8 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                <a
                  href="/downloads/mcr-referral-pack.pdf"
                  download
                  aria-label="Download referral information pack (PDF)"
                >
                  <Download size={16} aria-hidden="true" className="mr-2" />
                  Download Pack (PDF)
                </a>
              </Button>
            </div>

            <p className="mt-6 text-white/50 text-sm flex items-center gap-2">
              <Phone size={13} aria-hidden="true" />
              Or call{' '}
              <a
                href="tel:01611234567"
                className="text-white font-semibold hover:underline focus-visible:outline-none focus-visible:underline"
              >
                0161 123 4567
              </a>{' '}
              to speak to a member of the team
            </p>
          </div>

          {/* Right: info box */}
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 space-y-5">
            <p className="font-heading font-bold text-white text-lg mb-2">
              What to include in a referral
            </p>
            {[
              "Young person's name, DOB, and year group",
              'Current school and reason for referral',
              'EHCP or SEND support plan (if applicable)',
              'Recent attendance and exclusion history',
              'Relevant medical or safeguarding information',
              'Parent / carer contact details and consent',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-white/75 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
