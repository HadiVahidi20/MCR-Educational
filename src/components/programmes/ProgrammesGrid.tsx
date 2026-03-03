// FILE: src/components/programmes/ProgrammesGrid.tsx
import Link from 'next/link'
import { BookOpen, Music, Heart, Briefcase, Sparkles, ArrowRight, type LucideProps } from 'lucide-react'
import { PROGRAMMES } from '@/lib/programmes-data'

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
  navy: 'bg-primary/10 text-primary',
  coral: 'bg-secondary/10 text-secondary',
  teal: 'bg-accent/10 text-accent',
  amber: 'bg-amber-400/10 text-amber-600',
  purple: 'bg-violet-500/10 text-violet-600',
}

const pillBgMap: Record<string, string> = {
  navy: 'bg-primary/8 text-primary',
  coral: 'bg-secondary/8 text-secondary',
  teal: 'bg-accent/8 text-accent',
  amber: 'bg-amber-400/10 text-amber-700',
  purple: 'bg-violet-500/10 text-violet-700',
}

export default function ProgrammesGrid() {
  return (
    <section
      aria-labelledby="programmes-grid-heading"
      className="py-16 sm:py-20 bg-neutral-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="programmes-grid-heading" className="sr-only">
          All Programmes
        </h2>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PROGRAMMES.map((programme) => {
            const Icon = iconMap[programme.icon] ?? BookOpen
            const accentBar = accentBarMap[programme.heroColor] ?? 'bg-primary'
            const iconBg = iconBgMap[programme.heroColor] ?? 'bg-primary/10 text-primary'
            const pillBg = pillBgMap[programme.heroColor] ?? 'bg-primary/8 text-primary'
            const previewHighlights = programme.highlights.slice(0, 3)

            return (
              <li key={programme.slug}>
                <Link
                  href={`/programmes/${programme.slug}`}
                  className="group relative flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  aria-label={`${programme.title}: ${programme.tagline}`}
                >
                  {/* Top accent bar */}
                  <div className={`h-1.5 w-full ${accentBar}`} aria-hidden="true" />

                  <div className="flex flex-col flex-1 p-6">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${iconBg}`}
                      aria-hidden="true"
                    >
                      <Icon size={24} aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-neutral-dark text-xl leading-snug mb-2">
                      {programme.title}
                    </h3>

                    {/* Tagline */}
                    <p className="font-body text-sm text-neutral-dark/60 leading-relaxed mb-5">
                      {programme.tagline}
                    </p>

                    {/* Highlight pills */}
                    <ul
                      role="list"
                      className="flex flex-wrap gap-2 mb-6"
                      aria-label={`Example highlights for ${programme.title}`}
                    >
                      {previewHighlights.map((highlight) => (
                        <li
                          key={highlight}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${pillBg}`}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Spacer to push CTA to bottom */}
                    <div className="mt-auto" />

                    {/* Learn more link */}
                    <div
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-dark/60 group-hover:text-neutral-dark transition-colors"
                      aria-hidden="true"
                    >
                      Learn More
                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
