// FILE: src/components/programmes/ProgrammesHero.tsx
import Link from 'next/link'
import { LayoutGrid } from 'lucide-react'

export default function ProgrammesHero() {
  return (
    <section
      aria-labelledby="programmes-hero-heading"
      className="relative bg-primary pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/5 blur-3xl" />
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
              <Link
                href="/"
                className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/20">
              /
            </li>
            <li className="text-white/70" aria-current="page">
              Programmes
            </li>
          </ol>
        </nav>

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          <LayoutGrid size={13} aria-hidden="true" />
          Our Programmes
        </div>

        {/* Heading */}
        <h1
          id="programmes-hero-heading"
          className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl"
        >
          Five Pathways to{' '}
          <span className="relative inline-block">
            Success
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full opacity-70"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl">
          Every programme is tailored, accredited, and designed around the young person — not the
          other way round.
        </p>
      </div>
    </section>
  )
}
