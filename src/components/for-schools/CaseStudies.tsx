import { Quote } from 'lucide-react'

const cases = [
  {
    school: 'Pupil Referral Unit, Salford',
    role: 'SENCO',
    quote:
      'Within three months, a student who had not engaged with education for over a year was attending five days a week and starting to rebuild his confidence. The team\'s approach was transformative.',
    outcome: '100% attendance after 12 weeks',
    tag: 'Re-engagement',
  },
  {
    school: 'Secondary Academy, Trafford',
    role: 'Inclusion Manager',
    quote:
      'The half-term reports are genuinely useful — detailed, honest, and focused on what really matters. I can go to governors with real evidence of progress.',
    outcome: '87% of targets met by end of year',
    tag: 'Outcomes data',
  },
  {
    school: 'Local Authority, Greater Manchester',
    role: 'EHC Coordinator',
    quote:
      'MCR Educational are one of the few alternative providers we trust to take complex SEMH referrals. Their trauma-informed approach is reflected in every interaction.',
    outcome: '12 SEMH referrals placed in one academic year',
    tag: 'SEMH provision',
  },
]

export default function CaseStudies() {
  return (
    <section
      aria-labelledby="case-studies-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Success stories
          </p>
          <h2
            id="case-studies-heading"
            className="font-heading font-bold text-primary text-3xl sm:text-4xl mb-4"
          >
            What Schools &amp; Authorities Say
          </h2>
          <p className="text-neutral-dark/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it — here&apos;s what the professionals who refer to us
            have to say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map(({ school, role, quote, outcome, tag }) => (
            <article
              key={school}
              className="rounded-3xl border border-primary/8 bg-neutral-light p-8 flex flex-col"
              aria-label={`Case study from ${school}`}
            >
              {/* Tag */}
              <span className="inline-flex self-start items-center bg-primary/8 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-6">
                {tag}
              </span>

              {/* Quote */}
              <Quote size={22} className="text-secondary/40 mb-3 shrink-0" aria-hidden="true" />
              <blockquote className="text-neutral-dark/70 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Outcome pill */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl px-4 py-2.5 mb-6">
                <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-0.5">
                  Outcome
                </p>
                <p className="text-primary font-bold text-sm">{outcome}</p>
              </div>

              {/* Attribution */}
              <footer className="border-t border-primary/8 pt-4">
                <p className="text-primary font-semibold text-sm">{role}</p>
                <p className="text-neutral-dark/45 text-xs">{school}</p>
              </footer>
            </article>
          ))}
        </div>

        <p className="text-center text-neutral-dark/35 text-xs mt-8">
          Names and specific identifying details withheld to protect confidentiality.
        </p>
      </div>
    </section>
  )
}
