// FILE: src/components/gallery/GalleryHero.tsx

import Image from 'next/image'
import { Images } from 'lucide-react'
import Link from 'next/link'

export default function GalleryHero() {
  return (
    <section
      aria-labelledby="gallery-hero-heading"
      className="relative bg-primary pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/gallery/gallery-4.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-15"
        sizes="100vw"
      />
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
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
                className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/20">/</li>
            <li className="text-white/70" aria-current="page">
              Gallery
            </li>
          </ol>
        </nav>

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          <Images size={13} aria-hidden="true" />
          Gallery
        </div>

        {/* Heading */}
        <h1
          id="gallery-hero-heading"
          className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-2xl"
        >
          Life at MCR{' '}
          <span className="relative inline-block">
            Educational
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full opacity-70"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
          A glimpse into the day-to-day life, achievements, and community spirit of our centre.
        </p>

        {/* Consent note */}
        <p className="text-white/40 text-xs sm:text-sm italic">
          All photos and videos published with full consent from students, parents, and carers.
        </p>
      </div>
    </section>
  )
}
