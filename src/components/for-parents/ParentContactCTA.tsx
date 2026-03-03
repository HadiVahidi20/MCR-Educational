// FILE: d:\TheHerd\MCR\Educational\src\components\for-parents\ParentContactCTA.tsx
import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ParentContactCTA() {
  return (
    <section
      aria-labelledby="parent-contact-cta-heading"
      className="relative bg-[#E85D75] py-20 sm:py-24 overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#1E3A5F]/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-6 border border-white/25">
          Friendly, no-pressure support
        </p>

        <h2
          id="parent-contact-cta-heading"
          className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
        >
          Have Questions? Let&apos;s Talk.
        </h2>

        <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-body leading-relaxed mb-10">
          Our admissions team is friendly and experienced. There are no silly questions — we are
          here to help you find the right path for your child.
        </p>

        {/* Phone */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <a
            href="tel:01611234567"
            className="group flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E85D75] rounded-lg"
            aria-label="Call MCR Educational on 0161 123 4567"
          >
            <span
              className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors"
              aria-hidden="true"
            >
              <Phone size={22} className="text-white" aria-hidden="true" />
            </span>
            <span className="font-stats font-bold text-white text-3xl sm:text-4xl tracking-tight group-hover:underline underline-offset-4">
              0161 123 4567
            </span>
          </a>
        </div>

        {/* Email */}
        <a
          href="mailto:info@mcreducational.co.uk"
          className="inline-flex items-center gap-2 text-white/85 text-base font-semibold hover:text-white underline underline-offset-4 transition-colors mb-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E85D75] rounded-sm"
        >
          <Mail size={18} aria-hidden="true" />
          info@mcreducational.co.uk
        </a>

        {/* CTA button */}
        <div>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#E85D75] hover:bg-white/90 font-bold shadow-lg px-8 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E85D75]"
          >
            <Link href="/contact">
              Send Us a Message
              <ArrowRight size={18} aria-hidden="true" className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
