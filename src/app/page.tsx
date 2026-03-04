import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, School, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsCounter from '@/components/home/StatsCounter';
import ProgrammesGrid from '@/components/home/ProgrammesGrid';
import ValuesSection from '@/components/home/ValuesSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import NewsPreview from '@/components/home/NewsPreview';
import CtaBanner from '@/components/home/CtaBanner';

// ─── Audience Selector Data ───────────────────────────────────────────────────
const audiences = [
  {
    Icon: School,
    title: "I'm a School or Local Authority",
    description:
      'Learn about our referral process, outcomes data, and how to partner with MCR Educational.',
    cta: 'Refer a Young Person',
    href: '/for-schools',
    accent: 'bg-primary',
    hoverBorder: 'hover:border-primary',
    hoverTitle: 'group-hover:text-primary',
    ring: 'focus-visible:ring-primary',
  },
  {
    Icon: Users,
    title: "I'm a Parent or Carer",
    description:
      'Find out what a typical day looks like, our safeguarding commitments, and how we support your child.',
    cta: 'Learn More',
    href: '/for-parents',
    accent: 'bg-secondary',
    hoverBorder: 'hover:border-secondary',
    hoverTitle: 'group-hover:text-secondary',
    ring: 'focus-visible:ring-secondary',
  },
  {
    Icon: Sparkles,
    title: "I'm a Young Person",
    description:
      'See what we offer, hear from other students, and discover a different way to learn.',
    cta: 'See What We Do',
    href: '/for-students',
    accent: 'bg-accent',
    hoverBorder: 'hover:border-accent',
    hoverTitle: 'group-hover:text-accent',
    ring: 'focus-visible:ring-accent',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main id="main-content">

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary"
      >
        {/* Hero background image */}
        <Image
          src="/images/hero/hero-dance.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-8 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              MCR HQ CIC — Alternative Education Provision, Greater Manchester
            </div>

            {/* Main headline */}
            <h1
              id="hero-heading"
              className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-6"
            >
              Empowering{' '}
              <span className="text-secondary">Young People</span>
              <br />
              Through Dance,{' '}
              <span className="relative inline-block">
                Education
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full opacity-70"
                  aria-hidden="true"
                />
              </span>{' '}
              &amp; Support
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              Alternative provision in Greater Manchester that puts creativity and wellbeing
              at the heart of learning — for young people aged 11–16 who deserve a fresh start.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-lg shadow-secondary/30 px-7"
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
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent font-semibold px-7"
              >
                <Link href="/programmes">Our Programmes</Link>
              </Button>
            </div>

            {/* Quick trust signals */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50" aria-label="Key facts">
              {['150+ students supported', '95% attendance rate', '40+ partner schools'].map((fact) => (
                <span key={fact} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade into stats section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </section>

      {/* ── 2. IMPACT STATS ───────────────────────────────────────────────── */}
      <StatsCounter />

      {/* ── 3. AUDIENCE SELECTOR ──────────────────────────────────────────── */}
      <section
        aria-labelledby="audience-heading"
        className="bg-neutral-light py-20 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="audience-heading"
              className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-3"
            >
              How can we help you?
            </h2>
            <p className="text-neutral-dark/60 text-base sm:text-lg max-w-xl mx-auto">
              Choose the section that best describes you to find the information most relevant to your needs.
            </p>
          </div>

          <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map(({ Icon, title, description, cta, href, accent, hoverBorder, hoverTitle, ring }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`group flex flex-col h-full bg-white rounded-2xl border-2 border-transparent ${hoverBorder} p-8 shadow-sm hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 ${ring} focus-visible:ring-offset-2`}
                  aria-label={title}
                >
                  <div className={`w-14 h-14 rounded-xl ${accent} text-white flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-110`}>
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className={`font-heading font-bold text-xl text-neutral-dark mb-3 transition-colors duration-150 ${hoverTitle}`}>
                    {title}
                  </h3>
                  <p className="text-neutral-dark/60 text-sm leading-relaxed flex-1">
                    {description}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-150">
                    {cta}
                    <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. PROGRAMMES OVERVIEW ────────────────────────────────────────── */}
      <ProgrammesGrid />

      {/* ── 5. VALUES ─────────────────────────────────────────────────────── */}
      <ValuesSection />

      {/* ── 6. TESTIMONIALS ───────────────────────────────────────────────── */}
      <TestimonialsCarousel />

      {/* ── 7. NEWS & EVENTS ──────────────────────────────────────────────── */}
      <NewsPreview />

      {/* ── 8. CTA BANNER ─────────────────────────────────────────────────── */}
      <CtaBanner />

    </main>
  );
}
