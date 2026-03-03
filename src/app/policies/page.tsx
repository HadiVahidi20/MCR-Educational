// FILE: src/app/policies/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Shield } from 'lucide-react'
import { POLICIES } from '@/lib/policies-data'

export const metadata: Metadata = {
  title: 'Policies & Governance | MCR Educational',
  description:
    'Read MCR Educational\'s policies and governance documents, including our safeguarding policy, privacy policy, complaints procedure, and more.',
  openGraph: {
    title: 'Policies & Governance | MCR Educational',
    description:
      'Transparency and accountability are fundamental to how we operate at MCR Educational.',
    url: '/policies',
  },
}

export default function PoliciesPage() {
  return (
    <main id="main-content">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="policies-heading"
        className="relative bg-primary py-20 sm:py-24 overflow-hidden"
      >
        {/* Decorative dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Decorative blobs */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-accent/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Shield size={12} aria-hidden="true" />
              Transparency & Accountability
            </div>

            <h1
              id="policies-heading"
              className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-5"
            >
              Policies &amp; Governance
            </h1>

            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl">
              Transparency and accountability are fundamental to how we operate. Find all
              our policies, procedures, and governance documents below.
            </p>
          </div>
        </div>
      </section>

      {/* ── POLICY GRID ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="policies-grid-heading"
        className="bg-neutral-light py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="policies-grid-heading" className="sr-only">
            All policies
          </h2>

          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {POLICIES.map((policy) => {
              const formattedDate = new Date(policy.lastUpdated).toLocaleDateString(
                'en-GB',
                { day: 'numeric', month: 'short', year: 'numeric' },
              )

              return (
                <li key={policy.slug}>
                  <Link
                    href={`/policies/${policy.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-neutral-200/60 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label={`${policy.title} — last updated ${formattedDate}`}
                  >
                    {/* Card top accent bar */}
                    <div
                      className="h-1.5 bg-primary group-hover:bg-secondary transition-colors duration-200"
                      aria-hidden="true"
                    />

                    <div className="flex flex-col flex-1 px-6 py-6">
                      {/* Version badge + date row */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/15">
                          {policy.version}
                        </span>
                        <div className="flex items-center gap-1 text-neutral-dark/40 text-xs">
                          <CalendarDays size={11} aria-hidden="true" />
                          <span>{formattedDate}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-neutral-dark text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                        {policy.title}
                      </h3>

                      {/* Summary */}
                      <p className="font-body text-neutral-dark/60 text-sm leading-relaxed flex-1">
                        {policy.summary}
                      </p>

                      {/* Footer link row */}
                      <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-primary text-sm font-medium group-hover:text-secondary transition-colors duration-200">
                          Read policy
                        </span>
                        <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
                          <ArrowRight
                            size={13}
                            aria-hidden="true"
                            className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── CONTACT STRIP ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="policies-contact-heading"
        className="bg-white py-14 sm:py-16 border-t border-neutral-200/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="policies-contact-heading"
            className="font-heading font-bold text-neutral-dark text-2xl sm:text-3xl mb-3"
          >
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="font-body text-neutral-dark/60 text-base sm:text-lg mb-6 max-w-xl mx-auto">
            If you have questions about any of our policies or need additional
            documentation, please get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Contact Us
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
