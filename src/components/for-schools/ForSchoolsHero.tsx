import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ForSchoolsHero() {
  return (
    <section
      aria-labelledby="for-schools-hero-heading"
      className="relative bg-primary pt-24 pb-20 sm:pt-28 sm:pb-28 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/pages/schools.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-15"
        sizes="100vw"
      />
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
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
              <a href="/" className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white">
                Home
              </a>
            </li>
            <li aria-hidden="true" className="text-white/20">/</li>
            <li className="text-white/70" aria-current="page">For Schools</li>
          </ol>
        </nav>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          Schools &amp; Local Authorities
        </div>

        <h1
          id="for-schools-hero-heading"
          className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl"
        >
          Partner With{' '}
          <span className="relative inline-block text-accent">
            MCR Educational
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-accent/40 rounded-full"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
          We provide specialist alternative provision for young people aged 11–16 who need more
          than mainstream school can offer. Trusted by 40+ Greater Manchester schools and two
          local authorities.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg px-8 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Link href="/for-schools#referral">
              Make a Referral
              <ArrowRight size={18} aria-hidden="true" className="ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold px-8 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <a href="/downloads/mcr-referral-pack.pdf" download aria-label="Download referral information pack (PDF)">
              <Download size={16} aria-hidden="true" className="mr-2" />
              Download Referral Pack
            </a>
          </Button>
        </div>

        {/* Phone fallback */}
        <p className="mt-8 text-white/40 text-sm flex items-center gap-2">
          <Phone size={13} aria-hidden="true" />
          Prefer to talk? Call{' '}
          <a
            href="tel:01611234567"
            className="text-white/70 font-semibold hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
          >
            0161 123 4567
          </a>
        </p>
      </div>
    </section>
  )
}
