import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Users, TrendingUp, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  {
    icon: Users,
    value: '350+',
    label: 'Young People Supported',
  },
  {
    icon: TrendingUp,
    value: '96%',
    label: 'Attendance Rate',
  },
  {
    icon: Award,
    value: 'Rated Outstanding',
    label: 'by Independent Inspection',
  },
]

export default function ForParentsHero() {
  return (
    <section
      aria-labelledby="for-parents-hero-heading"
      className="relative bg-[#1E3A5F] pt-24 pb-20 sm:pt-28 sm:pb-28 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/pages/parents.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-15"
        sizes="100vw"
      />
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E85D75]/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#2ECDA7]/10 blur-3xl" />
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
              <a
                href="/"
                className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:text-white"
              >
                Home
              </a>
            </li>
            <li aria-hidden="true" className="text-white/20">/</li>
            <li className="text-white/70" aria-current="page">For Parents</li>
          </ol>
        </nav>

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          For Parents
        </div>

        <h1
          id="for-parents-hero-heading"
          className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl"
        >
          Your Child&apos;s{' '}
          <span className="relative inline-block text-[#2ECDA7]">
            Wellbeing
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2ECDA7]/40 rounded-full"
              aria-hidden="true"
            />
          </span>{' '}
          Is Our Priority
        </h1>

        <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 font-body">
          MCR Educational is a trusted alternative provision supporting young people aged 11–16 who
          need a different kind of learning environment. We work closely with families to ensure
          every young person feels safe, valued, and is making real progress.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="bg-[#E85D75] hover:bg-[#E85D75]/90 text-white font-bold shadow-lg px-8 focus-visible:ring-2 focus-visible:ring-[#E85D75] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3A5F]"
          >
            <Link href="/contact">
              Speak to Our Team
              <ArrowRight size={18} aria-hidden="true" className="ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold px-8 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3A5F]"
          >
            <a href="#" aria-label="Download Parent Guide (PDF)">
              <Download size={16} aria-hidden="true" className="mr-2" />
              Download Parent Guide
            </a>
          </Button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-white/8 border border-white/12 rounded-2xl px-6 py-5"
            >
              <div
                className="w-11 h-11 rounded-xl bg-[#2ECDA7]/15 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <Icon size={22} className="text-[#2ECDA7]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-stats font-bold text-white text-xl leading-tight">{value}</p>
                <p className="text-white/55 text-xs mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
