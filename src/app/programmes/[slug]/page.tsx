// FILE: src/app/programmes/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, BookOpen, Music, Heart, Briefcase, Sparkles, type LucideProps } from 'lucide-react'
import { PROGRAMMES, getProgramme } from '@/lib/programmes-data'

type Props = {
  params: Promise<{ slug: string }>
}

type IconComponent = React.ComponentType<LucideProps>

const iconMap: Record<string, IconComponent> = {
  BookOpen,
  Music,
  Heart,
  Briefcase,
  Sparkles,
}

const accentBarMap: Record<string, string> = {
  navy: 'bg-primary',
  coral: 'bg-secondary',
  teal: 'bg-accent',
  amber: 'bg-amber-400',
  purple: 'bg-violet-500',
}

const iconBgMap: Record<string, string> = {
  navy: 'bg-white/20 text-white',
  coral: 'bg-white/20 text-white',
  teal: 'bg-white/20 text-white',
  amber: 'bg-white/20 text-white',
  purple: 'bg-white/20 text-white',
}

const heroBgMap: Record<string, string> = {
  navy: 'bg-primary',
  coral: 'bg-secondary',
  teal: 'bg-accent',
  amber: 'bg-amber-500',
  purple: 'bg-violet-600',
}

export async function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const programme = getProgramme(slug)

  if (!programme) {
    notFound()
  }

  return {
    title: `${programme.title} | Programmes | MCR Educational`,
    description: programme.description,
    openGraph: {
      title: `${programme.title} | Programmes | MCR Educational`,
      description: programme.description,
      url: `/programmes/${programme.slug}`,
    },
  }
}

export default async function ProgrammeDetailPage({ params }: Props) {
  const { slug } = await params
  const programme = getProgramme(slug)

  if (!programme) {
    notFound()
  }

  const Icon = iconMap[programme.icon] ?? BookOpen
  const heroBg = heroBgMap[programme.heroColor] ?? 'bg-primary'
  const iconBg = iconBgMap[programme.heroColor] ?? 'bg-white/20 text-white'

  return (
    <main id="main-content">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="programme-detail-heading"
        className={`relative ${heroBg} pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden`}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-black/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/50 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:text-white"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                /
              </li>
              <li>
                <Link
                  href="/programmes"
                  className="hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:text-white"
                >
                  Programmes
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                /
              </li>
              <li className="text-white/80" aria-current="page">
                {programme.title}
              </li>
            </ol>
          </nav>

          {/* Icon */}
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${iconBg}`}
            aria-hidden="true"
          >
            <Icon size={28} aria-hidden="true" />
          </div>

          {/* Heading */}
          <h1
            id="programme-detail-heading"
            className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4 max-w-3xl"
          >
            {programme.title}
          </h1>

          {/* Tagline */}
          <p className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
            {programme.tagline}
          </p>

          {/* Back link */}
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to all programmes
          </Link>
        </div>
      </section>

      {/* ── 2. DESCRIPTION ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="programme-description-heading"
        className="bg-white py-14 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="programme-description-heading"
              className="font-heading font-bold text-neutral-dark text-2xl sm:text-3xl mb-5"
            >
              About This Programme
            </h2>
            <p className="font-body text-neutral-dark/70 text-lg leading-relaxed">
              {programme.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT YOU'LL LEARN ─────────────────────────────────────────── */}
      <section
        aria-labelledby="programme-highlights-heading"
        className="bg-neutral-light py-14 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="programme-highlights-heading"
            className="font-heading font-bold text-neutral-dark text-2xl sm:text-3xl mb-10 text-center"
          >
            What You&apos;ll Learn
          </h2>

          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {programme.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm"
              >
                <CheckCircle2
                  size={20}
                  aria-hidden="true"
                  className="text-accent shrink-0 mt-0.5"
                />
                <span className="font-body text-neutral-dark/80 text-sm leading-snug">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. CTA STRIP ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="programme-cta-heading"
        className="bg-secondary py-14 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="programme-cta-heading"
            className="font-heading font-bold text-white text-2xl sm:text-3xl mb-4"
          >
            Ready to Find Out More?
          </h2>
          <p className="font-body text-white/75 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re a school, a parent, or a young person — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/for-schools/referral"
              className="inline-flex items-center gap-2 bg-white text-secondary hover:bg-white/90 font-bold text-sm px-7 py-3.5 rounded-full transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              Make a Referral
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/50 hover:border-white text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              Contact Us
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
