// FILE: src/components/for-students/ForStudentsHero.tsx

import Image from 'next/image'
import Link from 'next/link'
import { Music, GraduationCap, Users, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingCards = [
  {
    icon: Music,
    label: 'Dance & Music',
    description: 'Express yourself through performance',
    iconBg: 'bg-accent/20',
    iconColor: 'text-accent',
    border: 'border-accent/30',
  },
  {
    icon: GraduationCap,
    label: 'Real Qualifications',
    description: 'Accredited awards you can be proud of',
    iconBg: 'bg-secondary/20',
    iconColor: 'text-secondary',
    border: 'border-secondary/30',
  },
  {
    icon: Users,
    label: 'Small Groups',
    description: 'We actually know your name here',
    iconBg: 'bg-white/15',
    iconColor: 'text-white',
    border: 'border-white/20',
  },
]

export default function ForStudentsHero() {
  return (
    <section
      aria-labelledby="for-students-hero-heading"
      className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/80 pt-24 pb-0 sm:pt-28 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/pages/students.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-12"
        sizes="100vw"
      />
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-secondary/10 blur-2xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Wavy bottom mask */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z" fill="#F7F8FC" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-accent text-neutral-dark text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-accent/30">
          <span
            className="w-2 h-2 rounded-full bg-neutral-dark/40 animate-pulse"
            aria-hidden="true"
          />
          For Students
        </div>

        <h1
          id="for-students-hero-heading"
          className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight mb-6 max-w-3xl"
        >
          This Is Your{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-accent">Place to Thrive</span>
            <span
              className="absolute -bottom-1 left-0 right-0 h-3 bg-secondary/40 -rotate-1 rounded"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="font-body text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
          Express yourself, build skills, and find your path &mdash; in a place that actually gets
          you.
        </p>

        <div className="flex flex-wrap gap-4 mb-20 sm:mb-24">
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold shadow-xl shadow-secondary/30 px-8 text-base focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <a href="#activities">
              See What We Do
              <ArrowRight size={18} aria-hidden="true" className="ml-2" />
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 bg-transparent font-semibold px-8 text-base focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Link href="/contact">
              <MessageCircle size={18} aria-hidden="true" className="mr-2" />
              Talk to Us
            </Link>
          </Button>
        </div>
      </div>

      {/* Floating cards row — sits above the wave */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {floatingCards.map(({ icon: Icon, label, description, iconBg, iconColor, border }) => (
            <div
              key={label}
              className={`flex items-center gap-4 bg-white/10 backdrop-blur-sm border ${border} rounded-2xl px-5 py-4 shadow-lg`}
            >
              <div className={`shrink-0 ${iconBg} rounded-xl p-3`}>
                <Icon size={24} aria-hidden="true" className={iconColor} />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm sm:text-base leading-tight">
                  {label}
                </p>
                <p className="font-body text-white/60 text-xs sm:text-sm mt-0.5">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
