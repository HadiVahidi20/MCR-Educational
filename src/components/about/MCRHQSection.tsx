import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const parentLinks = [
  { label: 'MCR HQ CIC website', href: 'https://mcrhq.co.uk' },
  { label: 'Our programmes', href: '/programmes' },
  { label: 'Meet the team', href: '/about/team' },
]

export default function MCRHQSection() {
  return (
    <section
      aria-labelledby="mcrhq-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Logo / icon block */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -top-8 -left-8 w-56 h-56 rounded-full bg-primary/8 blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl bg-primary/5 border border-primary/10 overflow-hidden flex flex-col min-h-[280px]">
              {/* Community image */}
              <div className="relative h-44 w-full">
                <Image
                  src="/images/about/community.jpg"
                  alt="MCR HQ community gathering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-4 p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center -mt-12 relative z-10 shadow-lg border-4 border-white">
                  <Building2 size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading font-bold text-primary text-2xl mb-1">MCR HQ CIC</p>
                  <p className="text-neutral-dark/50 text-sm">Community Interest Company</p>
                  <p className="text-neutral-dark/50 text-sm">Greater Manchester</p>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <a
                    href="https://mcrhq.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit MCR HQ CIC website (opens in new tab)"
                  >
                    Visit MCR HQ
                    <ArrowUpRight size={14} aria-hidden="true" className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
              Part of something bigger
            </p>
            <h2
              id="mcrhq-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl leading-tight mb-6"
            >
              Part of MCR HQ CIC
            </h2>
            <div className="space-y-4 text-neutral-dark/70 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                MCR Educational operates under the umbrella of{' '}
                <strong className="text-neutral-dark font-semibold">MCR HQ CIC</strong>, a
                community interest company working across Greater Manchester to support young
                people, families, and communities through sport, arts, and education.
              </p>
              <p>
                Being part of MCR HQ means our students benefit from a wider ecosystem of support
                — from mentoring and employment pathways to community events and family
                engagement programmes.
              </p>
            </div>

            {/* Quick links */}
            <nav aria-label="Related links">
              <ul role="list" className="space-y-3">
                {parentLinks.map(({ label, href }) => {
                  const isExternal = href.startsWith('http')
                  return (
                    <li key={href}>
                      {isExternal ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors focus-visible:outline-none focus-visible:underline"
                          aria-label={`${label} (opens in new tab)`}
                        >
                          {label}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors focus-visible:outline-none focus-visible:underline"
                        >
                          {label}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
