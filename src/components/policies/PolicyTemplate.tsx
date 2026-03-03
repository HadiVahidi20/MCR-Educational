// FILE: src/components/policies/PolicyTemplate.tsx

import Link from 'next/link'
import { CalendarDays, Download, FileText, Mail } from 'lucide-react'
import type { Policy } from '@/lib/policies-data'

type Props = {
  policy: Policy
}

export default function PolicyTemplate({ policy }: Props) {
  const formattedDate = new Date(policy.lastUpdated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main id="main-content">
      {/* ── HERO (mini) ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="policy-heading"
        className="relative bg-primary py-12 overflow-hidden"
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li>
                <Link
                  href="/policies"
                  className="hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  Policies
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white/80" aria-current="page">
                {policy.title}
              </li>
            </ol>
          </nav>

          {/* Title */}
          <h1
            id="policy-heading"
            className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-4"
          >
            {policy.title}
          </h1>

          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-white/60 text-sm">
              <CalendarDays size={14} aria-hidden="true" />
              <span>Last updated {formattedDate}</span>
            </div>
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/15 text-white border border-white/20"
            >
              {policy.version}
            </span>
          </div>

          {/* Summary */}
          <p className="font-body text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
            {policy.summary}
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div className="bg-neutral-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:gap-16">

            {/* ── SIDEBAR — Table of Contents ─────────────────────────────── */}
            <aside aria-label="Table of contents">
              {/* Mobile: collapsible via <details> — no JS required */}
              <details className="lg:hidden mb-8 bg-white rounded-2xl shadow-sm border border-neutral-200/60 overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none font-heading font-semibold text-neutral-dark text-sm list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-2">
                    <FileText size={15} aria-hidden="true" className="text-primary" />
                    Contents
                  </span>
                  <span className="text-neutral-dark/40 text-xs">Tap to expand</span>
                </summary>
                <nav aria-label="Policy sections">
                  <ol className="px-5 pb-4 space-y-1">
                    {policy.sections.map((section, index) => (
                      <li key={index}>
                        <a
                          href={`#section-${index}`}
                          className="flex items-start gap-2 py-2 text-sm text-neutral-dark/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        >
                          <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold font-stats mt-0.5">
                            {index + 1}
                          </span>
                          <span className="leading-snug">{section.heading}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </details>

              {/* Desktop: sticky sidebar */}
              <div className="hidden lg:block sticky top-24">
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/60 overflow-hidden">
                  <div className="px-5 py-4 border-b border-neutral-100">
                    <p className="flex items-center gap-2 font-heading font-semibold text-neutral-dark text-sm">
                      <FileText size={15} aria-hidden="true" className="text-primary" />
                      Contents
                    </p>
                  </div>
                  <nav aria-label="Policy sections">
                    <ol className="px-5 py-4 space-y-1">
                      {policy.sections.map((section, index) => (
                        <li key={index}>
                          <a
                            href={`#section-${index}`}
                            className="flex items-start gap-2.5 py-2 text-sm text-neutral-dark/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded group"
                          >
                            <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold font-stats mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                              {index + 1}
                            </span>
                            <span className="leading-snug">{section.heading}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>

                {/* Download button in sidebar */}
                <div className="mt-4">
                  {policy.downloadUrl ? (
                    <a
                      href={policy.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-primary text-white text-sm font-medium px-4 py-3 rounded-xl hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <Download size={15} aria-hidden="true" />
                      Download PDF
                    </a>
                  ) : (
                    <div
                      aria-disabled="true"
                      className="flex items-center justify-center gap-2 w-full bg-neutral-200 text-neutral-dark/40 text-sm font-medium px-4 py-3 rounded-xl cursor-not-allowed select-none"
                    >
                      <Download size={15} aria-hidden="true" />
                      PDF coming soon
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* ── MAIN ARTICLE ────────────────────────────────────────────── */}
            <div>
              <article aria-labelledby="policy-heading" className="space-y-10">
                {policy.sections.map((section, index) => (
                  <section
                    key={index}
                    id={`section-${index}`}
                    aria-labelledby={`section-heading-${index}`}
                    className="scroll-mt-28 bg-white rounded-2xl shadow-sm border border-neutral-200/60 px-6 py-8 sm:px-8"
                  >
                    <h2
                      id={`section-heading-${index}`}
                      className="font-heading font-bold text-neutral-dark text-xl sm:text-2xl mb-4 flex items-center gap-3"
                    >
                      <span
                        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold font-stats"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      {section.heading}
                    </h2>
                    <p className="font-body text-neutral-dark/70 leading-relaxed text-base sm:text-[17px]">
                      {section.content}
                    </p>
                  </section>
                ))}
              </article>

              {/* Mobile: Download PDF button */}
              <div className="mt-8 lg:hidden">
                {policy.downloadUrl ? (
                  <a
                    href={policy.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <Download size={15} aria-hidden="true" />
                    Download PDF
                  </a>
                ) : (
                  <div
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 bg-neutral-200 text-neutral-dark/40 text-sm font-medium px-6 py-3 rounded-xl cursor-not-allowed select-none"
                  >
                    <Download size={15} aria-hidden="true" />
                    PDF coming soon
                  </div>
                )}
              </div>

              {/* Footer contact note */}
              <div className="mt-10 bg-white rounded-2xl border border-neutral-200/60 px-6 py-6 sm:px-8 flex items-start gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                  <Mail size={16} aria-hidden="true" className="text-accent" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-neutral-dark text-sm mb-1">
                    Questions about this policy?
                  </p>
                  <p className="font-body text-neutral-dark/60 text-sm leading-relaxed">
                    Email{' '}
                    <a
                      href="mailto:info@mcreducational.co.uk"
                      className="text-primary underline underline-offset-2 hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                    >
                      info@mcreducational.co.uk
                    </a>{' '}
                    and a member of our team will be happy to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
