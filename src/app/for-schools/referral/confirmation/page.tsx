import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ClipboardCopy, ArrowRight, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Referral Received | MCR Educational',
  description: 'Your referral has been successfully submitted to MCR Educational.',
  robots: { index: false, follow: false },
}

interface Props {
  searchParams: Promise<{ ref?: string }>
}

export default async function ReferralConfirmationPage({ searchParams }: Props) {
  const { ref } = await searchParams
  const referenceNumber = ref ?? 'N/A'

  return (
    <main id="main-content" className="min-h-screen bg-neutral-light">
      {/* Top accent bar */}
      <div className="bg-primary h-2 w-full" aria-hidden="true" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Success icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
            <CheckCircle size={44} className="text-accent" aria-hidden="true" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-heading font-bold text-primary text-3xl sm:text-4xl text-center leading-tight mb-4">
          Referral Received
        </h1>
        <p className="text-neutral-dark/60 text-center text-lg mb-10">
          Thank you — your referral has been submitted successfully.
        </p>

        {/* Reference number card */}
        <div className="bg-white rounded-2xl border border-primary/10 shadow-sm p-6 sm:p-8 mb-8 text-center">
          <p className="text-sm font-medium text-neutral-dark/50 uppercase tracking-wider mb-2">
            Your Reference Number
          </p>
          <p
            className="font-stats font-bold text-primary text-3xl sm:text-4xl tracking-wide mb-4"
            aria-live="polite"
          >
            {referenceNumber}
          </p>
          <p className="text-sm text-neutral-dark/50">
            Please keep this number safe — you may need it when following up with our team.
          </p>
        </div>

        {/* What happens next */}
        <div className="bg-white rounded-2xl border border-primary/10 shadow-sm p-6 sm:p-8 mb-8">
          <h2 className="font-heading font-bold text-primary text-xl mb-4 flex items-center gap-2">
            <ClipboardCopy size={18} aria-hidden="true" />
            What happens next?
          </h2>
          <ol className="space-y-4 text-neutral-dark/70 text-sm leading-relaxed list-none">
            {[
              'You will receive a confirmation email with your reference number shortly.',
              'A member of our admissions team will review your referral within one working day.',
              'We will contact you by phone or email to discuss next steps and arrange an initial assessment.',
              'Once accepted, we will arrange a transition meeting with you, the young person, and their family.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Contact details */}
        <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6 mb-10">
          <p className="text-sm font-medium text-primary mb-3">Need to speak with us sooner?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:01611234567"
              className="flex items-center gap-2 text-sm text-primary font-medium hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              <Phone size={14} aria-hidden="true" />
              0161 123 4567
            </a>
            <a
              href="mailto:info@mcreducational.co.uk"
              className="flex items-center gap-2 text-sm text-primary font-medium hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              <Mail size={14} aria-hidden="true" />
              info@mcreducational.co.uk
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/for-schools"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Back to For Schools
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-primary/20 text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
