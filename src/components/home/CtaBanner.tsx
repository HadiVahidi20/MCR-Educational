import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-secondary relative overflow-hidden py-20 sm:py-24"
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-primary/20 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          Ready to take the next step?
        </div>

        {/* Heading */}
        <h2
          id="cta-heading"
          className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4 max-w-3xl mx-auto leading-tight"
        >
          Find out how MCR Educational can support your young person
        </h2>

        {/* Subtitle */}
        <p className="text-white/75 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Whether you&apos;re a school, local authority, or parent — we&apos;re here to
          help. Get in touch today and we&apos;ll respond within 48 hours.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-secondary hover:bg-white/90 font-bold shadow-lg shadow-primary/20 px-8"
          >
            <Link href="/for-schools#referral">
              Make a Referral
              <ArrowRight size={18} aria-hidden="true" className="ml-1" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent font-semibold px-8"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Phone fallback */}
        <p className="mt-8 text-white/55 text-sm flex items-center justify-center gap-2">
          <Phone size={13} aria-hidden="true" />
          Or call us directly on{' '}
          <a
            href="tel:01611234567"
            className="text-white font-semibold hover:underline focus-visible:outline-none focus-visible:underline"
          >
            0161 123 4567
          </a>
        </p>
      </div>
    </section>
  );
}
